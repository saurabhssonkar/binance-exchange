import axios from "axios";
import { Depth, KLine, Ticker, Trade } from "./types";

// const BASE_URL = "https://exchange-proxy.100xdevs.com/api/v1";
const BASE_URL = "http://localhost:3000/api/v1";

export async function getTicker(market: string): Promise<Ticker> {
    const tickers = await getTickers();
    // console.log("tickers",tickers,market);
    const ticker = tickers.find(t => t.symbol === market);
    console.log("tickers",ticker,market);

    if (!ticker) {
        throw new Error(`No ticker found for ${market}`);
    }
    return ticker;
}

export async function getTickers(): Promise<Ticker[]> {
    // Hardcoded data instead of API call
    return [
        {
            "firstPrice": "100.50",
            "high": "105.20",
            "lastPrice": "103.75",
            "low": "99.80",
            "priceChange": "3.25",
            "priceChangePercent": "3.23",
            "quoteVolume": "2500000.00",
            "symbol": "BTCUSDT",
            "trades": "12500",
            "volume": "24000.50"
        },
        {
            "firstPrice": "1.50",
            "high": "1.65",
            "lastPrice": "1.62",
            "low": "1.48",
            "priceChange": "0.12",
            "priceChangePercent": "8.00",
            "quoteVolume": "500000.00",
            "symbol": "ETHUSDT",
            "trades": "8500",
            "volume": "310000.00"
        },
        {
            "firstPrice": "0.35",
            "high": "0.38",
            "lastPrice": "0.37",
            "low": "0.34",
            "priceChange": "0.02",
            "priceChangePercent": "5.71",
            "quoteVolume": "1200000.00",
            "symbol": "XRPUSDT",
            "trades": "4200",
            "volume": "3200000.00"
        },
        {
            "firstPrice": "25.00",
            "high": "26.50",
            "lastPrice": "25.80",
            "low": "24.75",
            "priceChange": "0.80",
            "priceChangePercent": "3.20",
            "quoteVolume": "750000.00",
            "symbol": "SOLUSDT",
            "trades": "6800",
            "volume": "29000.00"
        },
        {
            "firstPrice": "0.12",
            "high": "0.13",
            "lastPrice": "0.125",
            "low": "0.115",
            "priceChange": "0.005",
            "priceChangePercent": "4.17",
            "quoteVolume": "350000.00",
            "symbol": "DOGEUSDT",
            "trades": "3200",
            "volume": "2800000.00"
        },
        {
            "firstPrice": "5.50",
            "high": "5.75",
            "lastPrice": "5.60",
            "low": "5.45",
            "priceChange": "0.10",
            "priceChangePercent": "1.82",
            "quoteVolume": "180000.00",
            "symbol": "LTCUSDT",
            "trades": "2100",
            "volume": "32000.00"
        },
        {
            "firstPrice": "300.00",
            "high": "315.00",
            "lastPrice": "310.50",
            "low": "298.50",
            "priceChange": "10.50",
            "priceChangePercent": "3.50",
            "quoteVolume": "420000.00",
            "symbol": "BNBUSDT",
            "trades": "5400",
            "volume": "1350.00"
        },
        {
            "firstPrice": "0.85",
            "high": "0.92",
            "lastPrice": "0.89",
            "low": "0.84",
            "priceChange": "0.04",
            "priceChangePercent": "4.71",
            "quoteVolume": "950000.00",
            "symbol": "ADAUSDT",
            "trades": "3800",
            "volume": "1070000.00"
        },
        {
            "firstPrice": "0.000025",
            "high": "0.000028",
            "lastPrice": "0.000027",
            "low": "0.000024",
            "priceChange": "0.000002",
            "priceChangePercent": "8.00",
            "quoteVolume": "150000.00",
            "symbol": "SHIBUSDT",
            "trades": "2900",
            "volume": "5600000000.00"
        },
        {
            "firstPrice": "15.00",
            "high": "15.80",
            "lastPrice": "15.50",
            "low": "14.90",
            "priceChange": "0.50",
            "priceChangePercent": "3.33",
            "quoteVolume": "320000.00",
            "symbol": "DOTUSDT",
            "trades": "1900",
            "volume": "21000.00"
        }
    ];
}


export async function getDepth(market: string): Promise<Depth> {
    const response = await axios.get(`${BASE_URL}/depth?symbol=${market}`);
    return response.data;
}
export async function getTrades(market: string): Promise<Trade[]> {
    // const response = await axios.get(`${BASE_URL}/trades?symbol=${market}`);
    // return response.data;

    const hardcodedTrades: Record<string, Trade[]> = {
        "BTCUSDT": [
            { id: 1, isBuyerMaker: true, price: "103.70", quantity: "1.25", quoteQuantity: "129.625", timestamp: Date.now() - 10000 },
            { id: 2, isBuyerMaker: false, price: "103.75", quantity: "0.80", quoteQuantity: "83.00", timestamp: Date.now() - 8000 },
            { id: 3, isBuyerMaker: true, price: "103.72", quantity: "2.10", quoteQuantity: "217.812", timestamp: Date.now() - 5000 }
        ],
        "ETHUSDT": [
            { id: 101, isBuyerMaker: false, price: "1.62", quantity: "5.0", quoteQuantity: "8.10", timestamp: Date.now() - 9000 },
            { id: 102, isBuyerMaker: true, price: "1.61", quantity: "3.2", quoteQuantity: "5.152", timestamp: Date.now() - 7000 },
            { id: 103, isBuyerMaker: false, price: "1.62", quantity: "7.5", quoteQuantity: "12.15", timestamp: Date.now() - 3000 }
        ],
        "XRPUSDT": [
            { id: 201, isBuyerMaker: true, price: "0.37", quantity: "1000", quoteQuantity: "370.00", timestamp: Date.now() - 12000 },
            { id: 202, isBuyerMaker: false, price: "0.371", quantity: "500", quoteQuantity: "185.50", timestamp: Date.now() - 6000 },
            { id: 203, isBuyerMaker: true, price: "0.369", quantity: "750", quoteQuantity: "276.75", timestamp: Date.now() - 2000 }
        ],
        "SOLUSDT": [
            { id: 301, isBuyerMaker: false, price: "25.80", quantity: "3.0", quoteQuantity: "77.40", timestamp: Date.now() - 11000 },
            { id: 302, isBuyerMaker: true, price: "25.75", quantity: "1.5", quoteQuantity: "38.625", timestamp: Date.now() - 8000 },
            { id: 303, isBuyerMaker: false, price: "25.82", quantity: "2.2", quoteQuantity: "56.804", timestamp: Date.now() - 4000 }
        ],
        "DOGEUSDT": [
            { id: 401, isBuyerMaker: true, price: "0.125", quantity: "5000", quoteQuantity: "625.00", timestamp: Date.now() - 15000 },
            { id: 402, isBuyerMaker: false, price: "0.126", quantity: "3000", quoteQuantity: "378.00", timestamp: Date.now() - 9000 },
            { id: 403, isBuyerMaker: true, price: "0.124", quantity: "4000", quoteQuantity: "496.00", timestamp: Date.now() - 5000 }
        ],
        "LTCUSDT": [
            { id: 501, isBuyerMaker: false, price: "5.60", quantity: "2.0", quoteQuantity: "11.20", timestamp: Date.now() - 13000 },
            { id: 502, isBuyerMaker: true, price: "5.58", quantity: "1.5", quoteQuantity: "8.37", timestamp: Date.now() - 7000 },
            { id: 503, isBuyerMaker: false, price: "5.61", quantity: "3.0", quoteQuantity: "16.83", timestamp: Date.now() - 3000 }
        ],
        "BNBUSDT": [
            { id: 601, isBuyerMaker: true, price: "310.50", quantity: "0.5", quoteQuantity: "155.25", timestamp: Date.now() - 14000 },
            { id: 602, isBuyerMaker: false, price: "310.75", quantity: "0.3", quoteQuantity: "93.225", timestamp: Date.now() - 8000 },
            { id: 603, isBuyerMaker: true, price: "310.25", quantity: "0.7", quoteQuantity: "217.175", timestamp: Date.now() - 4000 }
        ],
        "ADAUSDT": [
            { id: 701, isBuyerMaker: false, price: "0.89", quantity: "500", quoteQuantity: "445.00", timestamp: Date.now() - 16000 },
            { id: 702, isBuyerMaker: true, price: "0.88", quantity: "300", quoteQuantity: "264.00", timestamp: Date.now() - 9000 },
            { id: 703, isBuyerMaker: false, price: "0.895", quantity: "400", quoteQuantity: "358.00", timestamp: Date.now() - 5000 }
        ],
        "SHIBUSDT": [
            { id: 801, isBuyerMaker: true, price: "0.000027", quantity: "10000000", quoteQuantity: "270.00", timestamp: Date.now() - 17000 },
            { id: 802, isBuyerMaker: false, price: "0.000028", quantity: "5000000", quoteQuantity: "140.00", timestamp: Date.now() - 10000 },
            { id: 803, isBuyerMaker: true, price: "0.000026", quantity: "8000000", quoteQuantity: "208.00", timestamp: Date.now() - 6000 }
        ],
        "DOTUSDT": [
            { id: 901, isBuyerMaker: false, price: "15.50", quantity: "5.0", quoteQuantity: "77.50", timestamp: Date.now() - 18000 },
            { id: 902, isBuyerMaker: true, price: "15.45", quantity: "3.0", quoteQuantity: "46.35", timestamp: Date.now() - 11000 },
            { id: 903, isBuyerMaker: false, price: "15.55", quantity: "4.0", quoteQuantity: "62.20", timestamp: Date.now() - 7000 }
        ]
    };

    // Return trades for the requested market or empty array if not found
    return hardcodedTrades[market] || [];
}

export async function getKlines(market: string, interval: string, startTime: number, endTime: number): Promise<KLine[]> {
    // const response = await axios.get(`${BASE_URL}/klines?symbol=${market}&interval=${interval}&startTime=${startTime}&endTime=${endTime}`);
    // const data: KLine[] = response.data;
    // return data.sort((x, y) => (Number(x.end) < Number(y.end) ? -1 : 1));

    const hardcodedData: Record<string, KLine[]> = {
        "BTCUSDT": [{
            close: "103.75",
            end: endTime.toString(),
            high: "105.20",
            low: "99.80",
            open: "100.50",
            quoteVolume: "2500000.00",
            start: startTime.toString(),
            trades: "12500",
            volume: "24000.50"
        }],
        "ETHUSDT": [{
            close: "1.62",
            end: endTime.toString(),
            high: "1.65",
            low: "1.48",
            open: "1.50",
            quoteVolume: "500000.00",
            start: startTime.toString(),
            trades: "8500",
            volume: "310000.00"
        }],
        "XRPUSDT": [{
            close: "0.37",
            end: endTime.toString(),
            high: "0.38",
            low: "0.34",
            open: "0.35",
            quoteVolume: "1200000.00",
            start: startTime.toString(),
            trades: "4200",
            volume: "3200000.00"
        }],
        "SOLUSDT": [{
            close: "25.80",
            end: endTime.toString(),
            high: "26.50",
            low: "24.75",
            open: "25.00",
            quoteVolume: "750000.00",
            start: startTime.toString(),
            trades: "6800",
            volume: "29000.00"
        }],
        "DOGEUSDT": [{
            close: "0.125",
            end: endTime.toString(),
            high: "0.13",
            low: "0.115",
            open: "0.12",
            quoteVolume: "350000.00",
            start: startTime.toString(),
            trades: "3200",
            volume: "2800000.00"
        }],
        "LTCUSDT": [{
            close: "5.60",
            end: endTime.toString(),
            high: "5.75",
            low: "5.45",
            open: "5.50",
            quoteVolume: "180000.00",
            start: startTime.toString(),
            trades: "2100",
            volume: "32000.00"
        }],
        "BNBUSDT": [{
            close: "310.50",
            end: endTime.toString(),
            high: "315.00",
            low: "298.50",
            open: "300.00",
            quoteVolume: "420000.00",
            start: startTime.toString(),
            trades: "5400",
            volume: "1350.00"
        }],
        "ADAUSDT": [{
            close: "0.89",
            end: endTime.toString(),
            high: "0.92",
            low: "0.84",
            open: "0.85",
            quoteVolume: "950000.00",
            start: startTime.toString(),
            trades: "3800",
            volume: "1070000.00"
        }],
        "SHIBUSDT": [{
            close: "0.000027",
            end: endTime.toString(),
            high: "0.000028",
            low: "0.000024",
            open: "0.000025",
            quoteVolume: "150000.00",
            start: startTime.toString(),
            trades: "2900",
            volume: "5600000000.00"
        }],
        "DOTUSDT": [{
            close: "15.50",
            end: endTime.toString(),
            high: "15.80",
            low: "14.90",
            open: "15.00",
            quoteVolume: "320000.00",
            start: startTime.toString(),
            trades: "1900",
            volume: "21000.00"
        }]
    };

    // Return data for the requested market or empty array if not found
    const data = hardcodedData[market] || [];
    return data.sort((x, y) => (Number(x.end) < Number(y.end) ? -1 : 1));
}

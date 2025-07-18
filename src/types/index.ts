export interface Stock {
  symbol: string;
  name: string;
  price: number;
  change: number;
  changePercent: number;
  volume: number;
  marketCap: number;
  high: number;
  low: number;
  open: number;
  close: number;
}

export interface Cryptocurrency {
  symbol: string;
  name: string;
  price: number;
  change: number;
  changePercent: number;
  volume: number;
  marketCap: number;
  high24h: number;
  low24h: number;
  circulatingSupply: number;
}

export interface Portfolio {
  totalValue: number;
  totalChange: number;
  totalChangePercent: number;
  positions: Position[];
}

export interface Position {
  symbol: string;
  name: string;
  quantity: number;
  averagePrice: number;
  currentPrice: number;
  totalValue: number;
  unrealizedGain: number;
  unrealizedGainPercent: number;
  type: 'stock' | 'crypto';
}

export interface Trade {
  id: string;
  symbol: string;
  type: 'buy' | 'sell';
  quantity: number;
  price: number;
  total: number;
  timestamp: Date;
  status: 'pending' | 'completed' | 'cancelled';
}

export interface MarketData {
  timestamp: Date;
  price: number;
  volume: number;
}

export interface AIAnalysis {
  symbol: string;
  recommendation: 'buy' | 'sell' | 'hold';
  confidence: number;
  reasons: string[];
  targetPrice: number;
  riskLevel: 'low' | 'medium' | 'high';
  timeHorizon: 'short' | 'medium' | 'long';
}

export interface TechnicalIndicators {
  rsi: number;
  macd: {
    macd: number;
    signal: number;
    histogram: number;
  };
  movingAverages: {
    sma20: number;
    sma50: number;
    sma200: number;
    ema12: number;
    ema26: number;
  };
  bollingerBands: {
    upper: number;
    middle: number;
    lower: number;
  };
}

export interface Watchlist {
  id: string;
  name: string;
  symbols: string[];
  createdAt: Date;
  updatedAt: Date;
}

export interface User {
  id: string;
  email: string;
  name: string;
  avatar?: string;
  portfolio: Portfolio;
  watchlists: Watchlist[];
  preferences: {
    theme: 'light' | 'dark';
    notifications: boolean;
    riskTolerance: 'low' | 'medium' | 'high';
  };
}
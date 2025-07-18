export interface AdminUser {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  avatar?: string;
  role: 'user' | 'admin';
  status: 'active' | 'suspended' | 'inactive';
  createdAt: Date;
  lastLogin?: Date;
  totalBalance: number;
  portfolioValue: number;
  totalTrades: number;
  winRate: number;
}

export interface UserBalance {
  userId: string;
  cashBalance: number;
  portfolioValue: number;
  totalValue: number;
  unrealizedPnL: number;
  realizedPnL: number;
  lastUpdated: Date;
}

export interface AdminPosition {
  id: string;
  userId: string;
  symbol: string;
  name: string;
  type: 'stock' | 'crypto';
  quantity: number;
  averagePrice: number;
  currentPrice: number;
  totalValue: number;
  unrealizedGain: number;
  unrealizedGainPercent: number;
  createdAt: Date;
  updatedAt: Date;
}

export interface AdminTransaction {
  id: string;
  userId: string;
  type: 'buy' | 'sell' | 'deposit' | 'withdrawal' | 'adjustment';
  symbol?: string;
  quantity?: number;
  price?: number;
  amount: number;
  status: 'pending' | 'completed' | 'failed' | 'cancelled';
  description: string;
  createdAt: Date;
  completedAt?: Date;
  adminNote?: string;
}

export interface AdminStats {
  totalUsers: number;
  activeUsers: number;
  suspendedUsers: number;
  totalPortfolioValue: number;
  totalTrades: number;
  todayTrades: number;
  totalRevenue: number;
  monthlyRevenue: number;
}

export interface BalanceAdjustment {
  userId: string;
  adjustmentType: 'add' | 'subtract' | 'set';
  amount: number;
  reason: string;
  notes?: string;
}

export interface PortfolioPosition {
  symbol: string;
  quantity: number;
  averagePrice: number;
  action: 'add' | 'update' | 'remove';
}
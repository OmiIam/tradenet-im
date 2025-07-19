import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import dotenv from 'dotenv';
import path from 'path';
import DatabaseManager from './models/Database';
import createAuthRoutes from './routes/auth';
import createAdminRoutes from './routes/admin';
import createUserRoutes from './routes/user';

// Load environment variables
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

// Initialize database
const database = new DatabaseManager();

// Security middleware
app.use(helmet({
  contentSecurityPolicy: {
    directives: {
      defaultSrc: ["'self'"],
      styleSrc: ["'self'", "'unsafe-inline'"],
      scriptSrc: ["'self'"],
      imgSrc: ["'self'", "data:", "https:"],
    },
  },
}));

// CORS configuration
app.use(cors({
  origin: process.env.CORS_ORIGIN || 'http://localhost:3000',
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
}));

// Body parsing middleware
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true, limit: '10mb' }));

// Request logging middleware
app.use((req, res, next) => {
  const timestamp = new Date().toISOString();
  console.log(`[${timestamp}] ${req.method} ${req.path} - ${req.ip}`);
  next();
});

// Health check endpoint
app.get('/health', (req, res) => {
  res.json({
    status: 'healthy',
    timestamp: new Date().toISOString(),
    environment: process.env.NODE_ENV || 'development',
    version: '1.0.0'
  });
});

// API routes
app.use('/api/auth', createAuthRoutes(database));
app.use('/api/admin', createAdminRoutes(database));
app.use('/api/user', createUserRoutes(database));

// API documentation endpoint
app.get('/api', (req, res) => {
  res.json({
    name: 'Trade.im API',
    version: '1.0.0',
    description: 'Trading platform API with admin functionality',
    endpoints: {
      auth: {
        base: '/api/auth',
        routes: [
          'POST /register - Register new user',
          'POST /login - User login',
          'POST /logout - User logout',
          'GET /me - Get current user',
          'POST /refresh - Refresh token',
          'POST /change-password - Change password'
        ]
      },
      user: {
        base: '/api/user',
        routes: [
          'GET /dashboard - Get dashboard data',
          'GET /profile - Get user profile',
          'PUT /profile - Update user profile',
          'GET /portfolio - Get user portfolio',
          'GET /transactions - Get user transactions',
          'POST /transactions/deposit - Create deposit',
          'POST /transactions/withdraw - Create withdrawal',
          'GET /market-data - Get market data',
          'GET /stats - Get account statistics'
        ]
      },
      admin: {
        base: '/api/admin',
        routes: [
          'GET /stats - Get admin dashboard stats',
          'GET /users - Get all users',
          'GET /users/:userId - Get user by ID',
          'PUT /users/:userId - Update user',
          'DELETE /users/:userId - Delete user',
          'PUT /users/:userId/status - Toggle user status',
          'POST /users/:userId/balance - Adjust user balance',
          'GET /users/:userId/transactions - Get user transactions',
          'POST /users/:userId/transactions - Create transaction',
          'GET /users/:userId/portfolio - Get user portfolio',
          'PUT /users/:userId/portfolio - Update user portfolio',
          'POST /users/:userId/portfolio/positions - Add portfolio position',
          'GET /transactions - Get all transactions',
          'GET /portfolios - Get all portfolios'
        ]
      }
    }
  });
});

// Error handling middleware
app.use((err: any, req: express.Request, res: express.Response, next: express.NextFunction) => {
  console.error('Error:', err);
  
  // Handle different error types
  if (err.name === 'ValidationError') {
    return res.status(400).json({
      error: 'Validation error',
      details: err.message
    });
  }
  
  if (err.name === 'UnauthorizedError') {
    return res.status(401).json({
      error: 'Unauthorized',
      message: 'Invalid token'
    });
  }
  
  if (err.code === 'SQLITE_CONSTRAINT_UNIQUE') {
    return res.status(400).json({
      error: 'Duplicate entry',
      message: 'A record with this data already exists'
    });
  }
  
  // Default error response
  res.status(500).json({
    error: 'Internal server error',
    message: process.env.NODE_ENV === 'development' ? err.message : 'Something went wrong'
  });
});

// 404 handler
app.use((req, res) => {
  res.status(404).json({
    error: 'Not found',
    message: `Route ${req.method} ${req.path} not found`
  });
});

// Graceful shutdown
process.on('SIGTERM', () => {
  console.log('SIGTERM received, shutting down gracefully...');
  database.close();
  process.exit(0);
});

process.on('SIGINT', () => {
  console.log('SIGINT received, shutting down gracefully...');
  database.close();
  process.exit(0);
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
  console.log(`📊 Dashboard: http://localhost:${PORT}/api`);
  console.log(`🔐 Environment: ${process.env.NODE_ENV || 'development'}`);
  console.log(`🗄️  Database: ${process.env.DB_PATH || './database/trading_platform.db'}`);
  console.log(`🌐 CORS Origin: ${process.env.CORS_ORIGIN || 'http://localhost:3000'}`);
});

export default app;
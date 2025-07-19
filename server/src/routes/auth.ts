import express from 'express';
import AuthController from '../controllers/auth';
import { authenticateToken } from '../middleware/auth';
import { validateRegistration, validateLogin } from '../middleware/validation';
import DatabaseManager from '../models/Database';
import rateLimit from 'express-rate-limit';

const router = express.Router();

// Rate limiting for auth routes
const authLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 5, // limit each IP to 5 requests per windowMs
  message: 'Too many authentication attempts, please try again later',
  standardHeaders: true,
  legacyHeaders: false,
});

const loginLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 3, // limit each IP to 3 login attempts per windowMs
  message: 'Too many login attempts, please try again later',
  standardHeaders: true,
  legacyHeaders: false,
});

export default function createAuthRoutes(database: DatabaseManager) {
  const authController = new AuthController(database);

  // Public routes
  router.post('/register', authLimiter, validateRegistration, async (req, res) => {
    await authController.register(req, res);
  });

  router.post('/login', loginLimiter, validateLogin, async (req, res) => {
    await authController.login(req, res);
  });

  router.post('/refresh', authLimiter, async (req, res) => {
    await authController.refreshToken(req, res);
  });

  // Protected routes
  router.post('/logout', authenticateToken, async (req, res) => {
    await authController.logout(req, res);
  });

  router.get('/me', authenticateToken, async (req, res) => {
    await authController.getMe(req, res);
  });

  router.post('/change-password', authenticateToken, async (req, res) => {
    await authController.changePassword(req, res);
  });

  return router;
}
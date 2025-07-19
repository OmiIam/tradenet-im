import { Request, Response, NextFunction } from 'express';
import AuthUtils, { JWTPayload } from '../utils/auth';

// Extend Express Request interface to include user
declare global {
  namespace Express {
    interface Request {
      user?: JWTPayload;
    }
  }
}

export interface AuthenticatedRequest extends Request {
  user: JWTPayload;
}

export const authenticateToken = (req: Request, res: Response, next: NextFunction): void => {
  const authHeader = req.headers['authorization'];
  const token = AuthUtils.extractTokenFromHeader(authHeader);

  if (!token) {
    res.status(401).json({ error: 'Access token required' });
    return;
  }

  const payload = AuthUtils.verifyToken(token);
  if (!payload) {
    res.status(403).json({ error: 'Invalid or expired token' });
    return;
  }

  req.user = payload;
  next();
};

export const requireAdmin = (req: Request, res: Response, next: NextFunction): void => {
  if (!req.user) {
    res.status(401).json({ error: 'Authentication required' });
    return;
  }

  if (req.user.role !== 'admin') {
    res.status(403).json({ error: 'Admin access required' });
    return;
  }

  next();
};

export const requireUser = (req: Request, res: Response, next: NextFunction): void => {
  if (!req.user) {
    res.status(401).json({ error: 'Authentication required' });
    return;
  }

  next();
};

export const optionalAuth = (req: Request, res: Response, next: NextFunction): void => {
  const authHeader = req.headers['authorization'];
  const token = AuthUtils.extractTokenFromHeader(authHeader);

  if (token) {
    const payload = AuthUtils.verifyToken(token);
    if (payload) {
      req.user = payload;
    }
  }

  next();
};

// Middleware to check if user can access resource (either admin or resource owner)
export const requireOwnershipOrAdmin = (userIdParam: string = 'userId') => {
  return (req: Request, res: Response, next: NextFunction): void => {
    if (!req.user) {
      res.status(401).json({ error: 'Authentication required' });
      return;
    }

    const targetUserId = parseInt(req.params[userIdParam]);
    const currentUserId = req.user.userId;
    const isAdmin = req.user.role === 'admin';

    if (!isAdmin && currentUserId !== targetUserId) {
      res.status(403).json({ error: 'Access denied' });
      return;
    }

    next();
  };
};

export default {
  authenticateToken,
  requireAdmin,
  requireUser,
  optionalAuth,
  requireOwnershipOrAdmin
};
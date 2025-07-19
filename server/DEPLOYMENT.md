# TradeNet.im Backend Deployment Guide

## 🚀 Production Deployment Setup

### Prerequisites
- Node.js 18+ 
- PM2 for process management
- Nginx for reverse proxy
- SSL certificate for tradenet.im
- Domain DNS configured

### 1. Server Setup

```bash
# Install Node.js
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt-get install -y nodejs

# Install PM2 globally
sudo npm install -g pm2

# Install Nginx
sudo apt update
sudo apt install nginx

# Create application directory
sudo mkdir -p /var/app/tradenet
sudo chown $USER:$USER /var/app/tradenet
```

### 2. Environment Configuration

Copy `.env.production` to your production server and update these critical values:

```bash
# Copy production environment file
cp .env.production .env

# Update these values immediately:
JWT_SECRET=YOUR_SUPER_SECURE_JWT_SECRET_HERE
EMAIL_PASS=your-actual-email-app-password
ALPHA_VANTAGE_API_KEY=your-real-api-key
BINANCE_API_KEY=your-real-binance-key
BINANCE_API_SECRET=your-real-binance-secret
```

### 3. SSL Certificate Setup

```bash
# Using Certbot (Let's Encrypt)
sudo apt install certbot python3-certbot-nginx
sudo certbot --nginx -d tradenet.im -d api.tradenet.im
```

### 4. Nginx Configuration

Create `/etc/nginx/sites-available/tradenet.im`:

```nginx
# Main frontend (tradenet.im)
server {
    listen 80;
    listen 443 ssl http2;
    server_name tradenet.im www.tradenet.im;
    
    ssl_certificate /etc/letsencrypt/live/tradenet.im/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/tradenet.im/privkey.pem;
    
    # Frontend static files
    root /var/app/tradenet/frontend/dist;
    index index.html;
    
    location / {
        try_files $uri $uri/ /index.html;
    }
}

# API backend (api.tradenet.im)
server {
    listen 80;
    listen 443 ssl http2;
    server_name api.tradenet.im;
    
    ssl_certificate /etc/letsencrypt/live/tradenet.im/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/tradenet.im/privkey.pem;
    
    location / {
        proxy_pass http://localhost:3001;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_cache_bypass $http_upgrade;
    }
}
```

### 5. Application Deployment

```bash
# Clone and setup
cd /var/app/tradenet
git clone <your-repo> .
cd server
npm install --production

# Create necessary directories
mkdir -p database logs backups uploads

# Build the application
npm run build

# Setup PM2 ecosystem
```

### 6. PM2 Configuration

Create `ecosystem.config.js`:

```javascript
module.exports = {
  apps: [{
    name: 'tradenet-api',
    script: 'dist/server.js',
    cwd: '/var/app/tradenet/server',
    instances: 'max',
    exec_mode: 'cluster',
    env: {
      NODE_ENV: 'production',
      PORT: 3001
    },
    error_file: '/var/app/tradenet/logs/pm2-error.log',
    out_file: '/var/app/tradenet/logs/pm2-out.log',
    log_file: '/var/app/tradenet/logs/pm2-combined.log',
    time: true,
    max_restarts: 3,
    restart_delay: 5000
  }]
};
```

### 7. Start Services

```bash
# Enable and start Nginx
sudo systemctl enable nginx
sudo systemctl start nginx

# Start application with PM2
pm2 start ecosystem.config.js
pm2 save
pm2 startup

# Setup PM2 to start on boot
sudo env PATH=$PATH:/usr/bin /usr/lib/node_modules/pm2/bin/pm2 startup systemd -u $USER --hp $HOME
```

### 8. Database Setup

```bash
# The SQLite database will be created automatically
# For production, consider migrating to PostgreSQL:

# Install PostgreSQL
sudo apt install postgresql postgresql-contrib

# Create database and user
sudo -u postgres createdb tradenet_production
sudo -u postgres createuser tradenet_user
sudo -u postgres psql -c "ALTER USER tradenet_user PASSWORD 'secure_password';"
sudo -u postgres psql -c "GRANT ALL PRIVILEGES ON DATABASE tradenet_production TO tradenet_user;"
```

## 🔧 Environment Variables Checklist

### Critical Security Settings
- [ ] `JWT_SECRET` - Strong, unique secret
- [ ] `SESSION_SECRET` - Strong, unique secret
- [ ] `EMAIL_PASS` - Valid email app password
- [ ] `SSL_CERT_PATH` - Valid SSL certificate
- [ ] `SSL_KEY_PATH` - Valid SSL private key

### API Keys Required
- [ ] `ALPHA_VANTAGE_API_KEY` - Stock market data
- [ ] `BINANCE_API_KEY` - Crypto data
- [ ] `POLYGON_API_KEY` - Financial data
- [ ] `FINNHUB_API_KEY` - Market data

### Optional Services
- [ ] `SENTRY_DSN` - Error tracking
- [ ] `STRIPE_SECRET_KEY` - Payment processing
- [ ] `REDIS_URL` - Caching (recommended)

## 📊 Monitoring

```bash
# Monitor PM2 processes
pm2 monit

# View logs
pm2 logs tradenet-api

# Check Nginx status
sudo systemctl status nginx

# View Nginx logs
sudo tail -f /var/log/nginx/access.log
sudo tail -f /var/log/nginx/error.log
```

## 🔄 Deployment Script

Create `deploy.sh`:

```bash
#!/bin/bash
echo "🚀 Deploying TradeNet.im Backend..."

# Pull latest code
git pull origin main

# Install dependencies
npm install --production

# Build application
npm run build

# Restart application
pm2 restart tradenet-api

# Check status
pm2 status

echo "✅ Deployment complete!"
```

## 🛠 Troubleshooting

### Common Issues:
1. **Port 3001 already in use**: `sudo lsof -ti:3001 | xargs sudo kill -9`
2. **Permission denied**: Check file ownership and permissions
3. **SSL certificate issues**: Verify certificate paths and renewal
4. **Database connection**: Check database file permissions and path

### Health Checks:
- API Health: `curl https://api.tradenet.im/health`
- PM2 Status: `pm2 status`
- Nginx Status: `sudo nginx -t`

## 📱 Mobile API Access

For mobile apps, use these endpoints:
- **Base URL**: `https://api.tradenet.im`
- **Health Check**: `/health`
- **Authentication**: `/api/auth/login`
- **User Data**: `/api/user/dashboard`
- **Admin Panel**: `/api/admin/stats`
#!/bin/bash

# TradeNet.im Production Setup Script
echo "🚀 Setting up TradeNet.im Backend for Production..."

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Function to print colored output
print_status() {
    echo -e "${GREEN}[INFO]${NC} $1"
}

print_warning() {
    echo -e "${YELLOW}[WARNING]${NC} $1"
}

print_error() {
    echo -e "${RED}[ERROR]${NC} $1"
}

# Check if running as root
if [[ $EUID -eq 0 ]]; then
   print_error "This script should not be run as root"
   exit 1
fi

# Check if domain is tradenet.im
read -p "🌐 Confirm your domain is tradenet.im (y/n): " -n 1 -r
echo
if [[ ! $REPLY =~ ^[Yy]$ ]]; then
    print_error "Please update the domain in the script before proceeding"
    exit 1
fi

# Create production environment file
print_status "Creating production environment file..."
if [ ! -f ".env.production" ]; then
    print_error ".env.production file not found!"
    exit 1
fi

cp .env.production .env
print_status "Copied .env.production to .env"

# Prompt for critical environment variables
print_warning "⚠️  You MUST update these critical environment variables:"
echo "1. JWT_SECRET"
echo "2. EMAIL_PASS"
echo "3. API keys (Alpha Vantage, Binance, etc.)"
echo ""

read -p "📝 Have you updated the critical environment variables? (y/n): " -n 1 -r
echo
if [[ ! $REPLY =~ ^[Yy]$ ]]; then
    print_warning "Please edit .env file and update the required variables"
    print_status "Opening .env file for editing..."
    ${EDITOR:-nano} .env
fi

# Install dependencies
print_status "Installing production dependencies..."
npm ci --only=production

# Build the application
print_status "Building the application..."
npm run build

# Create necessary directories
print_status "Creating necessary directories..."
mkdir -p database logs backups uploads
chmod 755 database logs backups uploads

# Set up PM2 ecosystem if not using Docker
if ! command -v docker &> /dev/null; then
    print_status "Setting up PM2 configuration..."
    
    # Install PM2 if not installed
    if ! command -v pm2 &> /dev/null; then
        print_status "Installing PM2..."
        npm install -g pm2
    fi
    
    # Create PM2 ecosystem file
    cat > ecosystem.config.js << EOF
module.exports = {
  apps: [{
    name: 'tradenet-api',
    script: 'dist/server.js',
    cwd: '$(pwd)',
    instances: 'max',
    exec_mode: 'cluster',
    env: {
      NODE_ENV: 'production',
      PORT: 3001
    },
    error_file: './logs/pm2-error.log',
    out_file: './logs/pm2-out.log',
    log_file: './logs/pm2-combined.log',
    time: true,
    max_restarts: 3,
    restart_delay: 5000
  }]
};
EOF
    
    print_status "PM2 ecosystem configuration created"
fi

# Database initialization
print_status "Initializing database..."
if [ ! -f "database/tradenet_production.db" ]; then
    print_status "Database will be created on first run"
else
    print_warning "Database already exists"
fi

# SSL Certificate setup reminder
print_warning "🔒 SSL Certificate Setup Required:"
echo "Run: sudo certbot --nginx -d tradenet.im -d api.tradenet.im"
echo ""

# Nginx configuration reminder
print_warning "🌐 Nginx Configuration Required:"
echo "Copy the nginx configuration from DEPLOYMENT.md to /etc/nginx/sites-available/tradenet.im"
echo ""

# Final instructions
print_status "✅ Setup complete!"
echo ""
echo "🚀 To start the application:"
echo ""
if command -v docker &> /dev/null; then
    echo "Using Docker:"
    echo "  docker-compose up -d"
    echo ""
fi
echo "Using PM2:"
echo "  pm2 start ecosystem.config.js"
echo "  pm2 save"
echo "  pm2 startup"
echo ""
echo "📊 Monitor the application:"
echo "  pm2 monit"
echo "  pm2 logs tradenet-api"
echo ""
echo "🔍 Health check:"
echo "  curl https://api.tradenet.im/health"
echo ""
print_warning "⚠️  Don't forget to:"
echo "1. Configure SSL certificates"
echo "2. Set up Nginx reverse proxy"
echo "3. Configure DNS for tradenet.im and api.tradenet.im"
echo "4. Update firewall rules (ports 80, 443, 3001)"
echo "5. Set up automated backups"
echo ""
print_status "🎉 TradeNet.im backend is ready for deployment!"
# TradeNet.im Backend Dockerfile
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Install system dependencies
RUN apk add --no-cache python3 make g++ sqlite

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm ci --only=production && npm cache clean --force

# Copy source code
COPY . .

# Build the application
RUN npm run build

# Create non-root user
RUN addgroup -g 1001 -S nodejs
RUN adduser -S tradenet -u 1001

# Create necessary directories with proper permissions
RUN mkdir -p /app/database /app/logs /app/backups /app/uploads
RUN chown -R tradenet:nodejs /app

# Switch to non-root user
USER tradenet

# Expose port
EXPOSE 3001

# Health check
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
  CMD node -e "const http = require('http'); \
    const options = { host: 'localhost', port: 3001, path: '/health', timeout: 2000 }; \
    const req = http.request(options, (res) => { \
      console.log(\`STATUS: \${res.statusCode}\`); \
      process.exitCode = (res.statusCode === 200) ? 0 : 1; \
    }); \
    req.on('error', () => process.exitCode = 1); \
    req.end();"

# Start the application
CMD ["node", "dist/server.js"]
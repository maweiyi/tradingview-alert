module.exports = {
  apps: [
    {
      name: 'TradingViewAlert',
      interpreter: 'node',
      script: './dist/bin/www.js',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'development',
      },
      env_production: {
        NODE_ENV: 'production',
      },
    },
  ],
};

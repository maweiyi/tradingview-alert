module.exports = {
  apps : [{
    name: 'TradingViewAlert',
    interpreter: './node_modules/.bin/ts-node',
    script: './src/bin/www.ts',
    instances: 1,
    autorestart: true,
    watch: false,
    max_memory_restart: '1G',
    env: {
      NODE_ENV: 'development'
    },
    env_production: {
      NODE_ENV: 'production'
    }
  }],
};

const TelegramBot = require('node-telegram-bot-api');

const TOKEN = process.env.TOKEN;

const bot = new TelegramBot(`${TOKEN}`, { polling: true });

export default bot;

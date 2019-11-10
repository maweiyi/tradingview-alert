import * as path from 'path';
const TelegramBot = require('node-telegram-bot-api');
require('dotenv').config({ path: path.join(__dirname, '../../.env') });

const TOKEN = process.env.TOKEN;
const bot = new TelegramBot(`${TOKEN}`, { polling: true });

export default bot;

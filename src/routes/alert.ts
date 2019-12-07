import * as express from 'express';
import bot from '../telegrambot/bot';
import * as path from 'path';
require('dotenv').config({ path: path.join(__dirname, '../../.env') });

const router = express.Router();

router.post('/', function(req, res) {
  //req.body.text
  // eslint-disable-next-line
  console.log(req.body.text);
  bot.sendMessage(`${process.env.TVINDICATORALERTBOT}`, `${req.body.text}`);
  bot.sendMessage(`${process.env.BTCGROUP}`, `${req.body.text}`);
  res.send('Alert!');
});

export { router };

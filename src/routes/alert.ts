import * as express from 'express';
import bot from '../telegrambot/bot';

const router = express.Router();

router.post('/', function(req, res, next) {
  //req.body.text
  console.log(req.body.text);
  bot.sendMessage(`${process.env.TVINDICATORALERTBOT}`, `${req.body.text}`);
  bot.sendMessage(`${process.env.BTCGROUP}`, `${req.body.text}`);
  res.send('Alert!');
});

export { router };

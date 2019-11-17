import * as express from 'express';
import * as AlertRouter from './routes/alert';

const app = express();

app.use(express.json());
// eslint-disable-next-line
app.use('/ping', function(req, res, next) {
  res.send('pong');
});
app.use('/alert', AlertRouter.router);

// eslint-disable-next-line
app.use(function(req, res, next) {
  res.status(404).send('Not Found');
});

// eslint-disable-next-line
app.use(function(err, req, res, next) {
  if (err) {
    res.send(err);
  }
});

export default app;

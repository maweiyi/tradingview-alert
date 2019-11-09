import * as express from 'express';
import * as AlertRouter from './routes/alert';

const app = express();

app.use(express.json());
app.use('/alert', AlertRouter.router);

export default app;

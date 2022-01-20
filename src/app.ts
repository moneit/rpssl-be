import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import morgan from 'morgan';
import fallback from 'express-history-api-fallback';
import helmet from 'helmet';

import router from './routes';

const app = express();

app.disable('etag');
app.disable('x-powered-by');

app.use(helmet());

app.use(cors());

app.use(bodyParser.json());
app.use(morgan('tiny'));
app.use(express.static(`public`));
const root = `${__dirname}/public`;

app.use('/api', router);
app.use(fallback('index.html', { root }));
app.use('*', (req, res) => {
  console.log('ROUTE NOT FOUND');
  res.sendStatus(400);
});

export default app;

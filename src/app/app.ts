import express from 'express';
import createHttpError from 'http-errors';
import { usersRouter } from './routes/users';
import helmet from 'helmet';
import { corsMiddleware } from './middlewares/cors';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(helmet.xssFilter());
app.use(helmet.noSniff());
app.use(helmet.hidePoweredBy());
app.use(helmet.frameguard({ action: 'deny' }));

app.use(corsMiddleware());

app.set('port', process.env['PORT'] ?? 3000);

app.use('/users', usersRouter);

app.use((req, res, next) => {
  next(createHttpError(404));
});

export default app;

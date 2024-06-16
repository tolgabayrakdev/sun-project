import { Request, Response } from 'express';
import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import 'dotenv/config';

import authRouter from './routes/auth-routes';
import subscriptionRouter from './routes/subscription-routes';
const app = express();

app.use(express.json());
app.use(morgan('short'));
app.use(cookieParser());
app.use(cors({ origin: true, credentials: true }));

app.use('/api/v1/auth', authRouter);
app.use('/api/v1/subscription', subscriptionRouter);

app.listen(1234, () => {
    console.log('Server is running...');
});

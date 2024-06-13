import { Request, Response } from 'express';
import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import 'dotenv/config';

import authRouter from './routes/auth-routes';

const app = express();

app.use(express.json());
app.use(morgan('short'));
app.use(cookieParser());
app.use(cors({ origin: true, credentials: true }));

app.get('/hello', (req: Request, res: Response) => {
    res.send('Hello from server.');
});

app.use('/api/v1/auth', authRouter);

app.listen(1234, () => {
    console.log('Server is running...');
});

import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import { Request, Response } from 'express';
import 'dotenv/config';

const app = express();

app.use(express.json());
app.use(morgan('short'));
app.use(cookieParser());
app.use(cors({ origin: true, credentials: true }));

app.get('/hello', (req: Request, res: Response) => {
    res.send('Hello baby.');
});

app.listen(3000, () => {
    console.log('Server is running...');
});

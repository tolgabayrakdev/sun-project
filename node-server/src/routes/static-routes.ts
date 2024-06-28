import express from 'express';
import { verifyToken } from '../middlewares/verify-token';
import { StaticsController } from '../controllers/statics-controller';

const router = express.Router();
const staticsController = new StaticsController();

router.get('/', verifyToken, staticsController.getStatics);

export default router;

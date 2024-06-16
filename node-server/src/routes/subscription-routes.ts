import express from 'express';
import { SubscriptionController } from '../controllers/subscription-controller';
import { verifyToken } from '../middlewares/verify-token';

const router = express.Router();
const subscriptionController = new SubscriptionController();

router.post('/', verifyToken, subscriptionController.create);
router.delete('/', verifyToken, subscriptionController.delete);
router.get("/", verifyToken, subscriptionController.show);

export default router;

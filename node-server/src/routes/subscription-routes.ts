import express from 'express';
import { SubscriptionController } from '../controllers/subscription-controller';

const router = express.Router();
const subscriptionController = new SubscriptionController();

router.post('/', subscriptionController.create);
router.delete('/', subscriptionController.delete);

export default router;

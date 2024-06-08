import express from 'express';
import { AuthController } from '../controllers/auth-controller';

const router = express.Router();
const authController = new AuthController();

router.post("/login", authController.login);
router.post("/register", authController.register);
router.post("/verify", authController.verify);
router.post("/logout", authController.logout)

export default router;

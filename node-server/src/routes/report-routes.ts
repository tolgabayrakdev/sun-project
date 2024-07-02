import express from 'express';
import { ReportController } from '../controllers/report-controller';
import { verifyToken } from '../middlewares/verify-token';

const router = express.Router();
const reportController = new ReportController();


router.post("/", verifyToken, reportController.create);
router.put("/:id", verifyToken, reportController.update);
router.delete("/:id", verifyToken, reportController.delete);
router.get("/:id", verifyToken, reportController.show);
router.get("/", verifyToken, reportController.list);


export default router;

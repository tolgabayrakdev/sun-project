import express from 'express';
import { PersonController } from '../controllers/person-controller';
import { verifyToken } from '../middlewares/verify-token';

const router = express.Router();
const personController = new PersonController();

router.post('/', verifyToken, personController.create);
router.delete('/:id', verifyToken, personController.delete);
router.put('/:id', verifyToken, personController.update);
router.get('/:id', verifyToken, personController.show);
router.get('/', verifyToken, personController.list);

export default router;

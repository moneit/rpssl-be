import { Router } from 'express';

import { gameController } from '../controllers/GameController';

const router = Router();

router.get('/choices', gameController.choices);
router.get('/choice', gameController.choice);
router.post('/play', gameController.play);

export default router;

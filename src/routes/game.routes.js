import express from 'express';
const router = express.Router();
import GameController from '../controllers/game.controller';

router.post('/save-game', GameController.saveGame);
router.get('/game/:id', GameController.getGame);
router.get('/games', GameController.getGames);
router.put('/update-game/:id', GameController.updateGame);
router.delete('/delete-game/:id', GameController.deleteGame);

export default router;
import Game from '../models/game.model';

let gameController = {

  getGames: async (req, res) => {
    try {
      const games = await Game.find();
      res
        .status(200)
        .json(games);
    } catch (error) {
      res
        .status(400)
        .json({
          message: err
        });
    }
  },
  saveGame: async (req, res) => {
    const body = req.body;
    
    try {
      const savedGame = await Game.create(body);
      res
        .status(201)
        .json(savedGame);
    } catch (err) {
      res
        .status(500)
        .json({
          message: err
        });
    }
  },
  getGame: async (req, res) => {
    const _id = req.params.id;
    try {
      const game = await Game.findOne({_id});
      res
        .status(200)
        .json(game)
    } catch (err) {
      res
        .status(400)
        .json({
          message: err
        })
    }
  },
  deleteGame: async (req, res) => {
    const _id = req.params.id;
    try {
      const revomedGame = await Game.findByIdAndDelete({_id});

      if (!revomedGame) {
        return res.status(404).json({
          message: err
        })
      }

      res.json(revomedGame)
    } catch (err) {
      res
        .status(400)
        .json({
          message: err
        })
    }
  },
  updateGame: async (req, res) => {
    const _id = req.params.id;
    const body = req.body;
    try {
      const updatedGame = await Game.findByIdAndUpdate(
        _id,
        body,
        {new: true});

      if (!updatedGame) {
        return res.status(404).json({
          message: err
        })
      }
      res
        .status(200)
        .json(updatedGame)
    } catch (err) {
      res
        .status(500)
        .json({
          message: err
        })
    }
  }
};

export default gameController;
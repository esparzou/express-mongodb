import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const GameSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  developer: {
    type: Array,
    required: true
  },
  release_date: {
    type: String,
    required: true
  },
  platforms: {
    type: Array,
    required: true
  },
  genres: {
    type: Array,
    required: true
  }
});

const Game = mongoose.model('Game', GameSchema);

export default Game;
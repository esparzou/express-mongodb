import gameRoutes from './routes/game.routes'

export default (app) => {

  app.get('/', (req, res) => {
    res.send('Router 💻');
  });

  app.use('/api', gameRoutes);

}
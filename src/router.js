export default (app) => {

  app.get('/', (req, res) => {
    res.send('Router 💻');
  });

}
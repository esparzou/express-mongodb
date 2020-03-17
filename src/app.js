import express from "express";
import config from "./config";
import router from "./router";
<<<<<<< HEAD
import "./database";
=======
>>>>>>> 25acf52843053449d35abd7e333279d2501d14dd
const app = express();

// Config
config(app);

// Router
router(app);

app.listen(process.env.PORT, () =>
  console.log(`El servidor ha sido inicializado: http://${process.env.HOST}:${process.env.PORT}`)
);

import express from "express";
import config from "./config";
const app = express();

// Config
config(app);

app.listen(process.env.PORT, () =>
  console.log(`El servidor ha sido inicializado: http://${process.env.HOST}:${process.env.PORT}`)
);

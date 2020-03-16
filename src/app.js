import express from "express";
import config from "./config";
const app = express();

// Config
config(app);

app.listen(6060, () =>
  console.log("El servidor ha sido inicializado: http://localhost:6060")
);

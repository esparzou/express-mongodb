import express from "express";
const app = express();

app.listen(6060, () =>
  console.log("El servidor ha sido inicializado: http://localhost:6060")
);

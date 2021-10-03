import express from "express";
import { app } from "./controllers/atendimentoContato";
//import "./controllers/atendimentoContato";

app.listen(3333, () => {
  console.log("🚀🚀 Server Started!!");
});

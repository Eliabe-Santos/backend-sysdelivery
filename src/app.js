import express from "express";
import cors from "cors";
import { sequelize } from "./config/db.js";
import Produto from "./models/Produto.js";

const app = express();

app.use(cors());
app.use(express.json());

sequelize.authenticate()
  .then(() => console.log("Banco conectado 🚀"))
  .catch(err => console.log(err));
  
sequelize.sync()
  .then(() => console.log("Tabelas criadas 🚀"))
  .catch(err => console.log(err));

app.get("/", (req, res) => {
  res.send("API rodando 🚀");
});

app.listen(3000, () => {
  console.log("Servidor rodando na porta 3000");
});
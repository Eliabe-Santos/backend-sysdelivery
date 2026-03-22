import { DataTypes } from "sequelize";
import { sequelize } from "../config/db.js";

const Produto = sequelize.define("Produto", {
  nome: {
    type: DataTypes.STRING,
    allowNull: false
  },
  preco: {
    type: DataTypes.FLOAT,
    allowNull: false
  },
  categoria: {
    type: DataTypes.STRING
  }
});

export default Produto;
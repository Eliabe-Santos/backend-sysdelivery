import { Sequelize } from "sequelize";

export const sequelize = new Sequelize(
  "sysdelivery", // nome do banco
  "root",        // usuário padrão
  "",            // senha padrão (VAZIA)
  {
    host: "localhost",
    dialect: "mariadb",
    port: 3306
  }
);
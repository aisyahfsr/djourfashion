const Sequelize = require("sequelize");
const mysql = require("mysql2");

const dbConection = new Sequelize(
  "djourfashion",
  "root",
  "xkOvyHIHrFvhTNUWVcOQdpLMIqYiVrpY",
  {
    host: "monorail.proxy.rlwy.net",
    dialect: "mysql",
    port: 24965,
  }
);
module.exports = dbConection;

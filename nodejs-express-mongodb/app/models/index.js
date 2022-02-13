const dbConfig = require("../config/db.config.js");
const Sequelize = require("sequelize"); // ORM signifie Object-Relational Mapping (ensemble classes permet de manipuler les tables d’une bdd comme s’il s’agissait d’objets)
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  operatorsAliases: false,
  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle
  }
});
const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;
db.tutorials = require("./movie-db.model.js")(sequelize, Sequelize);
module.exports = db;

// ORM :L’avantage de cette couche d’abstraction est qu’il n’y a plus besoin de se soucier du système de base de données
// utilisé, c’est l’ORM qui a la charge de transformer les requêtes pour les rendre compatibles avec la base de données.
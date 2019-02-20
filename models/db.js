const Sequelize = require('sequelize');
const sequelize = new Sequelize('sqlite:sswmfa.db');

const Descripciones = sequelize.define('Descripciones', {
 id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
  estrellas: { type: Sequelize.STRING, allowNull: false }
});

module.exports = sequelize;

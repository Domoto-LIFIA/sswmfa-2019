const Sequelize = require('sequelize');
const sequelize = new Sequelize('sqlite:sswmfa.db');

const TelevisoresListados = sequelize.define('TelevisoresListados', {
 id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
  titulo: { type: Sequelize.STRING, allowNull: false, unique: true },
  precio: { type: Sequelize.STRING, allowNull: false }
});

const COmentario = sequelize.define('COmentario', {
 id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
  TextoComentario: { type: Sequelize.STRING, allowNull: false, unique: true }
});

module.exports = sequelize;

const Sequelize = require('sequelize');
const sequelize = new Sequelize('sqlite:sswmfa.db');

const TelevisoresListado = sequelize.define('TelevisoresListado', {
 id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
  Titulo: { type: Sequelize.STRING, allowNull: false, unique: true },
  precio: { type: Sequelize.STRING, allowNull: false }
});

const Comentarios = sequelize.define('Comentarios', {
 id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
  texto: { type: Sequelize.STRING, allowNull: false }
});

TelevisoresListados.hasMany(Comentarios);
module.exports = sequelize;

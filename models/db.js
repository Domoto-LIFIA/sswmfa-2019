const Sequelize = require('sequelize');
const sequelize = new Sequelize('sqlite:sswmfa.db');

const TelevisoresListado = sequelize.define('TelevisoresListado', {
 id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
  precio: { type: Sequelize.STRING, allowNull: false },
  titulo: { type: Sequelize.STRING, allowNull: false }
});

const Comentarios = sequelize.define('Comentarios', {
 id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
  property: { type: Sequelize.STRING, allowNull: false }
});

TelevisoresListado.hasMany(Comentarios);

module.exports = sequelize;

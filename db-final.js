const Sequelize = require('sequelize');
const sequelize = new Sequelize('sqlite:sswmfa.db');

const TelevisoresListado = sequelize.define('TelevisoresListado', {
 id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
  titulo: { type: Sequelize.STRING },
  precio: { type: Sequelize.STRING, allowNull: false }
});

const Comentarios = sequelize.define('Comentarios', {
 id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
  TextoComentario: { type: Sequelize.STRING }
});

TelevisoresListado.hasMany(Comentarios);
module.exports = sequelize;


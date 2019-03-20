const Sequelize = require('sequelize');
const sequelize = new Sequelize('sqlite:sswmfa.db');

const TelevisoresListado = sequelize.define('TelevisoresListado', {
 id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
<<<<<<< HEAD
  titulo: { type: Sequelize.STRING },
  precio: { type: Sequelize.STRING, allowNull: false }
});

const COmentarios = sequelize.define('COmentarios', {
 id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
  TextoComentario: { type: Sequelize.STRING }
});

TelevisoresListado.hasMany(COmentarios);

=======
  Titulo: { type: Sequelize.STRING, allowNull: false, unique: true },
  precio: { type: Sequelize.STRING, allowNull: false }
});

const Comentarios = sequelize.define('Comentarios', {
 id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
  texto: { type: Sequelize.STRING, allowNull: false }
});

TelevisoresListados.hasMany(Comentarios);
>>>>>>> master
module.exports = sequelize;

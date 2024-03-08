module.exports = (sequelize, Sequelize) => {//hacer un modulo que exporte una funcion que recibe dos parametros, sequelize y Sequelize
    const User = sequelize.define(
      "user",
      {
        id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true,
        },
        name: {
          type: Sequelize.STRING,
        },
        lastname: {
          type: Sequelize.STRING,
        },
        email: {
          type: Sequelize.STRING,
        },
        created_at: {
          type: Sequelize.DATE,
          defaultValue: Sequelize.NOW,
        },
        updated_at: {
          type: Sequelize.DATE,
          defaultValue: Sequelize.NOW,
        },
        deleted_at: {
          type: Sequelize.DATE,
        },
      },
      {
        timestamps: false,//timestamps es una propiedad de sequelize que nos permite agregar campos de fecha a nuestros modelos, en este caso lo desactivamos
        freezeTableName: true,//freezeTableName es una propiedad de sequelize que nos permite desactivar la pluralizacion de los nombres de las tablas, en este caso lo activamos
        tableName: "user",//le asignamos el nombre de la tabla a la que se va a conectar el modelo
      }
    );
  
    return User;
  };
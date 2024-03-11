module.exports = (sequelize, Sequelize) => {//hacer un modulo que exporte una funcion que recibe dos parametros, sequelize y Sequelize
    const Author = sequelize.define(
        "author",
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
            birthdate: {
                type: Sequelize.DATE,
            },
            created_at: {
                type: Sequelize.DATE,
                defaultValue: Sequelize.NOW,
            },
            updated_at: {
                type: Sequelize.DATE,
                defaultValue: Sequelize.NOW,
            },
            /*deleted_at: {
                type: Sequelize.DATE,
            },*/
        },
        {
            timestamps: false,
            freezeTableName: true,
            tableName: "author",
        }
    );

    module.exports = Author;
  
    return Author;
  };
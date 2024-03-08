module.exports = (sequelize, Sequelize) => {//hacer un modulo que exporte una funcion que recibe dos parametros, sequelize y Sequelize
    const Book = sequelize.define(
        "book",
        {
            id: {
                type: Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
            title: {
                type: Sequelize.STRING,
            },
            publication_date: {
                type: Sequelize.DATE,
            },
            genre_id: {
                type: Sequelize.INTEGER,
                references: {
                    // Esto es una referencia a la tabla
                    model: 'genre',

                    // Este es el nombre de la columna de la tabla referenciado
                    key: 'id' 
                }
            },
            stock: {
                type: Sequelize.INTEGER,
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
            timestamps: false,
            freezeTableName: true,
            tableName: "book",
        }
    );

    module.exports = Book;
  
    return Book;
  };
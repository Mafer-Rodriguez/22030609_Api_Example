module.exports = (sequelize, Sequelize) => {//hacer un modulo que exporte una funcion que recibe dos parametros, sequelize y Sequelize
    const BookAuthor = sequelize.define(
        "book_author",
        {
            id: {
                type: Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
            book_id: {
                type: Sequelize.INTEGER,
                references: {
                    // Esto es una referencia a la tabla
                    model: 'book',

                    // Este es el nombre de la columna de la tabla referenciado
                    key: 'id'
                }
            },
            author_id: {
                type: Sequelize.INTEGER,
                references: {
                    // Esto es una referencia a la tabla
                    model: 'author',

                    // Este es el nombre de la columna de la tabla referenciado
                    key: 'id'
                }
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
            tableName: "book_author",
        }
    );
}
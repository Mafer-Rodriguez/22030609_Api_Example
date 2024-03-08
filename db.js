const {Sequelize} = require("sequelize") //importamos la clase Sequelize de la libreria sequelize

const sequelize = new Sequelize("library","root","",{
    host: "localhost",
    dialect: "mariadb"
});
//test de conexion a la base de datos, si la conexion es exitosa enviamos un mensaje a la consola, si no enviamos un mensaje de error a la consola
//amarillo, es una funcion es una await function, es una funcion que se ejecuta de manera asincrona,
(async () => {//funciones que se ejecutan de manera asincrona, las funciones => no tienen nombre y se ejecutan inmediatamente
    try {
      await sequelize.authenticate();
      console.log("Connection has been established successfully.");
    } catch (error) {
      console.error("Unable to connect to the database:", error);
    }
  })();//ejecutamos la funcion

  //para darle haceso a mi libreria y aceso a la instancia de la base de datos
const db = {}//creamos un objeto vacio  
db.Sequelize = Sequelize//le asignamos a la propiedad Sequelize del objeto db la clase Sequelize
db.sequelize = sequelize//le asignamos a la propiedad sequelize del objeto db la instancia de la base de datos
//le asignamos a la propiedad user del objeto db el modelo de usuario que creamos en el archivo user.model.js
db.user = require("./models/user.model.js")(sequelize,Sequelize)
//le asignamos a la propiedad book del objeto db el modelo de libro que creamos en el archivo book.model.js
db.book = require("./models/book.model.js")(sequelize,Sequelize)
module.exports = db//exportamos el objeto db para que pueda ser utilizado en otros archivos
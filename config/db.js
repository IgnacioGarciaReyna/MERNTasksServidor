//Mongoose: es como el orm, como el encargado de la conexión
const mongoose = require("mongoose");

//Traemos el string de la conexión. Dotenv nos permite leer las variables de variables.env
require("dotenv").config({ path: "variables.env" });

const conectarDB = async () => {
  //Usamos un try catch para que si tenemos un error podamos hacer cierta acción
  try {
    //a conect (es un método de mongoose) le paso la url y una configuración
    //process.env es un método de dotenv y DB_MONGO es la url de variables.env
    await mongoose.connect(process.env.DB_MONGO, {
      //Esta es una configuración para evitar errores de consola
      useNewUrlParser: true,
      useUnifiedTopology: true,
      // useFindAndModify: false,
    });
    console.log("DB Conectada");
  } catch (error) {
    console.log(error); //Consolear el error
    process.exit(1); //En caso de error de conexión se detiene la app
  }
};

//Como es una función la hacemos disponible en los otros archivos
//La sintaxis de require, module, exports, es como los imports y los export por default de las nuevas versiones de javascrip. Se utiliza regularmente en node
module.exports = conectarDB;

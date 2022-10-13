const mongoose = require("mongoose");

//Traemos el string de la conexcion. nos permite leer las variables.
require("dotenv").config({ path: "variables.env" });

const conectarDB = async () => {
  try {
    //a conect le paso la url y una configuración
    await mongoose.connect(process.env.DB_MONGO, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
    });
    console.log("DB Conectada");
  } catch (error) {
    console.log(error);
    process.exit(1); //En caso de error de conexión se detiene la app
  }
};

module.exports = conectarDB;

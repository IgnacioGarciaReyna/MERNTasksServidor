const express = require("express");

//Importamos la función de db.js
const conectarDB = require("./config/db");

//Crear el servidor
const app = express();

//Conectar a la base de datos con la función que importamos
conectarDB();

//Crear un puerto de la app.El que tenga disponble o 4000. Se usa el 4000 para que no choque con el cliente
const PORT = process.env.PORT || 4000;

//SOLO PARA PROBAR QUE FUNCIONA
//Definir página principal
//Se pone get porque es cuando un usuario visita una url
// app.get("/", (req, res) => {
//   res.send("Hola Mundo");
// });

//Arrancar la app
app.listen(PORT, () => {
  console.log(`El servidor está funcionando en el puerto ${PORT}`);
});

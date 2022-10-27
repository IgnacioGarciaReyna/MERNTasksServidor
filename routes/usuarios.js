//Rutas para crear usuarios

//importamos express porque tiene routing
const express = require("express");
const router = express.Router();
const usuarioController = require("../controllers/usuarioController");

//Crear un usuario
//api/usuarios
//Cuando hagamos un post a esta api se va a ejecutar la arrow function
//Sintaxis de express: recibir un request de tipo post a la url, la function es lo que se ejecuta en el endpoint cuando se envien los datos. En este caso es la función crearUsuario, que está en usuarioController.js
router.post("/", usuarioController.crearUsuario);
module.exports = router;

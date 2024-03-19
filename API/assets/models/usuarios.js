// Importa la biblioteca Mongoose para la manipulación de la base de datos MongoDB
const mongoose = require('mongoose');

// Define el esquema del usuario utilizando el método Schema de Mongoose
const usuarioSchema = mongoose.Schema({
    // Define los campos del esquema: nombre, contrasena, estadoCuenta y tipo
    nombre: String, // Campo para el nombre de usuario (tipo String)
    contrasena: String, // Campo para la contraseña del usuario (tipo String)
    estadoCuenta: Boolean, // Campo para el estado de la cuenta del usuario (tipo Boolean)
    tipo: String, // Campo para el tipo de usuario (tipo String)
});

// Exporta el modelo 'usuario' que utiliza el esquema definido anteriormente
module.exports = mongoose.model('usuario', usuarioSchema);
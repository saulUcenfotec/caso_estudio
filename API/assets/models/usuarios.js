const mongoose = require('mongoose');

const usuarioSchema = mongoose.Schema({
    nombre: String,
    contrasena: String,
    estadoCuenta: Boolean,
    tipo: String,
});

module.exports = mongoose.model('usuario', usuarioSchema);
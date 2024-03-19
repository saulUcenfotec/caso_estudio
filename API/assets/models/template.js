const mongoose = require('mongoose');

const templateSchema = mongoose.Schema({
    nombre: String,
    descripcion: String,
    categoria: String,
});

module.exports = mongoose.model('templates', templateSchema);
const mongoose = require("mongoose");

const templateSchema = mongoose.Schema({
  nombre: String,
  descripcion: String,
  categoria: String,
  palabrasClave: String,
  texto: String,
  parametros: String,
  estado: Boolean,
  userId: String,
  userName: String,
});

module.exports = mongoose.model("templates", templateSchema);

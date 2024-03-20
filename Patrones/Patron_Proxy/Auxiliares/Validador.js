class Validador {
  constructor(id) {
    this.id = id;
  }

  validar(usuario, templateUserId, templateCategoria) {
    if (templateCategoria === "Privada") {
      return usuario.getId() === templateUserId;
    } else {
      return true;
    }
  }
}

module.exports = Validador;

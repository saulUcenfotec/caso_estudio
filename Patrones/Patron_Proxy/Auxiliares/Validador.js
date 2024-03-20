class Validador {
  constructor(id) {
    this.id = id;
  }

  validar(usuario, templateUserId) {
    return usuario.getId() === templateUserId;
  }
}

module.exports = Validador;

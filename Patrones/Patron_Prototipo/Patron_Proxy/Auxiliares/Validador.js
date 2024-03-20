class Validador {
  constructor(id) {
    this.id = id;
  }

  validar(usuario, id) {
    return usuario.getId() === id;
  }
}

module.exports = Validador;

const ITemplate = require("../Interface/ITemplate");
const Usuario = require("../Auxiliares/Usuario");
const Validador = require("../Auxiliares/Validador");

class TemplateProxy extends ITemplate {
  constructor(userId) {
    super(userId);
    this._validador = new Validador(userId);
  }

  acceder(id, username, pass, userTemplateId) {
    const usuario = new Usuario(id, username, pass);
    const accesoPermitido = this._validador.validar(usuario, userTemplateId);

    if (!accesoPermitido) {
      return "No hay acceso al template.";
    } else {
      return "Tiene acceso al template.";
    }
  }
}

module.exports = TemplateProxy;

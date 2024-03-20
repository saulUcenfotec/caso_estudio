const ITemplate = require("../Interface/ITemplate");
const Usuario = require("../Auxiliares/Usuario");
const Validador = require("../Auxiliares/Validador");
const Template = require("./Template");

class TemplateProxy extends ITemplate {
  constructor(userId) {
    super(userId);
    this.template = new Template(userId);
  }

  acceder(id, username, pass, userTemplateId, templateCategoria) {
    const validador = new Validador(this.template.userId);
    const usuario = new Usuario(id, username, pass);
    const accesoPermitido = validador.validar(
      usuario,
      userTemplateId,
      templateCategoria
    );

    if (!accesoPermitido) {
      return "No hay acceso al template.";
    } else {
      return "Tiene acceso al template.";
    }
  }
}

module.exports = TemplateProxy;

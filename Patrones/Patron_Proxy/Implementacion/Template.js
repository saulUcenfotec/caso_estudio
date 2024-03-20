const ITemplate = require("../Interface/ITemplate");

class Template extends ITemplate {
  constructor(userId) {
    super(userId);
  }

  acceder(username, pass, id) {
    return "Accediendo Template";
  }
}

module.exports = Template;

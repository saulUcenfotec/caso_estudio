const TemplateProxy = require("../Implementacion/TemplateProxy");

class TemplateProxyManager {
  constructor(username, password, id) {
    this.baseUrl = "http://localhost:3000/buscarTemplatePorId";
    this.username = username;
    this.password = password;
    this.id = id;
  }

  async accederTemplate(templateId) {
    try {
      // Realizar solicitud GET para obtener información sobre el template
      const response = await fetch(`${this.baseUrl}?templateId=${templateId}`, {
        method: "GET",
      });

      if (!response.ok) {
        throw new Error("Error al acceder al template");
      }

      const data = await response.json();

      const categoria = data.templates[0].categoria;

      const userId = data.templates[0].userId;

      const ProxyTemplate = new TemplateProxy(userId);

      let validación = ProxyTemplate.acceder(
        this.id,
        this.username,
        this.password,
        userId,
        categoria
      );

      if (validación === "Tiene acceso al template.") {
        return true;
      } else {
        return false;
      }
    } catch (error) {
      console.error("Error:", error);
      throw error;
    }
  }
}

module.exports = TemplateProxyManager;

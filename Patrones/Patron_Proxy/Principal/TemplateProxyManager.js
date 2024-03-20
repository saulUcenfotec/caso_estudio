class TemplateProxyManager {
  constructor() {
    this.baseUrl = "http://localhost:3000/usuarios/login"; // La URL base de tu backend
  }

  async accederTemplate(username, password, templateId) {
    try {
      const response = await fetch(`${this.baseUrl}/acceder-template`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username,
          password,
          templateId,
        }),
      });

      if (!response.ok) {
        throw new Error("Error al acceder al template");
      }

      const data = await response.json();
      return data; // Suponiendo que el backend devuelve alguna información sobre el template
    } catch (error) {
      console.error("Error:", error);
      throw error; // Propaga el error para que pueda ser manejado por el código que llama a esta función
    }
  }
}

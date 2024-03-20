const seccionLista = document.getElementById("listaSct");
const url = "http://localhost:3000/verTemplates";

const listarTemplates = async () => {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("No se pudo obtener la lista de templates.");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error al obtener la lista de templates:", error);
    throw error; // Propaga el error para que pueda ser manejado en el código que llama a esta función
  }
};

const generarHTMLTemplates = async () => {
  try {
    const data = await listarTemplates();
    let html = "";
    data.response.forEach((template) => {
      html += `<article class="template-box">
          <h3><b>Nombre:</b> <span>${template.nombre}</span></h3>
          <p><b>Descripción:</b> <span>${template.descripcion}</span></p>
          <p><b>Categoría:</b> <span>${template.categoria}</span></p>
          <p><b>Autor:</b> <span>${template.userName}</span></p>
          <button class="temp-btn">Ver Template</button>
      </article>`;
    });
    seccionLista.innerHTML = html;
  } catch (error) {
    // Manejar errores
    console.error("Error al generar HTML de los templates:", error);
  }
};

generarHTMLTemplates();

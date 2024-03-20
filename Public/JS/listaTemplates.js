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

async function validarAcceso(tempId) {
  const usuarioJson = sessionStorage.getItem("usuarioCliente");
  const usuarioObjeto = JSON.parse(usuarioJson);
  const usuarioId = usuarioObjeto.usuario._id;
  const usuarioNombre = usuarioObjeto.usuario.nombre;
  const usuarioPass = usuarioObjeto.usuario.contrasena;

  try {
    const resultado = await fetch(
      `http://localhost:3000/proxy?usuarioNombre=${usuarioNombre}&usuarioPass=${usuarioPass}&usuarioId=${usuarioId}&tempId=${tempId}`
    );

    if (resultado.ok) {
      const data = await resultado.json();
      if (data === true) {
        Swal.fire({
          confirmButtonColor: "#BF7B3F",
          icon: "success",
          title: "Tienes Acceso",
          text: "¡Tienes acceso!",
          footer: "Puedes Entrar",
        });
      } else {
        Swal.fire({
          confirmButtonColor: "#BF7B3F",
          icon: "error",
          title: "Sin acceso",
          text: "¡No tienes acceso a este template!",
          footer:
            "Este template es privado, habla con el creador para que lo haga público.",
        });
      }
    } else {
      throw new Error("Error al validar acceso al template");
    }
  } catch (error) {
    console.error("Error al validar acceso al template:", error);
    Swal.fire({
      confirmButtonColor: "#BF7B3F",
      icon: "error",
      title: "Error",
      text: "Hubo un problema al validar acceso al template",
    });
  }
}

const generarHTMLTemplates = async () => {
  try {
    const data = await listarTemplates();
    let html = "";
    data.templates.forEach((template) => {
      html += `<article class="template-box">
          <h3><b>Nombre:</b> <span>${template.nombre}</span></h3>
          <p><b>Descripción:</b> <span>${template.descripcion}</span></p>
          <p><b>Categoría:</b> <span>${template.categoria}</span></p>
          <p><b>Autor:</b> <span>${template.userName}</span></p>
          <button class="temp-btn" onclick=validarAcceso("${template._id}")>Ver Template</button>
      </article>`;
    });
    seccionLista.innerHTML = html;
  } catch (error) {
    // Manejar errores
    console.error("Error al generar HTML de los templates:", error);
  }
};

async function cargarSesion() {
  const usuarioJson = sessionStorage.getItem("usuarioCliente");
  const usuarioObjeto = JSON.parse(usuarioJson);
  const usuarioNombre = usuarioObjeto.usuario.nombre;

  let html = usuarioNombre;

  document.getElementById("userName").innerHTML = html;
}

cargarSesion();
generarHTMLTemplates();

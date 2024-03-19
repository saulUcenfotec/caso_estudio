function transferirTexto() {
    // Obtener el valor del textarea
    var textoPlantilla = document.getElementById("template").value;

    // Abrir la otra página y pasar el texto como parámetro
    var nw = window.open("editarTemplate.html?texto=" + encodeURIComponent(textoPlantilla), "FORMATO", "resizable=1,width=1100,height=600,scrollbars=1");
    nw.focus();
}



var url = "";

const validarCredencialesCliente = async(pNombre, pDescripcion, pCategoria) => {
    url = 'http://localhost:3000/templates/crear';


    const formData = new FormData();
    formData.append('nombre', pNombre);
    formData.append('descripcion', pDescripcion);
    formData.append('categoria', pCategoria);
    const opciones = {
        method: 'POST', // Método de la solicitud

        body: formData // Convertir el objeto de datos a JSON
    };

    let template;
    await fetch(url, opciones)
        .then(response => {
            if (response.status == 200) {
                return response.json();
            } else {
                return null;
            }
        }).then(data => {
            if (data != null) {
                window.location.href = '/';
                template = data;
            } else {}
        })
        .catch(error => {
            console.log(error);
        });

    return template;
};
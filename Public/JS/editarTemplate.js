window.onload = function() {
    // Capturar el parámetro de la URL
    var parametros = new URLSearchParams(window.location.search);
    var texto = parametros.get('texto');

    // Establecer el valor del textarea
    document.getElementById('texto-editable').value = texto;
};

function transferirTexto() {
    // Obtener el valor del textarea
    var texto = document.getElementById("texto-editable").value;

    // Obtener los valores de los marcadores
    var valor1 = document.getElementById("marcador1").value;
    var valor2 = document.getElementById("marcador2").value;
    var valor3 = document.getElementById("marcador3").value;
    var valor4 = document.getElementById("marcador4").value;
    var valor5 = document.getElementById("marcador5").value;
    var valor6 = document.getElementById("marcador6").value;

    // Reemplazar los marcadores con los valores
    texto = texto.replace(/\[1\]/g, valor1);
    texto = texto.replace(/\[2\]/g, valor2);
    texto = texto.replace(/\[3\]/g, valor3);
    texto = texto.replace(/\[4\]/g, valor4);
    texto = texto.replace(/\[5\]/g, valor5);
    texto = texto.replace(/\[6\]/g, valor6);

    // Redirigir a la página de edición con el texto modificado
    window.location = "editarTemplate.html?texto=" + encodeURIComponent(texto);
}
'use strict';

var url = "";

const validarCredencialesCliente = async(pNombre, pContrasena) => {
    url = 'http://localhost:3000/usuarios/login';


    const formData = new FormData();
    formData.append('nombre', pNombre);
    formData.append('contrasena', pContrasena);
    const opciones = {
        method: 'POST', // Método de la solicitud

        body: formData // Convertir el objeto de datos a JSON
    };

    let usuario;
    await fetch(url, opciones)
        .then(response => {
            if (response.status == 200) {
                return response.json();
            } else {
                return null;
            }
        }).then(data => {
            if (data != null) {
                localStorage.setItem('usuario', data);
                window.location.href = '/';
                usuario = data;
            } else {}
        })
        .catch(error => {
            console.log(error);
        });

    return usuario;
};
'use strict';

var url = "";

const validarCredencialesCliente = async(pNombre, pContrasena) => {
    url = 'http://localhost:3000/usuarios/login';
    const datos = {
        nombre: pNombre,
        contrasena: pContrasena
    };
    const opciones = {
        method: 'POST', // Método de la solicitud
        headers: {
            'Content-Type': 'application/json' // Tipo de contenido de la solicitud
        },
        body: JSON.stringify(datos) // Convertir el objeto de datos a JSON
    };

    console.log(datos);
    let usuario;
    await fetch(url, opciones)
        .then(response => {
            return response.json();
        }).then(data => {
            console.log('hooo');
            console.log(data);
        })
        .catch(error => {
            console.log(error);
        });

    return usuario;
};

const validarCredencialesModerador = async(pCorreo, pContrasenna) => {
    let respuesta = '';
    let usuario;
    await axios({
            method: 'post',
            url: 'http://localhost:3000/api/inicio-sesion_mod',
            responseType: 'json',
            data: {
                correoEncEmp: pCorreo,
                contrasennaEmp: pContrasenna
            }
        })
        .then(response => {
            sessionStorage.setItem('conectado', response.success);
            usuario = response.data.usuario;
        })
        .catch(error => {
            console.log(error);
        });

    return usuario;
};

const validarCredencialesAdmin = async(pNombre, pContrasenna) => {
    let respuesta = '';
    let usuario;
    await axios({
            method: 'post',
            url: 'http://localhost:3000/api/inicio-sesion_admin',
            responseType: 'json',
            data: {
                correo: pNombre,
                contrasenna: pContrasenna
            }
        })
        .then(response => {
            sessionStorage.setItem('conectado', response.success);
            usuario = response.data.usuario;
        })
        .catch(error => {
            console.log(error);
        });

    return usuario;
};
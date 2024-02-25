'use strict';

const validarCredencialesCliente = async(pCorreo, pContrasenna) => {
    let respuesta = '';
    let usuario;
    await axios({
            method: 'post',
            url: 'http://localhost:3000/api/inicio-sesion_cliente',
            responseType: 'json',
            data: {
                correo: pCorreo,
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
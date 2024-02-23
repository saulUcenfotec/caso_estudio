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

const validarCredencialesParqueo = async(pCorreo, pContrasenna) => {
    let respuesta = '';
    let usuario;
    await axios({
            method: 'post',
            url: 'http://localhost:3000/api/inicio-sesion_parqueo',
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

const validarCredencialesEmpresa = async(pCorreo, pContrasenna) => {
    let respuesta = '';
    let usuario;
    await axios({
            method: 'post',
            url: 'http://localhost:3000/api/inicio-sesion_empre',
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

const validarCredencialesEmpleado = async(pCorreo, pContrasenna) => {
    let respuesta = '';
    let usuario;
    await axios({
            method: 'post',
            url: 'http://localhost:3000/api/',
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

const validarCredencialesAdmin = async(pCorreo, pContrasenna) => {
    let respuesta = '';
    let usuario;
    await axios({
            method: 'post',
            url: 'http://localhost:3000/api/inicio-sesion_admin',
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
'use strict';

let inputNombre1 = document.querySelector('#nombre1');
let inputNombre2 = document.querySelector('#nombre2');
let inputApellido1 = document.querySelector('#apellido1');
let inputApellido2 = document.querySelector('#apellido2');
let inputTipoId = document.querySelector('#tipo-id');
let inputIdentificacion = document.querySelector('#identificacion');
let inputFechaNacim = document.querySelector('#fecha-nacim');
let inputCorreo = document.querySelector('#correo');
let inputTelefono = document.querySelector('#telefono');
let avatar = document.querySelector('#foto');
let btnAceptar = document.querySelector('.derecha');

const validar = () => {
    let error = false;
    let inputsRequeridos = document.querySelectorAll('[required]');
    let tamanno = inputsRequeridos.length;

    for (let i = 0; i < tamanno; i++) {
        if (inputsRequeridos[i].value == '' | inputsRequeridos[i].value == 'ninguno') {
            error = true;
            inputsRequeridos[i].classList.add('error');
        } else {
            inputsRequeridos[i].classList.remove('error');
        }
    }
    return error;
};

const comprobarFormatoIdent = (pIdent) => {
    let expresion = /^[0-9]{1}-[0-9]{4}-[0-9]{4}$/;
    let errorIdent = expresion.test(pIdent);
    return errorIdent;
};

const comprobrarCorreo = (pCorreo) => {
    let expresion = /^[a-z0-9_.]+@{1}/;
    let errorCorreo = expresion.test(pCorreo);
    return errorCorreo;
};

const comprobarFormatoTel = (pTelefono) => {
    let expresion = /^[0-9]{4}-[0-9]{4}$/;
    let errorTel = expresion.test(pTelefono);
    return errorTel;
};

const calcularEdad = (pFechaNacimiento) => {
    let fechaActual = new Date();
    let edad = 0;

    edad = fechaActual.getFullYear() - pFechaNacimiento.getFullYear();

    if (fechaActual.getMonth() < pFechaNacimiento.getMonth()) {
        edad -= 1;
    } else {
        if (fechaActual.getMonth() == pFechaNacimiento.getMonth() && fechaActual.getUTCDate() < pFechaNacimiento.getUTCDate()) {
            edad -= 1;
        }
    }

    return edad;
};

const comprobarEdad = (pFechaNacimiento) => {
    let edad = calcularEdad(pFechaNacimiento);

    let errorEdad = false;

    if (edad < 18) {
        errorEdad = true;
    }

    return errorEdad;
};

const obtenerDatos = () => {
    let error = validar();

    if (error == true) {
        Swal.fire({
            icon: 'warning',
            text: 'Por favor, complete todos los campos requeridos',
        })
    } else {
        let nombre1 = inputNombre1.value;
        let nombre2 = inputNombre2.value;
        let apellido1 = inputApellido1.value;
        let apellido2 = inputApellido2.value;
        let tipoId = inputTipoId.value;
        let identificacion = inputIdentificacion.value;
        let fechaNacim = new Date(inputFechaNacim.value);
        let edad = calcularEdad(fechaNacim);
        let correo = inputCorreo.value;
        let telefono = inputTelefono.value;
        let foto = avatar.src;

        let errorEdad = comprobarEdad(fechaNacim);
        let errorCorreo = comprobrarCorreo(correo);
        let errorIdent = comprobarFormatoIdent(identificacion);
        let errorTel = comprobarFormatoTel(telefono);

        if (errorEdad == true) {
            Swal.fire({
                icon: 'warning',
                text: 'Los menores de edad no pueden utilizar el servicio',
            });
            inputFechaNacim.classList.add('error');
        } else {
            inputFechaNacim.classList.remove('error');
        }

        if (errorCorreo == false) {
            inputCorreo.classList.add('error');
        } else {
            inputCorreo.classList.remove('error');
        }

        if (errorIdent == false) {
            inputIdentificacion.classList.add('error');
        } else {
            inputIdentificacion.classList.remove('error');
        }

        if (errorTel == false) {
            inputTelefono.classList.add('error');
        } else {
            inputTelefono.classList.remove('error');
        }

        if (errorEdad == true | errorCorreo == false | errorIdent == false | errorTel == false) {
            Swal.fire({
                icon: 'warning',
                text: 'Por favor, revisar los campos marcados con rojo, existe un error',
            });
        } else {
            Swal.fire({
                icon: 'success',
                text: 'Sus cambios se han guardado correctamente.',
            })

            registrar_cliente(nombre1, nombre2, apellido1, apellido2, tipoId, identificacion, fechaNacim, correo, telefono, foto);

            window.location.href = `codigo-cliente.html?correo=${correo}`
        }

    }
};

btnAceptar.addEventListener('click', obtenerDatos);
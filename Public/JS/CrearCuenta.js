'use strict';

let inputNombre1 = document.querySelector('#nombre1');
let inputContra = document.querySelector('#contrasenna');
let inputContra2 = document.querySelector('#contrasenna2');
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

const comprobarNombre = (pNombre) => {
    //valida que el nombre ingresado no exista en la base de datos
    return true
}

const comprobarContra = (pContra1, pContra2) => {
    return pContra1 === pContra2;
}


const obtenerDatos = () => {
    let error = validar();

    if (error == true) {
        Swal.fire({
            icon: 'warning',
            text: 'Por favor, complete todos los campos requeridos',
        })
    } else {
        let nombre1 = inputNombre1.value;
        let contra = inputContra.value;
        let contra2 = inputContra2.value;


        let errorNombre = comprobarNombre(nombre1);
        let errorContra = comprobarContra(contra, contra2);

        if (errorNombre == false) {
            inputNombre1.classList.add('error');
        } else {
            inputNombre1.classList.remove('error');
        }

        if (errorContra == false) {
            inputContra.classList.add('error');
        } else {
            inputContra.classList.remove('error');
        }

        if (errorNombre == false | errorContra == false) {
            Swal.fire({
                icon: 'warning',
                text: 'Por favor, revisar los campos marcados con rojo, existe un error',
            });
        } else {
            Swal.fire({
                icon: 'success',
                text: 'Sus cambios se han guardado correctamente.',
            })

            registrar_cliente(nombre1, contra);

            window.location.href = `codigo-cliente.html?correo=${correo}`
        }

    }
};

btnAceptar.addEventListener('click', obtenerDatos);
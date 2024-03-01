'use strict';

let inputNombre1 = document.querySelector('#nombre');
let inputContra = document.querySelector('#contrasena');
let inputContra2 = document.querySelector('#contrasena2');
let btnAceptar = document.querySelector('.derecha');
let select = document.getElementById("opciones");


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
    if (select.value == 0) {
        error = true;
    }

    return error;
};


const comprobarNombre = async(pNombre) => {
    var url = 'http://localhost:3000/usuarios/nombre';


    const formData = new FormData();
    formData.append('nombre', pNombre);
    const opciones = {
        method: 'POST', // Método de la solicitud

        body: formData // Convertir el objeto de datos a JSON
    };

    let result;
    await fetch(url, opciones)
        .then(response => {
            if (response.status == 200) {
                result = false;
            } else {
                result = true;
            }
        })
        .catch(error => {
            console.log(error);
        });

    return result
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

            registrar_cliente(nombre1, contra, select.value);

            window.location.href = `codigo-cliente.html?correo=${correo}`
        }

    }
};

btnAceptar.addEventListener('click', obtenerDatos);
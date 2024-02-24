const btnIniciar = document.querySelector('#btn-inciar');
const inputNombre = document.querySelector('#txtEmail');
const inputContraseña = document.querySelector('#txtPassword');
const mensaje1 = document.querySelector('#mensaje');

const validar = () => {
    let error = false;
    let inputs_requeridos = document.querySelectorAll('[required]');

    let tamanno = inputs_requeridos.length;



    for (let i = 0; i < tamanno; i++) {
        if (inputs_requeridos[i].value == '') {
            error = true;
            inputs_requeridos[i].classList.add('error');
        } else {
            inputs_requeridos[i].classList.remove('error');
        }
    }


    return error;
}

const iniciarSesion = async() => {
    let error = validar();
    let cliente;
    let moderador;
    let admin;
    let nombre = inputNombre.value;

    if (error) {
        mensaje1.style.color = '#8C2F1B'
    } else {
        cliente = await validarCredencialesCliente(nombre, inputContraseña.value);
        moderador = await validarCredencialesModerador(nombre, inputContraseña.value);
        admin = await validarCredencialesAdmin(nombre, inputContraseña.value);




        if (cliente) {
            mensaje1.style.color = '#ffffff'
            sessionStorage.setItem('usuarioCliente', JSON.stringify(cliente));
            location.href = "pCliente.html"
        } else {
            mensaje1.style.color = '#8C2F1B'
        }


        if (moderador) {
            mensaje1.style.color = '#ffffff'
            sessionStorage.setItem('usuarioMod', JSON.stringify(moderador));
            location.href = "pMod.html"
        } else {
            mensaje1.style.color = '#8C2F1B'
        }


        if (admin) {
            mensaje1.style.color = '#ffffff'
            sessionStorage.setItem('usuarioAdmin', JSON.stringify(admin));
            location.href = "pAdmin.html"
        } else {
            mensaje1.style.color = '#8C2F1B'
        }
    }




};

btnIniciar.addEventListener('click', iniciarSesion);
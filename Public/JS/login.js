const btnIniciar = document.querySelector('#btn-inciar');
const inputCorreo = document.querySelector('#txtEmail');
const inputContraseña = document.querySelector('#txtPassword');
const mensaje1 = document.querySelector('#mensaje');

const validar = () => {
    let error = false;
    let inputs_requeridos = document.querySelectorAll('[required]');

    let tamanno = inputs_requeridos.length;
    let correo = inputCorreo.value;
    let expresionCorreo = /^[a-zA-Z0-9]+\@*[a-zA-Z0-9]*\@{1}[a-zA-Z]+.com$/;
    let resCorreo = expresionCorreo.test(correo)


    for (let i = 0; i < tamanno; i++) {
        if (inputs_requeridos[i].value == '') {
            error = true;
            inputs_requeridos[i].classList.add('error');
        } else {
            inputs_requeridos[i].classList.remove('error');
        }
    }
    // Validar correo
    if (resCorreo == false) {
        error = true;
        inputs_requeridos[0].classList.add('error');
    } else {
        inputs_requeridos[0].classList.remove('error');
    };

    return error;
}

const iniciarSesion = async() => {
    let error = validar();
    let individual;
    let parqueo;
    let empresa;
    let empleado;
    let admin;
    let correo = inputCorreo.value;

    if (error) {
        mensaje1.style.color = '#8C2F1B'
    } else {
        individual = await validarCredencialesCliente(correo, inputContraseña.value);
        empresa = await validarCredencialesEmpresa(correo, inputContraseña.value);
        admin = await validarCredencialesAdmin(correo, inputContraseña.value);
        parqueo = await validarCredencialesParqueo(correo, inputContraseña.value);



        if (individual) {
            mensaje1.style.color = '#ffffff'
            sessionStorage.setItem('usuarioCliente', JSON.stringify(individual));
            location.href = "buscar.html"
        } else {
            mensaje1.style.color = '#8C2F1B'
        }


        if (parqueo) {
            mensaje1.style.color = '#ffffff'
            sessionStorage.setItem('usuarioParqueo', JSON.stringify(parqueo));

            location.href = "parqueo/CU-47.html"
        } else {
            mensaje1.style.color = '#8C2F1B'
        }


        if (empresa) {
            mensaje1.style.color = '#ffffff'
            sessionStorage.setItem('usuarioEmpresa', JSON.stringify(empresa));
            location.href = "CU-57.html"
        } else {
            mensaje1.style.color = '#8C2F1B'
        }

        // empleado = await validarCredencialesEmpleado(correo, inputContraseña.value);
        // if (empleado) {
        //     mensaje1.style.color = '#ffffff'
        //     sessionStorage.setItem('usuarioEmpleado', JSON.stringify(empleado));

        //     //location.href = "empleado/.html"
        // } else {
        //     mensaje1.style.color = '#8C2F1B'
        // }


        if (admin) {
            mensaje1.style.color = '#ffffff'
            sessionStorage.setItem('usuarioAdmin', JSON.stringify(admin));
            location.href = "verperfadmin.html"
        } else {
            mensaje1.style.color = '#8C2F1B'
        }
    }




};

btnIniciar.addEventListener('click', iniciarSesion);
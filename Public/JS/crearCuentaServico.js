'use strict';

const registrar_cliente = async(pNombre, pContrasenna) => {

    await axios({
            method: 'post',
            url: 'http://localhost:3000/api/registrar_cliente',
            responseType: 'json',
            data: {
                'nombre_cliente': pNombre,
                'contrasenna_cliente': pContrasenna
            }
        })
        .then(response => {
            console.log(response);
        })
        .catch(error => {
            console.log(error);
        });

};
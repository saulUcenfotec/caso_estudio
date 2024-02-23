'use strict';

const registrar_cliente = async(pNombre1, pNombre2, pApellido1, pApellido2, pTipoId, pIdentificacion, pFechaNacim, pCorreo, pTelefono, pfoto) => {

    await axios({
            method: 'post',
            url: 'http://localhost:3000/api/registrar_cliente',
            responseType: 'json',
            data: {
                'nombre1_cliente': pNombre1,
                'nombre2_cliente': pNombre2,
                'apellido1_cliente': pApellido1,
                'apellido2_cliente': pApellido2,
                'tipoid_cliente': pTipoId,
                'identificacion_cliente': pIdentificacion,
                'fechaNacim_cliente': pFechaNacim,
                'correo_cliente': pCorreo,
                'telefono_cliente': pTelefono,
                'foto_cliente': pfoto
            }
        })
        .then(response => {
            console.log(response);
        })
        .catch(error => {
            console.log(error);
        });

};
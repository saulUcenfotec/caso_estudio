const AlphaStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

class Helper {

    constructor() {}

    static ramdomize() {
        return Math.floor(Math.random() * 4) + 1;

    }

    static cambioDescripcion(pId) {
        let mDescription = "Fuera de la oficina";
        switch (pId) {
            case 1:
                mDescription = "Correo de seguimiento";
                break;
            case 2:
                mDescription = "Recordatorio de evento";
                break;
            default:
                mDescription = "Correo de despedida";
        }
        return mDescription;
    }

    static esMultiplo(n1, n2) {
        return n1 % n2 === 0;
    }

    static generarID() {
        let idGenerado;

        const letra1 = Math.floor(Math.random() * AlphaStr.length);
        const letra2 = Math.floor(Math.random() * AlphaStr.length);
        const numeros = Math.floor(Math.random() * 900) + 100;
        idGenerado = `${AlphaStr.charAt(letra1)}${AlphaStr.charAt(letra2)}${numeros}`;
        return idGenerado;
    }

}
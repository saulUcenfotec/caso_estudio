const btnClonar = document.querySelector('#btn-clonar');
const listaTemplate = document.querySelector('#template-list');

class cloneTemplate {

    constructor() {}

    static clonar = () => {
        let idPublico = 100;
        let idPrivado = 200;
        let gGestor = new Gestor(idPublico, idPrivado);

        for (let i = 0; i < 20; ++i) {
            gGestor.nuevo_template(i);
        }

        listaTemplate.textContent += gGestor.obtenerDatos();
    }



}

btnClonar.addEventListener('click', cloneTemplate.clonar);
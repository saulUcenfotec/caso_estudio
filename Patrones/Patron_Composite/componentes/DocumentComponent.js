class DocumentComponent {
    constructor() {
        if (this.constructor === DocumentComponent) {
            throw new Error("No puedes instanciar un objeto de la clase abstracta DocumentComponent.");
        }
    }

    print() {
        throw new Error("Método 'print' debe ser implementado por las clases hijas.");
    }
}
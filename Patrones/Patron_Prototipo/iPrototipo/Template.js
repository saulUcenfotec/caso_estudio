class Template {
    constructor() {
        this.id = 0;
        this.nombre = "";
        this.descripcion = "";
        this.categoria = 0;
        this.palabrasClave = [];
        this.texto = "";
        this.parametrosEditables = [];
        this.estado = false;

    }

    getId() {
        return this.id;
    }

    setId(id) {
        this.id = id;
    }

    getNombre() {
        return this.nombre;
    }

    setNombre(nombre) {
        this.nombre = nombre;
    }

    getDescripcion() {
        return this.descripcion;
    }

    setNombre(descripcion) {
        this.descripcion = descripcion;
    }

    getCategoria() {
        return this.categoria;
    }

    setCategoria(categoria) {
        this.categoria = categoria;
    }

    getPalabrasClave() {
        return this.categoria;
    }

    setPalabrasClave(palabras) {
        this.palabrasClave = palabras;
    }

    getTexto() {
        return this.texto;
    }

    setTexto(texto) {
        this.texto = texto;
    }

    getParametrosEditables() {
        return this.parametrosEditables;
    }

    setParametrosEditables(parametros) {
        this.parametrosEditables = parametros;
    }

    getEstado() {
        return this.estado;
    }

    setEstado(estado) {
        this.estado = estado;
    }

    getData() {
        let mData = "< Sobre este producto >\n";
        mData += "ID: " + this.getID() + "\n";
        mData += "Descripcion: " + this.getDescripcion() + "\n";
        mData += "Categoría: " + this.getCategoria() + "\n";
        mData += "Palabras clave: " + this.getPalabrasClave() + "\n";
        mData += "Texto: " + this.getTexto() + "\n";
        mData += "Parametros: " + this.getParametrosEditables() + "\n";
        mData += "Estado: " + this.getEstado() + "\n";
        return mData;

    }
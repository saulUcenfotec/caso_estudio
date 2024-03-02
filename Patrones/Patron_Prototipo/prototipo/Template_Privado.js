class Template_Privado extends Template {
    constructor(pID, pDescripcion, pTexto) {
        super();
        this.setId(pID);
        this.setNombre();
        this.setDescripcion(pDescripcion);
        this.setCategoria(2);
        this.setPalabrasClave([]);
        this.setTexto(pTexto);
        this.setParametrosEditables([]);
        this.setEstado(true);

    }



    clone() {
        return new Template_Publico(this.getId, this.getNombre, this.getDescripcion, this.getPalabrasClave, this.getTexto, this.parametrosEditables, this.getEstado)
    }

}
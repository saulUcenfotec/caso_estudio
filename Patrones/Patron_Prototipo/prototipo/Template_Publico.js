class Template_Publico extends Template {
    constructor(pID, pNombre, pDescripcion, pTexto) {
        super();
        this.setId(pID);
        this.setNombre(pNombre);
        this.setDescripcion(pDescripcion);
        this.setCategoria(1);
        this.setPalabrasClave([]);
        this.setTexto(pTexto);
        this.setParametrosEditables([]);
        this.setEstado(true);

    }



    clone() {
        return new Template_Publico(this.getId, this.getNombre, this.getDescripcion, this.getPalabrasClave, this.getTexto, this.parametrosEditables, this.getEstado)
    }

}
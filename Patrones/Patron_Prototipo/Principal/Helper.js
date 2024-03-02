class Helper {
    constructor() {}

    static ramdomize() {
        return Math.floor(Math.random() * 4) + 1;

    }

    static esMultiplo(n1, n2) {
        return n1 % n2 === 0;
    }

}
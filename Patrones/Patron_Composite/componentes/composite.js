class Composite extends DocumentComponent {
    constructor() {
        super();
        this.children = [];
    }

    add(component) {
        this.children.push(component);
    }

    print() {
        this.children.forEach(child => {
            child.print();
        });
    }
}
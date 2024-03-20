class Leaf extends DocumentComponent {
    constructor(content) {
        super();
        this.content = content;
    }

    print() {
        console.log(this.content);
    }
}
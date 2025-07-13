// classes (super)

class Entity {
    constructor(name, description = "") {
        this.name = name;
        this.description = description;
    }

    show() {
        console.log(this.description);
    }
}

class Player extends Entity {
    constructor(name, classe, description) {
        super(name, description);
        this.classe = classe;
    }
}

joao = new Player("joao", "mago", "um simples player")

joao.show()

class Loja {
    static estoque = {};

    static add(produto, quantidade = 1) {
        if (!this.estoque[produto]) {
            this.estoque[produto] = quantidade;

        } else {
            this.estoque[produto] += quantidade;
        }
    }

    static remove(produto, quantidade) {
        if (!this.estoque[produto]) {
            console.log("esse produto não existe no estoque.");
        } else {
            this.estoque[produto] -= quantidade;
            if (this.estoque[produto] < 0) {
                this.estoque[produto] = 0;
            }
        }
    }

    static show() {
        for (let item of Object.keys(this.estoque)) {
            console.log(item, this.estoque[item]);
        }
    }
}

Loja.add('maca');
Loja.add('maca');
Loja.add('maca');

Loja.add('pera');
Loja.add('pera', 10);

Loja.remove("pera", 5)

Loja.show();
// classes (getter e setter)

class Banco {
    constructor(money) {
        this._money = money;
    }

    get money() {
        return this._money.toFixed(2);
    }

    set money(valor) {
        if (valor > 0) {
            this._money = valor;
        } else {
            console.log("O valor precisa ser acima de 0.")
        }
    }
}

itau = new Banco(100);

itau.money = -10
itau.money = 50

console.log(itau.money)

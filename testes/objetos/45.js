// classes

class ContaBancaria {
    #saldo = 0;
    depositar(valor) {
        if (valor > 0) {
            this.#saldo += valor;
            console.log("valor adicionado")
        } else console.log("Digite um valor valido")
    }

    resgatar(valor) {
        if (valor < this.#saldo && this.#saldo !== 0) {
            this.#saldo -= valor;
            console.log("Valor resgatado")
        } else console.log("valor resgatado")
    }

    get saldo() {
        return this.#saldo.toFixed(2);
    }

}

conta = new ContaBancaria();

console.log(conta.saldo)

conta.depositar(50)
conta.depositar(20)

console.log(conta.saldo)

conta.resgatar(30)
conta.resgatar(5)
conta.depositar(10)

console.log(conta.saldo)

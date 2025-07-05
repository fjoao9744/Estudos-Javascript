// this
// serve pra acessar itens do proprio objeto

obj = {
    hp: 10,
    max_hp: 10,
    hp_reduce(damage) {
        this.hp -= damage; // se não colocar this da erro

        return this.hp
    }
}

console.log(obj.hp_reduce(2))
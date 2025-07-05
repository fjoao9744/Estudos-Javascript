// propriedades dinâmicas

func = "falar"

const obj = {
    nome: "joao",
    [func]() {
        console.log("oi!")
    }
}

obj.falar()
obj[func]()

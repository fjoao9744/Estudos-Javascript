function contar(string) {
    palavras = string.split(" ")
    palavras_cont = {}
    for (palavra of palavras) {
        if (palavras_cont[palavra]) {
            palavras_cont[palavra] += 1
        } else {
            palavras_cont[palavra] = 1
        }
    }

    return palavras_cont
}

const frase = "hoje o dia está bonito e o sol está forte";

console.log(contar(frase))
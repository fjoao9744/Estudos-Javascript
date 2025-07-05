// desestruturação

const loja = {
    nome: "loja do povo",
    produtos: {
        arroz: {
            nome: "arroz",
            preço: 23,
            desconto: 2,
            em_estoque: 10
        },
        feijao: {
            nome: "feijão",
            preço: 15,
            desconto: 10,
            em_estoque: 9
        }
    },
    endereco: {cidade: "xique xique", estado: "Bahia"}
}

const {nome: lojaNome = "desconhecido", produtos: {feijao: {desconto: feijaoDesconto}} = 0, endereco: {estado} = "", sigla = "", ...resto} = loja;

console.log(`la em ${estado}${sigla} esta vendendo feijao com ${feijaoDesconto}% de desconto na loja: ${lojaNome}`)
console.log(resto)

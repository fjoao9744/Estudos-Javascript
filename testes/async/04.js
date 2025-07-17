// fetch

async function pegarCotação1() {
    valores = fetch("https://economia.awesomeapi.com.br/last/USD-BRL")
    .then(res => console.log(res)) // desse jeito podemos acessar o resultado dentro do then
    .catch(erro => console.log("algo deu errado!"))
}

async function pegarCotação2() { // desse jeito podemos usar a variavel 
    try {
        valores = await fetch("https://economia.awesomeapi.com.br/last/USD-BRL")
        valores = await valores.json()
        console.log(valores)
    } catch {
        console.log("algo deu errado!")
    }
}
async function pegarCotação3() { // meu jeito(não recomendado)
    valores = await fetch("https://economia.awesomeapi.com.br/last/USD-BRL")
    .then(res => res.json()).catch(erro => console.log("algo deu errado"))
    console.log(valores)
}

(async () => {
    await pegarCotação1();
    await pegarCotação2();
    await pegarCotação3();

})()
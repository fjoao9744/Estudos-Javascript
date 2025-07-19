// Promise.all

async function name(params) {
    const responses = await Promise.all([
        fetch("https://pokeapi.co/api/v2/pokemon/1"),
        fetch("https://pokeapi.co/api/v2/pokemon/2"),
        fetch("https://pokeapi.co/api/v2/pokemon/2"),
    ])

    //resposes.map(res => res.json()) // [ Promise { <pending> }, Promise { <pending> }, Promise { <pending> } ]

    const dados = await Promise.all(responses.map(res => res.json())) // espera os .json() se resolverem(promises)

    console.log(dados)
}

name()
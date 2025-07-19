// Promise.all

async function name(params) {
    const responses = await Promise.all([ // array de Responses
        fetch("https://pokeapi.co/api/v2/pokemon/1"),
        fetch("https://pokeapi.co/api/v2/pokemon/2"),
        fetch("https://pokeapi.co/api/v2/pokemon/2"),
        // paralelismo
    ])

    console.log(responses)
}

name()
// Promise.all

async function name(params) {
    const p1 = fetch("https://pokeapi.co/api/v2/pokemon/1")
    const p2 = fetch("https://pokeapi.co/api/v2/pokemon/2")
    const p3 = fetch("https://pokeapi.co/api/v2/pokemon/3")

    await Promise.all([p1, p2, p3]).then(console.log)
}

name()
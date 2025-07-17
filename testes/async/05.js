// setInterval

let intervalId = setInterval(() => {
    console.log("spawnando monstros")
}, 2000)

let c = 1
let stopId = setInterval(() => {
    c++
    if (c === 10) {
        clearInterval(intervalId)
        console.log("intervalo parado")
    }
    console.log(c)
    if (c === 15) clearInterval(stopId)
}, 1000)


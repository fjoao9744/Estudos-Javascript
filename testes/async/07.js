// parar setTimeOut recursivo

let c;
let intervalID;

function contador(num) {
    if (c === 10) {
        clearTimeout(intervalID) // parar o intervalo
        return // parar a função
    }
    console.log(c)
    c = num + 1
    intervalID = setTimeout(() => contador(c), 1000)
}

contador(0)

// callback

function calcular(a, b, callback) {
    const resultado = a + b;
    callback(resultado);
}

calcular(5, 3, res => console.log("resultado:", res)); // callback
// function (res) { console.log("resultado:", res) }
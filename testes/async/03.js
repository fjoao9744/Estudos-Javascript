// promises

function dividir(a, b) {
    return new Promise((resolve, reject) => {
        if (b === 0) reject("Não é possivel dividir por 0.")
        else resolve(a / b)
    })
}

async function a() {
    di = await dividir(9, 3).then(resul => console.log(resul)).catch(erro => console.log(erro))
    di2 = await dividir(9, 0).then(resul => console.log(resul)).catch(erro => console.log(erro))

}
a()


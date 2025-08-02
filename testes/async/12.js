// try catch com async

async function teste() {
    try {
        response = await fetch("rota que não existe")
        data = await response.json()

        console.log(data)
    } catch (erro) {
        console.log("Deu erro: ", erro.message)
    }
}

teste()
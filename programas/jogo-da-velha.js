const readline = require('readline');
const matriz = new Array(3);

for (let i = 0; i < 3; i++) {
    matriz[i] = ['+', '+', '+'];
}

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

async function perguntar() {
    return new Promise((resolve) => {
        rl.question('Digite qual posição você deseja jogar(x y): ', (pos) => {
        resolve(pos.split(" "));
        })
    })    
}

(async () => {
    let player = 'x';
    let in_game = true;
    while (in_game) {
        console.log("  0 1 2");
        let c = 0;

        for (line of matriz) {
            console.log(c, line[0], line[1], line[2]);
            c += 1;
        }

        let [xStr, yStr] = await perguntar();
        let x = parseInt(xStr);
        let y = parseInt(yStr);

        console.clear();

        if (isNaN(x) || isNaN(y) || x < 0 || x > 2 || y < 0 || y > 2){
            console.log("Digite uma posição valida");
            continue;
        } 

        if (matriz[x][y] === '+') {
            matriz[x][y] = player;

            if (player === 'x') {
                player = 'o';
            } else {
                player = 'x';
            }

        } else {
            console.log("essa posição ja esta ocupada");
        }

        if (await verificar_vitoria('x')) {
            console.log("parabens, o player 1 venceu!");
            in_game = false;
            rl.close();
        } else if (await verificar_vitoria('o')) {
            console.log("parabens, o player 2 venceu!");
            in_game = false;
            rl.close();
        }
    }
})()

async function verificar_vitoria(jogador) {
    for (let i = 0; i < matriz.length; i++) {
        if (matriz[i][0] === jogador && matriz[i][1] === jogador && matriz[i][2] === jogador) return true
        if (matriz[0][i] === jogador && matriz[1][i] === jogador && matriz[2][i] === jogador) return true
    }
    if (matriz[0][0] === jogador && matriz[1][1] === jogador && matriz[2][2] === jogador) return true
    if (matriz[0][2] === jogador && matriz[1][1] === jogador && matriz[2][0] === jogador) return true

    return false
}

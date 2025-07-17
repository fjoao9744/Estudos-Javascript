// setTimeOut recursivo

function contador(num) {
    console.log(num);
    num++;
    setTimeout(() => contador(num), 1000);
}

n = 0

contador(n)

// closures

function contador() {
    c = 0
    return function() {
        c++
        console.log(c)
    }
}

let cont = contador()
cont()
cont()
cont()
cont()

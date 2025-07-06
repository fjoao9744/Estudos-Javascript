// classes (metodos estaticos)

class Matematica {
    static somar(...nums) {
        return nums.reduce((acc, atual) => acc + atual, 0)
    }
}

console.log(Matematica.somar(2, 3, 4, 2))

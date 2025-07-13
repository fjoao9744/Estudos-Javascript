// instanceof

class Animal {}
class Cachorro extends Animal {}

rex = new Cachorro();

console.log(rex instanceof Cachorro);
console.log(rex instanceof Animal);
console.log(rex instanceof Object);

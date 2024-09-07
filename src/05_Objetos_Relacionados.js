const auto = {
    id: 1,
    name: "Ford",
    date: new Date(),
    marca: {
        id: 1,
        name: "Ford",
        ubication: "EUA",
        age: 50
    },
    costo: 1000000,
    saludo: function (){
        return `Hola ${this.name}`
    }
}

auto.name = "Chevrolet"
auto.costo = 120000
console.log(auto)

const saludo = auto.saludo()
console.log(saludo)
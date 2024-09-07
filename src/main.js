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
    inventarios: [
        {
            id: 1,
            color: 'Azul',
            cantidad: 5,
            precio: 170000
        },
        {
            id: 2,
            color: 'Rojo',
            cantidad: 10,
            precio: 160000
        },
        {
            id: 3,
            color: 'Blanco',
            cantidad: 2,
            precio: 180000
        }
    ],
    totalInventario: function (){
        let total = 0
        this.inventarios.forEach(inventario => {
            total = total + inventario.precio * inventario.cantidad
        })
        return total
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

console.log(auto.totalInventario())
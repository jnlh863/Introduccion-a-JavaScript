const obtenerinfo = (name = 'Jahir', lastname = 'Hdz') => `Hola ${name} ${lastname}`
const sum = (a = 0, b = 0) => a + b;

const info = obtenerinfo('Nicolas', 'Lopez');

console.log(info);
console.log(sum(21,21));
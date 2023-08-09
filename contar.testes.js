const inicio = new Date();
console.log(typeof(inicio));
const fim = new Date("2022-08-08T14:00:00");

const diferenca = new Date(fim - inicio);

let resultado = diferenca.getUTCHours() + "h ";

resultado += diferenca.getUTCMinutes() + "m ";

resultado += diferenca.getUTCSeconds() + "s ";

console.log(resultado);
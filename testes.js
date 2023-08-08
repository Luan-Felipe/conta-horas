import { duracao } from './duracao.js';
    

// calcula a duração total em minutos
let jornadaNormal = duracao('08:00', '12:00', '14:00', '19:00');

// quantidade em minutos efetivamente trabalhados

let jornada = duracao('08:00', '12:06', '12:59', '17:00');

console.log(jornadaNormal);
console.log(jornada);
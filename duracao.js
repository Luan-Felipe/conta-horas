import { parse } from 'parse.js'


function duracao(entrada1, saida1, entrada2, saida2) {
    return (parse(saida1) - parse(entrada1) + parse(saida2) - parse(entrada2));
}

export {duracao};
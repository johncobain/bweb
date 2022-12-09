// let tel = '98191';

// console.log(tel.padEnd(9, '*'));
// console.log(tel.padStart(9, '*'));


let cartao = '1234555567897789'

let lastDigits = cartao.slice(-4);
let cartaoMasc = lastDigits.padStart(16,'*');

console.log(`Este é o seu cartão? ${cartaoMasc}`);
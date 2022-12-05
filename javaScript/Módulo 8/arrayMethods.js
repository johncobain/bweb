let lista = ['farinha', 'ovo', 'leite', 'fermento'];
let listaTest = ['farinha', 'ovo', 'leite', 'fermento'];
let listaTest2 = ['prato', 'batedeira', 'colher', 'forno'];
let listaN = [45, 4, 9, 16, 25];
let listaU = [
    {id:1, nome:'John', sobrenome:'Cobain'},
    {id:2, nome:'July', sobrenome:'Silva'},
    {id:3, nome:'Coffee', sobrenome:'Cookie'}
];

let lista2 = [];

let res;
// res = lista.toString();
// res = lista.join(' - ');
// res = lista.indexOf('ovo');
// res = lista.indexOf('pão');
// listaTest[1] = 'ovos'
// listaTest.pop();
// listaTest.shift();
// listaTest.push('achocolatado')
// delete listaTest[1]; //nah
// listaTest.splice(2,1);
// listaTest.splice(1,2);
// res = listaTest.concat(listaTest2);
// listaTest.sort();
// listaTest.reverse();
// res = listaTest;

// lista2 = listaN.map(i => i*2);
// lista2 = listaN.filter(i => i<20);
// lista2 = listaN.every(i => i>20);
// lista2 = listaN.some(i => i>20);
// lista2 = listaN.find(i => i == 16);
// lista2 = listaN.findIndex(i => i == 16);
// res = lista2;

// let pessoa = listaU.find(i => i.sobrenome === 'Cookie');
// let pessoa = listaU.find(i => i.id === 2);
let pessoa = listaU.find(i => i.nome === 'John');

res = pessoa;


console.log(res);
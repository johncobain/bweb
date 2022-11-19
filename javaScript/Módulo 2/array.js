/*
let colors = ['blue', 'red', 'green', 'purple'];

console.log(colors);
console.log(colors[2]);

let ages = [10, 20, 30];

console.log(ages);

let list = ['something', 30, 'blabla', true, ['john', 'cobain'], colors];

console.log(list);
console.log(list[4][0]);
*/
/*
let ingredientes = [
    'agua',
    'farinha',
    'ovo',
    'corante',
    'sal'
];
console.log(ingredientes);

// ingredientes[5] = 'cebola'; //?
ingredientes.push('cebola');
console.log(ingredientes);

console.log(`Total de ingredientes: ${ingredientes.length}`);

ingredientes.pop();
console.log(ingredientes);

ingredientes.shift();
console.log(ingredientes);
*/

//exercício array

//#1
// let carros = ['BMW', 'Ferrari', 'Mercedes'];
// let x = 1;
// console.log('1. ' + carros[x]);

//#2

// carros[1] = 'Audi';
// console.log('2. Lista com Audi:');
// console.log(carros);

//#3

// carros.push('Volvo');
// console.log('3. Lista com Volvo: ');
// console.log(carros);

//#4

// console.log(`4. itens no array: ${carros.length}`);
/*
let fruits = ['Maçã', 'Uva', 'Laranja', 'Banana'];
fruits.push('Kiwi');

console.log(fruits);
console.log(fruits.length);

fruits.pop();

console.log(fruits);
console.log(fruits.length);

fruits.shift();

console.log(fruits);
console.log(fruits.length);

console.log(fruits.join(', '));

fruits[0] = 'Pêra';

console.log(fruits);

fruits[fruits.length -1] = 'Abacaxi';

console.log(fruits);
*/

// let fruits = ['Maçã', 'Uva', 'Laranja', 'Banana'];

// fruits.sort();
// fruits.reverse();

// console.log(fruits);

// let cars = [
//     {brand: 'Fiat', year: 2022},
//     {brand: 'Bmw', year: 2018},
//     {brand: 'Ferrari', year: 2020}
// ];

// cars.sort((a, b) => a.year - b.year);

// console.log(cars);

// let numbers = [1, 30, 4, 22, 8, 98, 120, 43];
// numbers.sort((a, b) => a - b);

// console.log(numbers);

let fruits = ['Banana', 'Laranja',  'Maçã', 'Pêra'];

let bigfruits = fruits.filter(item => item.length > 4);

console.log(bigfruits);

let ok = fruits.every((item) => item.length > 3);

if(ok){
    console.log('todos são maiores que 3');
}else{
    console.log('nem todos são maiores que tres');
}

let some = fruits.some(item => item.length > 3);

if(some){
    console.log('alguns são maiores que 3');
}else{
    console.log('nenhum é maior que 3');
}

if(fruits.includes('Maçâ')){
    console.log('Tem maçã');
}else{
    console.log('Não tem maçã :<');
}
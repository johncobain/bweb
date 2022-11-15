/*
//variaveis
let nome = 'John'; let idade = 17; let maiorIdade = false;
let nescau = ['leite', 'nescau'];
let nomeCompleto = {
    nome: 'John',
    sobrenome: 'Cobain'
};

//apresentar no console
console.log('hello world');
console.log(`${nome} has ${idade} years`);
console.log(typeof nomeCompleto);

//exercício #1

//1
let car = "Ferrari";
console.log(car);

//2
let price = 19.99;
console.log(`R$${price}`);

//3
let cidade = 'São Paulo';
console.log(cidade);
*/

/*
let nome = 'john';

console.log(nome);

nome = 'mary';

console.log(nome);

const ano = 2022;

console.log(ano);

ano = 1900; //erro

console.log(ano) //erro
*/
/*
let x = 6;

x +=1;

console.log(x);

let name = 'John';
let surname = 'Cobain';
// let fullName = name + ' ' + surname
let fullName = `${name} ${surname}`;

console.log(fullName);
*/
/*
let age = 90;

if(age < 18){
    console.log('Você é menor de idade');
}else if(age >= 18 && age <= 60){
    console.log('Você é adulto');
}else{
    console.log('Você é idoso');
}
*/
/*
//exercício #2

//1

let x = 10;
let y = 5;
console.log(x>y);

//2

let w = '10';
let z = 10;
console.log(w === 10);

//3

let a = 10;
let b = 5;
console.log(a != b);

//4
let preco = 40.3;

if(preco <= 45){
    console.log('A carne está barata');
}else{
    console.log('A carne está cara');
}
*/
/*
let isMember = true;
let shipping = isMember ? 2 : 10;

console.log(`Frete: R$${shipping}`);
*/

let profession = 'artista';

console.log(`Profissão: ${profession}`);

switch(profession){
    case 'fiscal':
        console.log('Camisa verde');
    break;
    case 'bombeiro':
        console.log('Camisa vermelha');
    break;
    case 'policial':
        console.log('Camisa azul');
    break;
    default:
        console.log('Camisa preta');
    break;
}
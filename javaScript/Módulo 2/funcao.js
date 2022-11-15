/*
gravidade();


function gravidade(){
    console.log('A gravidade do planeta é de: ');
    console.log(9.8);
}
*/
/*
function sum(a, b){
    let res = a + b;
    console.log(`Resultado: ${res}`);
}

function fullName(name, surname){
    return `${name} ${surname}`;
}

sum(20,45);

let completo = fullName('Andrey', 'Gomes');
let completo2 = fullName('John', 'Cobain');

console.log(`${completo}\n${completo2}`);

function sumMore(...args){
    let total = 0;
    for(i in args){
        total += args[i];
    }
    console.log(total);
}

sumMore(1, 5, 8, 20, 7, 13, 32);
*/
/*
function isAdult(age){
    if(age >= 18){
        return true;
    }else{
        return false;
    }
}

let marcoAge = 20;
let johnAge = 15;

isAdult(marcoAge)? console.log('É maior de idade'): console.log('Não é maior de idade');

isAdult(johnAge)? console.log('É maior de idade'): console.log('Não é maior de idade');
*/

//funcion exercise #1
/*
function calcPct(x, y){
    return (y/x)*100;
}

let x = 40; let y = 10;
let pct = calcPct(x, y);
console.log(`${pct}% de ${x} é ${y}`);
*/

//funcion exercise #2

/*
Calcule O preço do imóvel
 - m2= 3.000
 - Se tiver 1 quarto, O m2 é 1x
 - Se tiver 2 quartos, O m2 é 1.2x
 - Se tiver 3 quartos, 0 m2 é 1.5x
Uso da função:
 */
/*
function calculateProperty(meters, rooms){
    let m2 = 3000;
    let price = 0
    switch(rooms){
        case 1:
            price = m2*meters;
            break;
        case 2:
            price = (m2*1.2)*meters;
            break;
        case 3:
        default:
            price = (m2*1.5)*meters;
            break
    }
    return price
}

let meters = 123;
let rooms = 3;
let price = calculateProperty(meters, rooms);
console.log(`A casa custa R$${price}.00`);
*/

//funcion exercise #3
/*
Crie uma função que valide usuário e senha.
Usuário correto: pedro
 Senha correta: 123
 */
//Uso da função:
/*
function validar(user, pass){
    if(user === 'pedro' && pass === '123'){
        return true;
    }else{
        return false;
    }
}


let usuario = 'pedro';
let senha = '123';
let validacao = validar(usuario, senha);
if (validacao) {
    console.log('Acesso concedido.');
}else{
    console.log('Acesso NEGADO!');
}
*/
/*
// function somar(x,y){
//     return x + y;
// }
// const somar = (x, y) => {
//     return x + y;
// }
const somar = (x, y) => x + y;

console.log(somar(10, 5));

// function sobrenome(sob){
//     return 'John ' + sob;
// }
const sobrenome = sob => 'John ' + sob;

console.log(sobrenome('Cobain'));
*/


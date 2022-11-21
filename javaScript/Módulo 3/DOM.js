// DOM - Document Object Model
/*
let elements  = document.getElementsByTagName('h1')
console.log(elements[0]);

let test = document.getElementById('test');
console.log(test);

let botao = document.getElementsByClassName('botao')
console.log(botao[0]);

let query = document.querySelector('#query');
console.log(query);

let teste1 = document.querySelectorAll('#teste1 li');
console.log(teste1);
*/

function changeBgGrey(){
    document.body.style.backgroundColor = '#aaa'
}
function changeBgWhite(){
    document.body.style.backgroundColor = '#fff'
}

let h1 = document.querySelector('h1');
h1.addEventListener('click', () =>{
    h1.innerHTML += 'You clicked me';
});
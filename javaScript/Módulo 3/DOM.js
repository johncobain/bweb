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
let liCount = 3;
function changeBgGrey(){
    document.body.style.backgroundColor = '#aaa';

    // // const getDiv = document.querySelector('#test');
    // // const ul = getDiv.querySelector('ul#teste1');

    // // // liCount++;
    // // // ul.innerHTML += `<li>${liCount}</li>` ;

    // // ul.children[0].append('(alterado)');

    // // let newLi = document.createElement('li');
    // // newLi.innerText = 'Item adicionado;'

    // // ul.appendChild(newLi);

    // const li = document.querySelector('li');
    // li.style.backgroundColor = 'black';
    // li.style.fontSize = '20px';

    // const button = document.querySelector('.clique');
    // button.classList.add('verde')
    // button.classList.remove('azul');

    // button.classList.toggle('preto');
    // console.log(button.classList);
}
function changeBgWhite(){
    document.body.style.backgroundColor = '#fff';

    // const getDiv = document.querySelector('#test');
    // const ul = getDiv.querySelector('ul#teste2');

    // let newUl = document.createElement('ul');
    // for(let i = 0; i< 5; i++){
    //     let newLi = document.createElement('li');
    //     newLi.innerHTML = 'item add ' + i;

    //     newUl.append(newLi);
    // }

    // // ul.after(newUl);
    const button = document.querySelector('.senha')
    const input = document.querySelector('input');

    // console.log(input.getAttribute('placeholder'));
    // console.log(input.hasAttribute('placeholder'));

    if(input.getAttribute('type') === 'text'){
        input.setAttribute('type', 'password');
        button.innerText = 'Mostrar senha';
    }else if(input.getAttribute('type') === 'password'){
        input.setAttribute('type', 'text');
        button.innerText = 'Ocultar senha';
    }
}

let h1 = document.querySelector('h1');
h1.addEventListener('click', () =>{
    h1.innerHTML += 'You clicked me';
});








function apertou(){
    console.log('APERTOU');
}

function segurou(){
    console.log('SEGUROU');
}

function soltou(e){
    console.log(e.code);
    console.log(e.key);
    console.log('shift ' + e.shiftKey);
    console.log('ctrl ' + e.ctrlKey);
    console.log('alt ' + e.altKey);
    console.log('----------');
}

// document.addEventListener('keyup', () => console.log('soltou body'))

const input = document.querySelector('input.key');
input.addEventListener('keyup', soltou)
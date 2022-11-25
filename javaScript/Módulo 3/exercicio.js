const ul = document.querySelector('ul');
const input =document.querySelector('input');


input.addEventListener('keyup', (e) => {
    if(e.code === 'Enter'){
        const newLi = document.createElement('li');
        newLi.innerHTML = input.value;
        ul.appendChild(newLi);
        input.value = '';
    }
});
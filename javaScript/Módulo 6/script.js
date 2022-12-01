function trocarImagem(fileName, animalName){
    const image = document.querySelector('.imagem');
    image.setAttribute('src', `./images/${fileName}`);
    image.setAttribute('data-animal', animalName);
}

function qualAnimal(){
    const animal = document.querySelector('.imagem').getAttribute('data-animal');
    alert(`O animal é: ${animal}`);
}

function toTop(){
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
    });
}

const buttonTop = document.querySelector('.scrollbutton');

if(window.scrollY == 0){
    buttonTop.style.display = 'none';
}
window.addEventListener('scroll', () => {
    if(window.scrollY > 0){
        buttonTop.style.display = 'flex';
    }else if(window.scrollY == 0){
        buttonTop.style.display = 'none';
    }
})






// const texto = document.querySelector('.texto');
// console.log(texto.offsetWidth);
// console.log(texto.offsetHeight);
// console.log('---');
// console.log(texto.clientWidth);
// console.log(texto.clientHeight);
// console.log('---');
// console.log(texto.scrollWidth);
// console.log(texto.scrollHeight);

// console.log(texto.scrollTop);
// console.log(texto.scrollLeft);
// console.log(window.scrollY);
// console.log(window.scrollX);
// window.scrollTo(0,0)
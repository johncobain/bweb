function changeSlide(slide){
    const sliders = document.querySelector('.sliders');

    const pointers = document.querySelectorAll('.pointer');

    pointers.forEach(pointer => pointer.classList.remove('active'));

    if(slide === 1){
        sliders.style.marginLeft = '0vw';
        document.getElementById('pointer1').classList.add('active');
    }else if(slide === 2){
        sliders.style.marginLeft = '-100vw';
        document.getElementById('pointer2').classList.add('active');
    }else if(slide === 3){
        sliders.style.marginLeft = '-200vw';
        document.getElementById('pointer3').classList.add('active');
    }
}

function changeSlideTeam(slide){
    const sliders = document.querySelector('.sliders-team');

    const pointers = document.querySelectorAll('.pointer-team');

    pointers.forEach(pointer => pointer.classList.remove('active'));

    if(slide === 1){
        sliders.style.marginLeft = '0';
        document.getElementById('pointerT1').classList.add('active');
    }else if(slide === 2){
        sliders.style.marginLeft = '-900px';
        document.getElementById('pointerT2').classList.add('active');
    }else if(slide === 3){
        sliders.style.marginLeft = '-1800px';
        document.getElementById('pointerT3').classList.add('active');
    }
}
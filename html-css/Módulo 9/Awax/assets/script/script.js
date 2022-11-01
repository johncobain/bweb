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

function changeSlideClients(slide){
    const sliders = document.querySelector('.sliders-happy-clients');

    const pointers = document.querySelectorAll('.pointer-happy-clients');

    pointers.forEach(pointer => pointer.classList.remove('active'));

    if(slide === 1){
        sliders.style.marginLeft = '0';
        document.getElementById('pointerC1').classList.add('active');
    }else if(slide === 2){
        sliders.style.marginLeft = '-900px';
        document.getElementById('pointerC2').classList.add('active');
    }else if(slide === 3){
        sliders.style.marginLeft = '-1800px';
        document.getElementById('pointerC3').classList.add('active');
    }
}

function changeSlidePlans(slide){
    const sliders = document.querySelector('.sliders-plans');

    const pointers = document.querySelectorAll('.pointer-plans');

    pointers.forEach(pointer => pointer.classList.remove('active'));

    if(slide === 1){
        sliders.style.marginLeft = '0';
        document.getElementById('pointerP1').classList.add('active');
    }else if(slide === 2){
        sliders.style.marginLeft = '-1140px';
        document.getElementById('pointerP2').classList.add('active');
    }else if(slide === 3){
        sliders.style.marginLeft = '-2280px';
        document.getElementById('pointerP3').classList.add('active');
    }else if(slide === 4){
        sliders.style.marginLeft = '-3420px';
        document.getElementById('pointerP4').classList.add('active');
    }
}

function showMenu(){
    document.querySelector('nav').classList.toggle('show');
}
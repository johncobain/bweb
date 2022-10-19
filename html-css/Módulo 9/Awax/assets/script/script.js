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
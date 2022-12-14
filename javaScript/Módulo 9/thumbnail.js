function mostrar(){
    let imagem = document.getElementById('imagem').files[0];

    // let img = document.createElement('img');
    // img.src = URL.createObjectURL(imagem);
    // img.width = 250;

    // document.getElementById('area').innerHTML = ''
    // document.getElementById('area').appendChild(img);

    let reader = new FileReader();

    reader.onloadend = function(){
        let img = document.createElement('img');
        img.src = reader.result;
        img.width = 250;

        document.getElementById('area').innerHTML = '';
        document.getElementById('area').appendChild(img);
    }

    reader.readAsDataURL(imagem);
}
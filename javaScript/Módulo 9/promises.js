function pegarTemperatura(){
    return new Promise((resolve, reject) =>{
        console.log('pegando temperatura...');

        setTimeout(() => {
            resolve('40 na sombra');
        }, 2000);
    })
}

let temp = pegarTemperatura();
temp
    .then(res=> console.log(`temperatura: ${res}`))
    .catch(error => console.log('Ocorreu um erro: ' + error))
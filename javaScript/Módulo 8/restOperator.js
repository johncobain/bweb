function adicionar(...numeros){
    let soma = 0;
    for(n in numeros){
        soma += numeros[n]
    }
    return soma;
}

console.log(adicionar(5, 6, 7, 8, 9, 10))

function addNomes(nomes, ...novosNomes){
    return [...nomes, ...novosNomes]
}

let nomes = ['John', 'Cookie'];

let outros = addNomes(nomes, 'Júlia', 'Andrey');

console.log(outros);
let numeros = [1,2,3,4];

let outrosN = [...numeros,5,6,7,8];

// console.log(outrosN);

let info = {
    nome:'John',
    sobrenome: 'Cobain',
    idade:17
}

let novaInfo = {
    ...info,
    cidade:'Gavião',
    estado:'Bahia',
    pais:'Brasil'
}

// console.log(novaInfo);

function adicionarInfo(infoFunction){
    let novasInfo ={
        ...infoFunction,
        status:200,
        token:'aksw20fjk96',
        data_cadastro:'20/09/2020'
    }

    return novasInfo
}

console.log(adicionarInfo({nome:'Cookie', sobrenome:'Silva'}));
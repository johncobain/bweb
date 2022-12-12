function alertar(){
    console.log('olá');
}

let nome = 'john';
setTimeout(alertar, 2000);
let sobrenome = 'cobain';
console.log(`Nome completo: ${nome} ${sobrenome}`);



const myFunc = callback =>{
    const value = 77;

    callback(value);
}

myFunc(number => {
    console.log(number);
})
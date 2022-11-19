/*
let nome = 'John';
let nomes = ['John', 'July'];
let personagem = {
    nome: 'John',
    idade: 17,
    pais: 'Brasil',
    olhos: ['preto', 'azul'],
    carros: [
                {modelo: 'Fiat', cor: 'preto'},
                {modelo: 'Ferrari', cor: 'vermelho'}
            ],
    caracteristicas: {
        forca: 20,
        magia: 5,
        stamina: 15
    }
}

console.log(personagem);
console.log(`${personagem.nome} tem ${personagem.idade} anos.`);
console.log('Stamina: ' + personagem.caracteristicas.stamina);
console.log(personagem.olhos[1]);

personagem.nome = 'Cobain';
console.log(personagem.nome);

personagem.caracteristicas.forca += 5;
console.log(`Força: ${personagem.caracteristicas.forca}`);

console.log(personagem.carros[1].modelo);
*/
let pessoa = {
    nome: 'John',
    sobrenome: 'Cobain',
    idade: 17,
    nomeCompleto: function(){
        return `${this.nome} ${this.sobrenome}`
    }
}

console.log(pessoa.nomeCompleto());
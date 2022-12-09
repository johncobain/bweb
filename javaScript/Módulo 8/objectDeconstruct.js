let pessoa = {
    nome: 'John',
    sobrenome: 'Cobain',
    idade: 17,
    social: {
        twitter:'@soalguemsemvida',
        instagram:{
            url:'@_andreygomesbr',
            seguidores: 500
        }
    },

    nomeCompleto: function(){
        return `${this.nome} ${this.sobrenome}`;
    }
        
}

// let nome = pessoa.nome;
// let sobrenome = pessoa.sobrenome;
// let idade = pessoa.idade;
// let twitter = pessoa.social.twitter;

let {nome:pessoaNome, sobrenome, idade = 0, social:{instagram:{url:instagram, seguidores}}} = pessoa;
let {twitter} = pessoa.social;

const pegarNomeCompleto = ({nome, sobrenome}) => `${nome} ${sobrenome}`;



console.log(pessoaNome, sobrenome, idade, twitter, instagram, seguidores);

console.log(pegarNomeCompleto(pessoa));
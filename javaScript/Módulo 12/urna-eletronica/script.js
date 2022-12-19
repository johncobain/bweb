const query = (select)=>document.querySelector(select);

let [seuVotoPara, cargo, numeros, descricao, aviso, lateral] = [query('.d-1-1 span'), query('.d-1-2 span'), query('.d-1-3'), query('.d-1-4'), query('.d-2'), query('.d-1-right')];

let etapaAtual = 0;
let numero = '';
let votoBranco = false;
let votos = [];

const comecarEtapa = () =>{
    let etapa = etapas[etapaAtual];

    let numeroHTML = '';
    numero = ''
    votoBbranco = false

    for(let i = 0; i<etapa.numeros; i++){
        if(i === 0){
            numeroHTML += '<div class="numero pisca"></div>';
        }else{
            numeroHTML += '<div class="numero"></div>';
        }
    }

    seuVotoPara.style.display = 'none';
    cargo.innerHTML = etapa.titulo;
    descricao.innerHTML = '';
    aviso.style.display = 'none';
    lateral.innerHTML = '';
    numeros.innerHTML = numeroHTML;
}

const atualizaInterface = () =>{
    let etapa = etapas[etapaAtual];
    let candidato = etapa.candidatos.filter(item =>{
        if(item.numero === numero){
            return true;
        }else{
            return false;
        }
    });
    if(candidato.length>0){
        candidato = candidato[0];

        seuVotoPara.style.display = 'block';
        descricao.innerHTML = `
            Nome: ${candidato.nome}<br>
            Partido: ${candidato.partido}<br>
        `;
        aviso.style.display = 'block';

        let fotosHtml = '';
        for(let i in candidato.fotos){
            if(candidato.fotos[i].small){
                fotosHtml += `<div class="d-1-image small"> <img src="./images/${candidato.fotos[i].url}">${candidato.fotos[i].legenda}</div>`;
            }else{
                fotosHtml += `<div class="d-1-image"> <img src="./images/${candidato.fotos[i].url}">${candidato.fotos[i].legenda}</div>`;
            }
        }
        lateral.innerHTML = fotosHtml;
    }else{
        seuVotoPara.style.display = 'block';
        aviso.style.display = 'block';
        descricao.innerHTML = `<div class="aviso--grande pisca">VOTO NULO</div>`;
    }
}

const clicou = (n) =>{
    let elNumero = query('.numero.pisca');
    if(elNumero !== null){
        elNumero.innerHTML = n;
        numero = `${numero}${n}`;

        elNumero.classList.remove('pisca');
        if(elNumero.nextElementSibling !== null){
            elNumero.nextElementSibling.classList.add('pisca')
        }else{
            atualizaInterface();
        }
    }
}
const branco = () =>{
    numero = ''
    votoBranco = true;
    seuVotoPara.style.display = 'block';
    aviso.style.display = 'block';
    numeros.innerHTML = ''
    descricao.innerHTML = `<div class="aviso--grande pisca">VOTO EM BRANCO</div>`;
    lateral.innerHTML = '';
}
const corrige = () =>{
    comecarEtapa();
}
const confirma = () =>{
    let etapa = etapas[etapaAtual];
    let votoConfirmado = false;

    if(votoBranco){
        votoConfirmado = true;
        
        votos.push({
            etapa: etapas[etapaAtual].titulo,
            voto: 'branco'
        });
    }else if(numero.length === etapa.numeros){
        votoConfirmado = true
        votos.push({
            etapa: etapas[etapaAtual].titulo,
            voto: numero
        });
    }

    if(votoConfirmado){
        etapaAtual++;
        if(etapas[etapaAtual] !== undefined){
        comecarEtapa();
        }else{
            query('.tela').innerHTML = `<div class="aviso--tela pisca">FIM</div>`;
            console.log(votos);
        }
    }
}

comecarEtapa();
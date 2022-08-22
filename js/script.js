'use strict';

const container = document.getElementById('container')

const sons = {
    'A': 'boom.wav',
    'S': 'clap.wav',
    'D': 'hihat.wav',
    'F': 'kick.wav',
    'G': 'openhat.wav',
    'H': 'ride.wav',
    'J': 'snare.wav',
    'K': 'tink.wav',
    'L': 'tom.wav',
}

const criarDiv = (texto) => {
    const div = document.createElement('div')
    div.classList.add('key')
    div.textContent = texto
    div.id = texto
    document.querySelector('#container').appendChild(div)
}
                                            //forEach varre todos elementos do array e vai criar uma div pra cada
const exibirSons = (sons) => {
    /*console.log*/Object.keys(sons).forEach(criarDiv)  //Me retorna um array com todas as keys

}

const tocarSom = (letra) => {
    const audio = new Audio(`./sons/${sons[letra]}`)
    audio.play()
}

const adicionarEfeito = (letra) => {
    document.getElementById(letra)
            .classList.add('active')
}

const removerEfeito = (letra) => {
    const div = document.getElementById(letra)
    const removeActive = () => div.classList.remove('active')
    div.addEventListener('transitionend', removeActive) //qaundo o efeito de transiçao acabr vai remover a class active
}


const ativarDiv = (evento) => {

    const letra = evento.type == 'click' ? evento.target.id : evento.key.toUpperCase();
    
    const letraPermitida = sons.hasOwnProperty(letra);
    if (letraPermitida){
        adicionarEfeito(letra);
        tocarSom(letra);
        removerEfeito(letra);
    }
}

exibirSons(sons);
document.getElementById('container')
        .addEventListener('click', ativarDiv);

window.addEventListener('keyup',ativarDiv);
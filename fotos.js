const vaga = document.querySelector('#fotos');


const direita = vaga.querySelector('.direita');
const esquerda = vaga.querySelector('.esquerda');
const caritel = vaga.querySelector('.caritel');


let max = (vaga.querySelectorAll('img').length-1) * -vaga.querySelector('.slider').clientWidth

let enrolar = 0

direita.addEventListener('click',function(){
    enrolar+=vaga.querySelector('.slider').clientWidth
    if(enrolar >= 0){
        enrolar = 0
    }
    caritel.style.transform=`translateX(${enrolar}px)`
    max = (vaga.querySelectorAll('img').length-1) * -vaga.querySelector('.slider').clientWidth
})
esquerda.addEventListener('click',function(){
    enrolar-=vaga.querySelector('.slider').clientWidth
    if(enrolar <= max){
        enrolar = max
    }
    caritel.style.transform=`translateX(${enrolar}px)`
    max = (vaga.querySelectorAll('img').length-1) * -vaga.querySelector('.slider').clientWidth
})

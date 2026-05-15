const btnToggleTheme = document.getElementById('btnToggleTheme');
const heroTitle = document.querySelector('.hero-principal h2');
const heroImage = document.querySelector('.hero-imagem img');
const originalTitle = heroTitle.innerText;

const imagensCarrossel = [
    { src: './images/logo.png', alt: 'Logo do Site BoostBOT' },
    { src: './images/ia.png', alt: 'Imagem dos pilares da IA' },
    { src: './images/robot.svg', alt: 'Robô de IA' },
    { src: './images/server.svg', alt: 'Servidor em nuvem' },
    { src: './images/processing.svg', alt: 'Processamento de dados' }
];

let indiceImagemAtual = 0;

function pedirNome() {
    const nome = prompt('Digite seu nome para o BoostBOT lhe reconhecer:');
    if (nome && nome.trim() !== '') {
        const nomeLimpo = nome.trim();
        heroTitle.innerText = `Olá, ${nomeLimpo}!`;
        alert(`Olá, ${nomeLimpo}! Bem-vindo ao BoostBOT.`);
    } else {
        heroTitle.innerText = originalTitle;
    }
}

function trocarTema() {
    document.body.classList.toggle('dark-theme');
}

function iniciarCarrossel() {
    setInterval(() => {
        indiceImagemAtual = (indiceImagemAtual + 1) % imagensCarrossel.length;
        heroImage.src = imagensCarrossel[indiceImagemAtual].src;
        heroImage.alt = imagensCarrossel[indiceImagemAtual].alt;
    }, 3000); 
}

window.addEventListener('DOMContentLoaded', () => {
    pedirNome();
    btnToggleTheme.addEventListener('click', trocarTema);
    iniciarCarrossel();
});

//Esta função faz o funcionamento dos link de rolagem da pagina
const menuHeader = document.querySelectorAll('.link-princ a[href^="#"]');
// console.log(menuHeader);

menuHeader.forEach(item => {
    item.addEventListener('click', (scrollToOnClick));
    // console.log(item);
});

const header = document.querySelector('.cabecalho');
// const navLink = document.querySelector('.nav-links').offsetTop;

function scrollToOnClick(event) {
    event.preventDefault();
    const element = event.target;
    const id = element.getAttribute('href');
    const selecionado = document.querySelector(id).offsetTop;
    // if (selecionado >= 200) {
    //     console.log(selecionado)
    //     header.className = "js-cabecalho";
    // } else {
    //     header.className = "cabecalho";
    // }
    window.scroll({
        top: selecionado,
        behavior: "smooth",
    });
}

//Por aqui estou setando a imagem de familia
const img = document.createElement("img");
img.src = "../img//imgs-familia/family.jpg";
document.querySelector('.imagens').appendChild(img);

// data-anima efeito de entrada de pagina quem sou eu.
const elementos = document.querySelectorAll("[data-anima]");
const animacaoClass = 'animacao';

function animaScroll() {
    const topoPagina = window.pageYOffset + 500
    elementos.forEach(function (elemento) {
        if (topoPagina > elemento.offsetTop) {
            elemento.classList.add(animacaoClass)
        } else {
            elemento.classList.remove(animacaoClass);
        }
    })
}
if (elementos.length) {
    window.addEventListener('scroll', function () {
        animaScroll();
    })
}

window.addEventListener("scroll", function (voltarTop) {
    voltarTop = document.querySelector("header");
    voltarTop.classList.toggle('js-cabecalho', window.scrollY > 200);
});

//Altera o nome do titulo
function mudarNome() {
    document.getElementById("logo-principal").innerText = "Tecnologia e Inovação";
}
function voltarNome() {
    document.getElementById("logo-principal").innerText = "TecNove"
}
function verTexto() {
    document.getElementById("txt-certificado").innerText = "click nos Links";
}
function sumirTexto() {
    document.getElementById("txt-certificado").innerText = "Certificados"
}

// Criação de carrossel para rodar os certificados

var imgs = [];
var slider;
var imgAtual;
var maxImage;
var tmp;

function preCarregamento() {
    let c = 10;
    for (let i = 10; i < 46; i++) {
        imgs[i] = new Image();
        imgs[i].src = "../img/imgs-certificados/c" + c + ".png";
        c++
    }
}

function carregarImg(img) {
    slider.style.backgroundImage = "url('" + imgs[img].src + "')"
}

function iniciar() {
    preCarregamento();
    imgAtual = 10;
    maxImage = imgs.length - 1;
    let certificado = document.createElement("img");
    slider = document.querySelector('#slide').appendChild(certificado);
    carregarImg(imgAtual);
    tmp = setInterval(trocaImg, 3000);
}

function trocaImg() {
    imgAtual++;
    if (imgAtual > maxImage) {
        imgAtual = 10;
    }
    carregarImg(imgAtual);
}

function pararSlide() {
    clearInterval(tmp);
}

function moverSlide() {
    tmp = setInterval(trocaImg, 3000);
}

window.addEventListener("load", iniciar);



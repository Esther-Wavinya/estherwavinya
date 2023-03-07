function toggleTheme() {
    const body = document.querySelector("body");
    const icon = document.getElementById("icon");
    if (body.className === 'dark') {
        body.className = 'light'
        icon.className = 'fa fa-moon-o'
    }
    else {
        body.className = 'dark'
        icon.className = 'fa fa-sun-o'
    }
}


const burger = document.getElementById('burger');
const ul = document.querySelector('nav ul');
const homeAnchor = document.getElementById('home-anchor');
const skillAnchor = document.getElementById('skill-anchor');
const eduAnchor = document.getElementById('edu-anchor');
const expAnchor = document.getElementById('exp-anchor');
const projAnchor = document.getElementById('proj-anchor');
const openAnchor = document.getElementById('open-anchor');
const contaAnchor = document.getElementById('conta-anchor');


burger.addEventListener('click', () => {
    ul.classList.toggle('show');
})

homeAnchor.addEventListener('click', () => {
    ul.classList.toggle('show');
})
skillAnchor.addEventListener('click', () => {
    ul.classList.toggle('show');
})
eduAnchor.addEventListener('click', () => {
    ul.classList.toggle('show');
})
expAnchor.addEventListener('click', () => {
    ul.classList.toggle('show');
})
projAnchor.addEventListener('click', () => {
    ul.classList.toggle('show');
})
openAnchor.addEventListener('click', () => {
    ul.classList.toggle('show');
})
contaAnchor.addEventListener('click', () => {
    ul.classList.toggle('show');
})
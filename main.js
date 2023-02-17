class Video{
    constructor(title,channel,views,time,linkChannel, linkVideo){
        this.title = title;
        this.channel = channel;
        this.views = views;
        this.time = time;
        this.linkChannel = linkChannel;
        this.linkVideo = linkVideo;
    }
}

const blackpink = new Video( "BLACKPINK - ‘Pink Venom’ M/V", "BLACKPINK","500M de vistas","• hace 5 meses", "https://www.youtube.com/channel/UCOmHUn--16B90oW2L6FRR3A", "https://www.youtube.com/watch?v=gQlMMD8auMs")

const shakira = new Video( "Shakira - Te Aviso, Te Anuncio (Tango) (Official)", "Shakira","288M de vistas", "• hace 13 años", "https://www.youtube.com/channel/UCYLNGLIzMhRTi6ZOLjAPSmw", "https://www.youtube.com/watch?v=8C6xDjQ66wM")

const programadorX = new Video ( "El Escritorio de un DESARROLLADOR WEB", "Programador X", "37.285 de vistas", "• hace 8 meses", "https://www.youtube.com/@ProgramadorX", "https://www.youtube.com/watch?v=yu9HI6J5LxM")

const fazt = new Video("Astro, Una Forma moderna de crear sitios Web", "Fazt", "40.316 de vistas", "• hace 2 meses", "https://www.youtube.com/@FaztTech", "https://www.youtube.com/watch?v=yNd9ZBtP-cg")

const twice = new Video( "TWICE 'CRY FOR ME' Choreography - 2", "TWICE", "130M de vistas", "• hace 2 años", "https://www.youtube.com/channel/UCzgxx_DM2Dcb9Y1spb9mUJA", "https://www.youtube.com/watch?v=bkQw-F1QTq4")
    
const ice = new Video( "BLACKPINK - 'Ice Cream (with Selena Gomez)' M/V", "BLACKPINK", "815M de vistas", "• hace 2 años", "https://www.youtube.com/channel/UCOmHUn--16B90oW2L6FRR3A", "https://www.youtube.com/watch?v=vRXZj0DzXIA")
    
const money = new Video( "LISA - 'MONEY' EXCLUSIVE PERFORMANCE VIDEO", "BLACKPINK", "763M de vistas", "• hace 1 año", "https://www.youtube.com/channel/UCOmHUn--16B90oW2L6FRR3A", "https://www.youtube.com/watch?v=dNCWe_6HAM8")

const mon = new Video( "Mon Laferte - Amárrame / Pa´Dónde Se Fue (En Vivo)", "Mon Laferte", "500M de vistas", "• hace 5 meses", "https://www.youtube.com/channel/UCn51E6eKnnLklWOcdFT3w5A", "https://www.youtube.com/watch?v=9XyiBI53LZ0")

const pvCard = document.querySelector('#pinkvenom-card');
const taCard = document.querySelector('#teaviso-card');
const escCard = document.querySelector('#escritorio-card');
const astroCard = document.querySelector('#astro-card');
const cryCard = document.querySelector('#cry-card');
const iceCard = document.querySelector('#ice-card');
const moneyCard = document.querySelector('#money-card');
const amaCard = document.querySelector('#amarrame-card');

pvCard.innerHTML = `<a class="ft-weight" 
    href="${blackpink.linkVideo}" title="${blackpink.title}">
    <span>${blackpink.title}</span></a><br><br><br>
    <a class="ft-weight" href="${blackpink.linkChannel}" title="${blackpink.channel}">
    <span class=ft-weight>${blackpink.channel}</span></a>
    <span>${blackpink.views}</span>
    <span>${blackpink.time}</span>`

taCard.innerHTML = `<a class="ft-weight" 
    href="${shakira.linkVideo}" title="${shakira.title}">
    <span>${shakira.title}</span></a><br><br>
    <a class="ft-weight" href="${shakira.linkChannel}" title="${shakira.linkChannel}">
    <span class=ft-weight class=ft-weight>${shakira.channel}</span></a>
    <span>${shakira.views}</span>
    <span>${shakira.time}</span>`

escCard.innerHTML = `<a class="ft-weight" 
    href="${programadorX.linkVideo}" title="${programadorX.title}">
    <span>${programadorX.title}</span></a><br><br>
    <a class="ft-weight" 
    href="${programadorX.linkChannel}" title="${programadorX.channel}">
    <span class="ft-weight">${programadorX.channel}</span></a>
    <span>${programadorX.views}</span>
    <span>${programadorX.time}</span>`

astroCard.innerHTML = `<a class="ft-weight" 
    href="${fazt.linkVideo}" title="${fazt.title}">
    <span>${fazt.title}</span></a><br><br>
    <a class="ft-weight" href="${fazt.linkChannel}" title="${fazt.channel}">
    <span class="ft-weight">${fazt.channel}</span></a>
    <span>${fazt.views}</span>
    <span>${fazt.time}</span>`

cryCard.innerHTML = `<a class="ft-weight" 
    href="${twice.linkVideo}" title="${twice.title}">
    <span>${twice.title}</span></a><br><br><br>
    <a class="ft-weight" href="${twice.linkChannel}" title="${twice.channel}">
    <span class="ft-weight">${twice.channel}</span></a>
    <span>${twice.views}</span>
    <span>${twice.time}</span>`

iceCard.innerHTML = `<a class="ft-weight" 
    href="${ice.linkVideo}" title="${ice.title}">
    <span>${ice.title}</span></a><br><br>
    <a class="ft-weight" href="${ice.linkChannel}" title="${ice.channel}">
    <span class="ft-weight">${ice.channel}</span></a>
    <span>${ice.views}</span>
    <span>${ice.time}</span>`

moneyCard.innerHTML = `<a class="ft-weight " 
    href="${money.linkVideo}" title="${money.title}">
    <span>${money.title}</span></a><br><br>
    <a class="ft-weight" href="${money.linkChannel}" title="${money.channel}">
    <span class="ft-weight">${money.channel}</span></a>
    <span>${money.views}</span>
    <span>${money.time}</span>`

amaCard.innerHTML = `<a class="ft-weight" 
    href="${mon.linkVideo}" title="${mon.title}">
    <span>${mon.title}</span></a><br><br>
    <a class="ft-weight" href="${mon.linkChannel}" title="${mon.channel}">
    <span class="ft-weight">${mon.channel}</span></a>
    <span>${mon.views}</span>
    <span>${mon.time}</span>`

function itemOverOn(){
    document.querySelector('#item-one').classList.add('grid-over');
    document.querySelector('#item-two').classList.add('grid-over');
    document.querySelector('#item-three').classList.add('grid-over');
    document.querySelector('#item-for').classList.add('grid-overight');
    document.querySelector('#item-five').classList.add('grid-over');
    document.querySelector('#item-six').classList.add('grid-over');
    document.querySelector('#item-seven').classList.add('grid-over');
    document.querySelector('#item-eight').classList.add('grid-overight');                
}

let opc = document.querySelector('.options');
let nav = document.querySelector('#navegation-window-content');
opc.addEventListener('click', () =>{
    if (Object.entries(nav.style.display).length==0)
        nav.style.display = "none";

    nav.style.display == "none" ? nav.style.display = "block"
        : nav.style.display = "none"
})

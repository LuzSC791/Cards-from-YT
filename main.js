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

const pvCard = document.getElementById('pinkvenom-card');
const taCard = document.getElementById('teaviso-card');
const escCard = document.getElementById('escritorio-card');
const astroCard = document.getElementById('astro-card');
const cryCard = document.getElementById('cry-card');
const iceCard = document.getElementById('ice-card');
const moneyCard = document.getElementById('money-card');
const amaCard = document.getElementById('amarrame-card');

const flexButton = document.getElementById('flex-button');

pvCard.innerHTML = `<span>${blackpink.title}</span><br>
    <span>${blackpink.channel}</span>
    <span>${blackpink.views}</span>
    <span>${blackpink.time}</span>`
taCard.innerHTML = `<span>${shakira.title}</span><br><br>
    <span>${shakira.channel}</span>
    <span>${shakira.views}</span>
    <span>${shakira.time}</span>`
escCard.innerHTML = `<span>${programadorX.title}</span><br><br>
    <span>${programadorX.channel}</span>
    <span>${programadorX.views}</span>
    <span>${programadorX.time}</span>`
astroCard.innerHTML = `<span>${fazt.title}</span><br><br>
    <span>${fazt.channel}</span>
    <span>${fazt.views}</span>
    <span>${fazt.time}</span>`
cryCard.innerHTML = `<span>${twice.title}</span><br><br>
    <span>${twice.channel}</span>
    <span>${twice.views}</span>
    <span>${twice.time}</span>`
iceCard.innerHTML = `<span>${ice.title}</span><br><br>
    <span>${ice.channel}</span>
    <span>${ice.views}</span>
    <span>${ice.time}</span>`
moneyCard.innerHTML = `<span>${money.title}</span><br><br>
    <span>${money.channel}</span>
    <span>${money.views}</span>
    <span>${money.time}</span>`
amaCard.innerHTML = `<span>${mon.title}</span><br><br>
    <span>${mon.channel}</span>
    <span>${mon.views}</span>
    <span>${mon.time}</span>`

    document.getElementById('flex-button').style.display('none')


function itemOverOn(){
    document.getElementById('item-one').classList.add('grid-over');
    document.getElementById('item-two').classList.add('grid-over');
    document.getElementById('item-three').classList.add('grid-over');
    document.getElementById('item-for').classList.add('grid-overight');
    document.getElementById('item-five').classList.add('grid-over');
    document.getElementById('item-six').classList.add('grid-over');
    document.getElementById('item-seven').classList.add('grid-over');
    document.getElementById('item-eight').classList.add('grid-overight');        
        
}

// function muestraBtn(){
//     const btn = document.getElementById("flex-button");
//     const btn2 = document.getElementById("flex-buttonTwo");
    
//     block(btn);
//     block(btn2);

//     function block(btn){
//         // if (btn.style.display === "none")
//             btn.style.display = "block";
//     }
// }


// function itemOverOff(){      

//     const btn = document.getElementById("flex-button");
//     const btn2 = document.getElementById("flex-buttonTwo");
    
//     block(btn);
//     block(btn2);

//     function block(btn){
//         // if (btn.style.display === "none")
//             btn.style.display = "none";
//     }
        
// }
        

    








console.log('carousel')
// ARRAY DI OGGETTI
const images = [
    {
        image: './img/01.webp',
        title: 'Marvel\'\s Spiderman Miles Morale',
        text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
    }, {
        image: './img/02.webp',
        title: 'Ratchet & Clank: Rift Apart',
        text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
    }, {
        image: './img/03.webp',
        title: 'Fortnite',
        text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
    }, {
        image: './img/04.webp',
        title: 'Stray',
        text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
    }, {
        image: './img/05.webp',
        title: "Marvel's Avengers",
        text: 'Marvel\'\s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
    }
];

const carosello = document.querySelector('.carosello');
// CREO UNA VARIABILE DI COLLEGAMENTO 	
let caroselloHtml = '';
// IMPOSTO IL MIO INDICE
let indiceSlideAttiva = 0;
// UTILIZZO IL FOR utilizzando il  forEach
images.forEach(function (image, index) {
    let classeAttiva = '';
    if (index === indiceSlideAttiva) {
        classeAttiva = 'active';
    }
	// HTML DEGLI OGGETTI USANDO IL LITERAL
    caroselloHtml += `
        <div class="slide ${classeAttiva}">
            <img src="${image.image}" alt="${image.title}">
            <h3 class="relative-title">${image.title}</h3>
            <p class="relative-text">${image.text}</p>
        </div>
    `;
});
// HTML ELEMENTO DI COLLEGAMENTO 
carosello.innerHTML = caroselloHtml;

const slideElements = document.querySelectorAll('.carosello .slide');
const rightBtnElement = document.querySelector('.arrow-general.arrow-right');
const leftBtnElement = document.querySelector('.arrow-general.arrow-left');

rightBtnElement.addEventListener('click',nextSlide)
leftBtnElement.addEventListener('click',leftSlide)

function nextSlide() {
    console.log('current slide', indiceSlideAttiva);
    if (indiceSlideAttiva < 4) {

        let slideCorrente = slideElements[indiceSlideAttiva];
		// togliendo la classe active
        slideCorrente.classList.remove('active');
		// inremento l'indice
        indiceSlideAttiva += 1;
        let prossimaSlide = slideElements[indiceSlideAttiva];
		// aggiungiamo la classe active alla seconda slide
        prossimaSlide.classList.add('active');
        console.log('next slide', indiceSlideAttiva);
		// LOOP
    }else{
		let slideCorrente = slideElements[indiceSlideAttiva];
        slideCorrente.classList.remove('active');
        indiceSlideAttiva = 0;
        let prossimaSlide = slideElements[indiceSlideAttiva];
        prossimaSlide.classList.add('active');
        console.log('next slide', indiceSlideAttiva);
	}
	
};

function leftSlide() {
    console.log('current slide', indiceSlideAttiva);
    if (indiceSlideAttiva > 0) {

        let slideCorrente = slideElements[indiceSlideAttiva];
		// togliendo la classe active
        slideCorrente.classList.remove('active');
		// inremento l'indice
        indiceSlideAttiva -= 1;
        let prossimaSlide = slideElements[indiceSlideAttiva];
		// aggiungiamo la classe active alla seconda slide
        prossimaSlide.classList.add('active');
        console.log('next slide', indiceSlideAttiva);
		
    } // LOOP
	else{
		let slideCorrente = slideElements[indiceSlideAttiva];
        slideCorrente.classList.remove('active');
        indiceSlideAttiva = 4;
        let prossimaSlide = slideElements[indiceSlideAttiva];
        prossimaSlide.classList.add('active');
        console.log('next slide', indiceSlideAttiva);
	}
	
};



let autoplay = setInterval(nextSlide,3000)
console.log(autoplay)

carosello.addEventListener('mouseenter',()=>{
    console.log('muose enter')
    clearInterval(autoplay)
    autoplay = undefined
})
carosello.addEventListener('mouseleave',()=>{
    console.log('mouse leave')
    autoplay=setInterval(nextSlide,3000)
})
    
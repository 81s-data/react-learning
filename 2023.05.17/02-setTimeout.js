// setTimeout()
// exécuter un code au bout de X temps (en milisecondes)

console.log('ONE');
setTimeout(() => {
    console.log('TWO');
}, 1500);
console.log('THREE');

// ECRIRE UN CODE QUI FAIT CLIGNOTER LE H1

const blinkTitle = () => {
    let time = 0;
    for (let i = 0; i < 50; i++) {
        setTimeout(() => {
            document.querySelector('h1').classList.toggle('hide');
        }, time += 100);
    }
};

// blinkTitle();

// setInterval()
// exécute un code à intervalle régulier

// let intervalID = setInterval(() => {
//     document.querySelector('h1').classList.toggle('hide');
// }, 100);

// clearInterval() permet d'arrêter l'exécution de setInterval()
// cette fonction prend en paramètre l'ID renvoyé par setInterval()

document.querySelector('h1').onclick = () => {
    clearInterval(intervalID);
};

// FAIRE UNE SIMULATION DE MACHNE DE CASINO
// 4 IMAGES | 1 BOUTON POUR LANCER LA PARTIE | 1 BOUTON POUR ARRETER CHAQUE IMAGE

let images = ['full-moon.png', 'images.jpeg', 'sun.png'];

let randomImage1;
let randomImage2;
let randomImage3;

document.getElementById('launch-btn').onclick = () => {
    randomImage1 = setInterval(() => {
        document.getElementById('image1').src = images[Math.floor(Math.random() * (images.length))];
    }, 300);
    randomImage2 = setInterval(() => {
        document.getElementById('image2').src = images[Math.floor(Math.random() * (images.length))];
    }, 300);
    randomImage3 = setInterval(() => {
        document.getElementById('image3').src = images[Math.floor(Math.random() * (images.length))];
    }, 300);
};

let currentImage = 0;

document.getElementById('stop-btn').onclick = () => {
    switch(currentImage) {
        case 0: clearInterval(randomImage1);
                currentImage++;
                break;
        case 1: clearInterval(randomImage2);
                currentImage++;
                break;
        case 2: clearInterval(randomImage3);
                currentImage++;
                break;
        default: currentImage = 0;
    }
};
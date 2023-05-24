Date(); // --> 'Tue May 16 2023 12:08:23 GMT+0200 (heure d’été d’Europe centrale)';

// création d'un ojet Date
let today = new Date();

today.getFullYear(); // --> 2023
today.getDay(); // --> 2 (1er jour : dimanche = 0)
today.getMonth(); // --> 4
today.toLocaleDateString(); // --> '16/05/2023'
today.toLocaleString(); // --> 16/05/2023 12:10:07

// passer des options en paramètres à la méthode toLocaleDateString();
let options = {
    weekday: 'long', // et pas weakday
    year: 'numeric',
    month: 'long',
    day: 'numeric'
}

console.log(today.toLocaleDateString('fr', options)); // --> mardi 16 mai 2023
console.log(today.toLocaleString('fr', options)); // --> mardi 16 mai 2023 - Ne pas oublier le premier paramètre
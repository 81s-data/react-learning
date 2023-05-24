document.querySelector('img').getAttribute('src'); // --> 'https://picsum.photos/800/600'
document.querySelector('img').src; // --> 'https://picsum.photos/800/600'
document.querySelector('img').alt = 'nouveau contenu alternatif'; // --> 'https://picsum.photos/800/600'

// supprimer une attribut
document.querySelector('h1').removeAttribute('title');

// switcher un attribut (required - hidden - disabled)
document.querySelector('img').toggleAttribute('hidden');

// recupérer les informations css
document.querySelector('h1').style.backgroundColor; // --> '' car uniquement dans le style
document.querySelector('h1').style.color; // --> ''

// consulter TOUTES les déclarations de style d'un élément
let h1 = document.querySelector('h1');
getComputedStyle(document.querySelector('h1')).backgroundColor; // --> rgb(55, 55, 55)'
getComputedStyle(document.querySelector('h1')).color; // --> 'rgb(245, 245, 245)'

// modifier les informations css
document.querySelector('h1').style.backgroundColor = 'firebrick';

// ajouter du style via une classe

document.querySelector('p').classList.add('goodAnswer');
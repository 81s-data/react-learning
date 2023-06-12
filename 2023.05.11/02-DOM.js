// Document Object Model : version de la page HTML affichée par le navigateur

// point d'entrée du DOM : l'objet document

// exemples

document.URL; // --> 'http://127.0.0.1:5500/11.05.2023/02-DOM.html';
document.title; // --> 'Le DOM'
document.head; // --> <head></head>
document.body; // --> <body></body>

// une propriété permet de consulter ou modifier une information

document.title = 'Nouveau titre';

// accéder aux éléments

//querySelector fonctionne avec la totalité des selecteurs CSS
//cette méthode ne renvoie que le 1er élément correspondant au sélecteur
document.querySelector('h1');

document.getElementById('btn-create');

// querySelectorAll() fonctionne avec la totalité des sélecteurs CSS
// cette méthode renvoie la liste de tous les éléments correspondant au sélecteur CSS
document.querySelectorAll('p'); // --> [p, p, p]

// consulter ou modifier le texte d'un élément

let mainTitle = document.querySelector('h1');
mainTitle.textContent = 'TITRE MODIFIE EN JAVASCRIPT';


// consulter ou modifier le texte d'un élément
console.log(document.querySelector('div.account-controls').innerHTML);
// --> <button id='btn-create'>Create account</button>
//     <button id='btn-delete'>Delete account</button>

// ajouter un élément au DOM

let h2 = document.createElement('h2');
h2.textContent = 'H2 CREE EN JAVASCRIPT';

// ajouter un élément en premier enfant du conteneur sélectionné
document.querySelector('main').prepend(h2);


let h3 = document.createElement('h3');
h3.textContent = 'Espace Client';

// ajouter un élément en dernier enfant du conteneur sélectionné
document.querySelector('main').append(h3);

let header = document.createElement('header');
document.querySelector('main').before(header);
let footer = document.createElement('footer');
document.querySelector('main').after(footer);

// AJOUTER UNE LISTE D'ELEMENTS APRES LE H1

let languages = ['HTML', 'CSS', 'JavaScript'];

let ul = document.createElement('ul');
// ul.setAttribute('class', 'languagesList'); inutile pour cet exo

for (let i = 0; i < languages.length; i++) {
    // let li = document.createElement('li');
    // li.textContent = languages[i];
    // document.querySelector('ul.languagesList').append(li); ==> ul.append(li);

    ul.innerHTML += `<li> ${languages[i]} </li>`;
}

document.querySelector('h1').append(ul);
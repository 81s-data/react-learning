
const colors = ['#00ffff', '#ffc400', '#1aff00', '#ff00bf'];

const buttons = document.querySelectorAll('button:not(.btn-reset)');

for (let i=0; i<buttons.length; i++) {
    buttons[i].style.backgroundColor = colors[i];
    buttons[i].onclick = displayFiltredDiv;
}

/*

::  ETAPE 1  ::

- injecter dans <div class="colors"></div> une quarantaine de div
- chaque div a une des 4 couleurs du tableau

*/

const getRandomColor = () => Math.floor(Math.random() * colors.length);

// donner la couleur aux 4 boutons et leur attacher une fonction à exécuter au click
for (let i=0; i<40; i++) {
    let div = document.createElement('div');
    div.classList.add('colorDiv');
    div.style.backgroundColor = colors[getRandomColor()];
    document.querySelector('.colors').append(div);
}


/*

::  ETAPE 2  ::

Quand on clique sur un des boutons de couleur, il ne reste que les divs de la même couleur que le bouton

*/


// récupérer toutes les divs de couleur du DOM
const allColorDivs = [...document.getElementsByClassName('colorDiv')];

function displayFiltredDiv(event) {

    // supprimer toutes les divs
    document.querySelector('.colors').innerHTML = '';

    // afficher uniquement les divs de la couleur du bouton cliqué
    allColorDivs.filter( item => item.style.backgroundColor === event.target.style.backgroundColor )
                .map( item => document.querySelector('.colors').append(item) )    

}


/*

::  ETAPE 3  ::

Quand on clique sur le bouton reset, toutes les divs sont à nouveau affichées

*/

document.querySelector('.btn-reset').onclick = function() {
    allColorDivs.forEach(item => document.querySelector('.colors').append(item))
}
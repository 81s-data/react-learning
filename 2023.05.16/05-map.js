let towns = ['Tunis', 'Bangkok', 'Toronto', 'Venice'];

// forEach
let upperTowns = [];
towns.forEach(function(item) {
    upperTowns.push(item.toUpperCase());
});
upperTowns; // --> ['TUNIS', 'BANGKOK', 'TORONTO', 'VENICE']

// map()
// renvoie le tableau après l'application de la fonction

// let lowerTowns = towns.map(item => {
//     return item.toLowerCase() return obligatoire si accolades { }
// });

// sinon
let lowerTowns = towns.map(item => item.toLowerCase()); // -->
lowerTowns; // --> ['tunis', 'bangkok', 'toronto', 'venice']

// filter()
// renvoie le tableau après le filtre
let iTowns = towns.filter(item => item.includes('i')); // --> ['Tunis', 'Venice']

towns.filter(item => item.includes('i')).map(item => item.toUpperCase()); // --> ['TUNIS', 'VENICE']

// some()
// renvoie true si au moins un des éléments respecte une condition

towns.some(item => item.includes('i')); // --> true
towns.some(item => item.includes('z')); // --> false

// every()
// renvoie true si tous les éléments respecte une condition

towns.every(item => item.includes('i')); // --> false

// sort()
// permet de trier des données (selon les tables ASCII)
// MODIFIE LE TABLEAU DE BASE
// [1, 4, 2, 8, 6].sort() --> [1, 2, 4, 6, 8]
// [400, 1, 2000].sort() --> [1, 2000, 400] --> ET1

// sort((a, b) => a - b)
[400, 1, 2000].sort((a, b) => a - b); // --> [1, 400, 2000] --> gg
[400, 1, 2000].sort((a, b) => b - a); // --> [2000, 400, 1] --> ordre décroissant

let array = ['pomme', 'ABRICOT', 'MANGUE', 'kiwi'];
['pomme', 'ABRICOT', 'MANGUE', 'kiwi'].sort(); // --> ['ABRICOT', 'MANGUE', 'kiwi', 'pomme'] --> pas bon

['pomme', 'ABRICOT', 'MANGUE', 'kiwi'].sort((a, b) => a.localeCompare(b)); // --> ['ABRICOT', 'kiwi', 'MANGUE', 'pomme']


// reduce( (acc, curr) => )
// acc = accumulator
// curr = current

[2, 3, 4, 5].reduce((acc, curr) => acc * curr); // --> 2*3*4*5 = 120
// récupère le produit final des multiplications de tous les éléments du tableau

// const multReducer = (acc, curr) => {
//     return acc * curr;
// };

const multReducer = (acc, curr) => acc * curr;

// on peut ajouter un paramètre pour donner une valeur par défaut à l'accumulateur

[2, 3, 4, 5].reduce(multReducer, 100); // --> 100*2*3*4*5 = 12000

// EXERCICE //

const villes = ['Berlin', 'Mexico', 'Paris', 'Toronto', 'Miami', 'Jakarta'];

// en majuscules
// pas de ville avec la lettre o
// par ordre alphabétique
// commence par ALGER
// avec un tiret entre chaque ville
// --> 'ALGER-BERLIN-JAKARTA-MIAMI-PARIS'

const trierVillesReducer = () => {
    return villes.filter(item => !item.includes('o'))
                    .map(item => item.toUpperCase())
                    .sort()
                    .reduce((acc, curr) => `${acc}-${curr}`, 'ALGER')
};

console.log(villes.reduce(trierVillesReducer, 'Alger'));

// const trierVilles = villes => {
//     villes.unshift('Alger');
//     return villes.filter(item => !item.includes('o'))
//         .map(item => item.toUpperCase())
//             .sort((a, b) => a.localeCompare(b))
//                 .join('-')
// }

// console.log(trierVilles((villes)));
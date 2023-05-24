let array = ['javascript', 'react', 'node'];

array.length; // --> 3

// pop() supprime le dernier élément du tableau
// renvoie l'élément supprimé
array.pop(); // --> array = ['javascript', 'react'] et renvoie 'node'

// push() ajoute un élément à la suite du tableau
// renvoie la nouvelle taille du tableau
array.push('node'); // --> ['javascript', 'react', 'node'] et renvoie 3

// shift() enlève le premier élément du tableau
// renvoie l'élément supprimé
array.shift(); // --> ['react', 'node'] et renvoie 'javascript'

// unshift() ajoute un élément au début du tableau
// renvoie la nouvelle taille du tableau
array.unshift('javascript'); // --> ['javascript', 'react', 'node'] et renvoie 3


// includes()
['🍌', '🍈', '🍑'].includes('🍌'); // --> true
['🍌', '🍈', '🍑'].includes('🍌', 1); // --> false

// indexOf()
['🍌', '🍈', '🍑'].indexOf('🍈'); // --> 1
['🍌', '🍈', '🍑'].indexOf('🍈', 2); // --> -1

// slice(start, end) start inclu et end exclu
['🍌', '🍈', '🍑'].slice(0,1); // --> ['🍌']


// splice()
// le tableau d'origine est modifié

// 1er paramètre: index du début
// 2eme paramètre: nombre d'éléments à supprimer
// 3eme paramètre: éléments à ajouter

['🍌', '🍈', '🍑'].splice(0,2); // --> fruitsArray = ['🍑'] et renvoie ['🍌', '🍈']
['🍌', '🍈', '🍑'].splice(1,2); // --> fruitsArray = ['🍌'] et renvoie ['🍈', '🍑']

let vegetables = ['🍄', '🥑', '🌽', '🌶️', '🍆'];

vegetables.splice(2,0,'🥦'); // --> ['🍄', '🥑', '🥦', '🌽', '🌶️', '🍆']

vegetables.splice(0, 2); // --> ['🥦', '🌽', '🌶️', '🍆']

// join(separator) transforme un tableau en chaîne de caractères

let towns = ['Tunis', 'Bangkok', 'Toronto'];
towns.join(); // --> 'Tunis,Bangkok,Toronto'
towns.join(' '); // --> 'Tunis Bangkok Toronto'

let arr1 = [0, 1, 2];
let arr2 = [3, 4, 5];

let arr3 = [...arr1, ...arr2]; // --> [0, 1, 2, 3, 4, 5]
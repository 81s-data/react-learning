// * Opérateur d'assignation: =

// * Opérateurs arithmétiques
// - + / * ** %
// % : modulo => récupérer le reste d'une division

// on peut combiner les assignations et opérateurs arithmétiques

let userScore = 10;

userScore = userScore + 5; // --> 15
userScore += 5; // --> 20
userScore *= 2; // --> 40

let compteur = 0;
compteur += 1; // --> 1
compteur++; // --> 2
compteur--; // --> 1
++compteur; // --> 2

// concaténation : mettre bout à bout des chaines de caractères

let userFirstName = 'Jon';
let userLastName = 'Doe';

let userFullName = userFirstName + ' ' + userLastName; // --> 'Jon Doe'
let userAge = 35;

let password = 12 + 'xxx' + 45;

// CREER UNE CHAINE DE CARACTERES : 'Bonjour je m'appelle Jon Doe. J'ai 35 ans, bientôt 36.'

let presentation = 'Bonjour je m\'appelle ' + userFullName + '. J\'ai ' + userAge + ' ans, bientôt '+ ++userAge +'.';

let presentation2 = `Bonjour je m'appelle ${userFullName}. J'ai ${userAge} ans, bientôt ${++userAge}.`;
 
// * Opérateurs de comparaison

// > >= < <=

// vérifier l'égalité des valeurs: == 

8 == '8'; // --> true

// vérifier l'égalité des valeurs et des types: ===

8 === '8'; // --> false

// vérifier l'inégalité des valeurs: !=

8 != '8' // --> false

// vérifier l'inégalité des valeurs et des types: !=

8 !== '8' // --> true
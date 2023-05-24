// * créer une variable
let myVariable;

// * assigner une valeur à une variable
myVariable = 'contenu de la variable';

/*

! IL EST INTERDIT POUR NOMMER UNE VARIABLE DE :
    
    - commencer par un chiffre
    - pas de caractères spéciaux à part: _ et $
    - être un mots-clef

! IL EST OBLIGATOIRE POUR NOMMER UNE VARIABLE DE :
    
    - être le plus explicite possible
    
TECHNIQUES D'ECRITURE :

    - camelCase : newUserPassword
    - snake_case : new_user_password

! Valeurs "falsy"
    
    - false
    - 0
    - ''
    - NaN
    - undefined
    - null 

*/

let userName = 'Filip';

// * TYPES DE DONNEES

// string: chaîne de caractères
// Entre guillemets simples ou doubles

let presentation = 'je m\'appelle Filip';

// template strings : backticks : ``

// number

let userAge = 35;
userAge = userAge + 1;

let userHeight = 1.75;

// bigInt: très gros chiffre

// boolean: true ou false (sans guillemets)

let isUserLogged = false;

// undefined: quand une variable est vide

// is not defined: quand on essaie d'utiliser une variable qui n'existe pas

// null: fait le plus souvent référence à un élément mal ciblé

// object

let newUser = { 
    nom: 'Filip',
    age: 35
};

// array (tableau)
let towns = ['Paris', 'Barcelone', 'Agadir'];
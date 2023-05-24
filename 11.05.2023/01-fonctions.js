// * nommer une fonction :

// createPassword !== cPassword
// --> checkPassword

function sayHello() {
    console.log('Hello World');
}

// * appeler la fonction
sayHello();

// * utiliser des paramètres

function addNums(num1, num2) {
    return num1 + num2;
}

console.log(addNums(1, 1));
console.log(addNums(1, 1, 1)); // Si plus de paramètres que prévus sont données, les paramètres supplémentaires sont ignorés

// * rest parameters

function getAllParams(...args) {
    return args;
}

console.log(getAllParams(10, 20, 'machin'));

function addOddNums1(...args) {
    let res = 0;
    for (const arg of args) { // const fonctionne car arg est réinitialisée à chaque tour de boucle et qu'on n'assigne pas de valeur
        if ((arg % 2) !== 0) {
            res = res + arg;
        }
    }
    return res;
}

function addOddNums2() {
    let res = 0;
    for (const arg of arguments) {
        if ((arg % 2) !== 0) {
            res = res + arg;
        }
    }
    return res;
}

console.log('addOddNums1: ' + addOddNums1(1,10,3,5,12));
console.log('addOddNums2: ' + addOddNums2(1,10,3,5,12));

// * l'instruction return permet à une fonction de renvoyer une donnée pour pouvoir l'utiliser directement ou la stocker

function multNums(num1,num2) {
    return num1 * num2;
}

let result = multNums(10,2);

// * la fonction promp contient un return qui renvoie ce qui est saisi dans l'input

// utiliser directement la donnée renvoyée
// console.log('Bonjour ' + prompt('quel est votre nom ?'));

// stocker la donnée renvoyée
// let userName = prompt('quel est votre nom ?');

// * fonction fléchée

const sayHi = () => {
    // return `Hi ${prompt('Quel est votre nom ?', 'George')}`;
}

console.log(sayHi());

// si la fonction n'utilise qu'un seul paramètre, les parenthèses peuvent être enlevées
// si la fonction ne possède qu'une seule instruction, les accolades peuvent être enlevées
const welcomeUser = userName => console.log('Hi ' + userName);

welcomeUser('Jon');

// si la seule instruction de la fonction est un return il n'y a pas besoin d'utiliser le mot-clef return
const getUserName = (userName) => userName;

// CREER UNE FONCTION FLECHEE QUI PREND UN NOMBRE EN PARAMETRE
// CETTE FONCTION RENVOIE TRUE SI LE NOMBRE EST PLUS GRAND QUE 100
// ET RENVOIE FALSE DANS LE CAS CONTRAIRE

const above100 = num => num > 100;

let numTest = 23;

console.log(`Est-ce que ${numTest} est plus grand que 100 ? => ${above100(numTest)}`);
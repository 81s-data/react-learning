'word'.length; // --> 4

'word'[0]; // --> 'w'

for (const letter of 'object') {
    console.log(letter);
}

console.log('word'.includes('ord', 1)); // --> true
console.log('word'.includes('oR', 1)); // --> false
console.log('word'.includes('ord', 2)); // --> false

// indexOf()

'freedom'.indexOf('d'); // --> 4
'freedom'.indexOf('d', 2); // --> 4 car le sert à dire "à partir"
'freedom'.indexOf('z') // --> -1

// toLowerCase()
// toUpperCase()

// slice(start, end) start inclu et end exclu
'JavaScript is awesome'.slice(4,10); // --> 'Script'
'JavaScript is awesome'.slice(-7); // --> 'awesome'

// replace()
console.log('coding is quite hard'.replace('is quite', 'is not'));

// replaceAll()
console.log('avoid-kebab-case'.replaceAll('-', ' ')); // --> avoid kebab case

// avec des expressions régulières
let text = 'Mr Blue has a blue car and a blue house';
console.log(text.replaceAll(/blue/gi, 'red')); // --> g = global (toutes les occurences) et i = insensitive (ignore la casse)

// split()
console.log('javascript'.split('')); // --> ['j', 'a', 'v', 'a', 's', 'c', 'r', 'i', 'p', 't']
console.log([...'javascript']); // -->['j', 'a', 'v', 'a', 's', 'c', 'r', 'i', 'p', 't']
let words = text.split(' ');
console.log(words); // --> ['Mr', 'Blue', 'has', 'a', 'blue', 'car', 'and', 'a', 'blue', 'house']

// ECRIRE UNE FONCTION QUI VERIFIE SI UN MOT TERMINE PAR UN 'S' (MAJUSCULE OU MINUSCULE)

const endsWithS = word => word.slice(-1).toLowerCase() === 's';
const endsWithS2 = word => word[word.length-1].toLowerCase() === 's';

console.log("test endsWithS: " + endsWithS('ok'));
console.log("test endsWithS: " + endsWithS('okS'));
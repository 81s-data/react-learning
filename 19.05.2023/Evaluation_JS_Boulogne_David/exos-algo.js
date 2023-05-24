const fizzBuzz = () => {
    for (let i = 0; i < 51; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            console.log('fizzbuzz');
        }
         else if (i % 3 === 0) {
            console.log('fizz');
        } else if (i % 5 === 0) {
            console.log('buzz');
        } else {
            console.log(i);
        }
    }
};

const fizzBuzzTer = () => {
    for (let i = 0; i <= 50; i++) {
        (i % 3 === 0 && i % 5 === 0) ? console.log('fizzbuzz') :
            (i % 3 === 0) ? console.log('fizz') :
                (i % 5 === 0) ? console.log('buzz') : console.log(i);
    };
};

const fizzBuzzString = () => {
    for (let i = 0; i <= 50; i++) {
        let magicWord = '';
        if (i % 3 === 0) magicWord = 'fizz';
        if (i % 5 === 0) magicWord += 'buzz';
        // if (magicWord === '') magicWord = i;
        console.log(magicWord || i);
    }
};
// TEST
// fizzBuzz();
// fizzBuzzTer();
fizzBuzzString();


const getMax = (num1, num2) => {
    return num1 > num2 ? num1 : num2;
};

const getMaxCorr = (...numbers) => {
    let max = numbers[0];
    for (const number of numbers) {
        if (number > max) {
            max = number;
        }
    }
    return max;
};

// TEST
// let num1 = 10;
// let num2 = 5;
// console.log(`Le plus grand nombre entre ${num1} et ${num2} est ${getMaxCorr(num1, num2, 20, 11, 4)}`);
console.log('getMaxCorr: ' + getMaxCorr(1, 100, 4, 16));


const guessNumber = () => {
    let randomNumber = Math.floor(Math.random() * (50 - 10 + 1) + 10);
    let answer = window.prompt('Devinez le nombre entre 10 et 50');
    while (parseInt(answer) !== randomNumber) {
        if (parseInt(answer) < randomNumber) {
            answer = window.prompt('C\'est plus ! Essayez encore');
        } else {
            answer = window.prompt('C\'est moins ! Essayez encore');
        }
    }
    window.alert('Félicitations')
};
// TEST
// guessNumber(); // flemme des popups


const palindrome = word => {
    // return word.slice(0, word.length/2) === word.slice(word.length/2, word.length-1).split().reverse().join();
    let firstSlice = word.length % 2 === 0 ? word.slice(0, word.length/2) : word.slice(0, word.length/2 + 1);
    let secondSlice = word.slice(word.length/2, word.length).split('').reverse().join('');
    return firstSlice === secondSlice;
}; // Compliqué pour rien, il suffit de parcourir le mot dans le sens inverse.

const palindromeSimpleCorr = word => {
    let reversedWord = word.split('').reverse().join('');
    return word === reversedWord;
};

const palindromeSimpleCorr2 = word => {
    let reversedWord = '';
    for (let i = word.length - 1; i >= 0; i--) {
        reversedWord += word[i];
    }
    return reversedWord === word;
};

const palindromeSimpleCorr3 = word => {
    let reversedWord = [];
    for (let letter of word) {
        reversedWord.unshift(letter);
    }
    console.log("reversedWord: " + reversedWord);
    return reversedWord.join('') === word;
};

// TEST
let word = 'kayak';
// console.log(`est-ce que ${word} est un palindrome ? ${palindrome(word) ? 'oui' : 'non'}`);
console.log(`est-ce que ${word} est un palindrome ? ${palindromeSimpleCorr(word) ? 'oui' : 'non'}`);
console.log(`est-ce que ${word} est un palindrome ? ${palindromeSimpleCorr2(word) ? 'oui' : 'non'}`);
console.log(`est-ce que ${word} est un palindrome ? ${palindromeSimpleCorr3(word) ? 'oui' : 'non'}`);


const capitalizeWords = sen => {
    // const arr = sen.toLowerCase().split(' ');
    // for (let i = 0; i < arr.length; i++) {
    //     arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
    // }
    // const sen2 = arr.join(' ');
    // return sen2;
    return sen.toLowerCase().split(' ').map(item => item.charAt(0).toUpperCase() + item.slice(1)).join(' ');
};

const capitalizeWords2 = sen => {
    let finalSentence = '';
    sen = sen.toLowerCase().split(' ');
    for (const word of sen) {
        finalSentence += word[0].toUpperCase() + word.slice(1) + ' ';
    }
    return finalSentence;
};

// TEST
let sen = 'je vEuX GaGneR aU lOtO';
console.log(`Modif de la phrase '${sen}' : '${capitalizeWords(sen)}'`);
console.log(`Modif de la phrase '${sen}' : '${capitalizeWords2(sen)}'`);
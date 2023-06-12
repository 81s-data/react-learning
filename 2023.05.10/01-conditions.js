let userAge = 16;

if (userAge >= 18) {
    // instructions appliquées uniquement si le contenu de la parenthèse est true
    console.log('Vous pouvez entrer');
} else {
    // instructions appliquées si le contenu est false
    console.log('Vous ne pouvez pas entrer');
}

let temperature = -2;
let message = '';

/*

Prévoir plusieurs messages possibles :
    - Si moins de 0
    - entre 0 et 10
    - entre 10 et 20
    - entre 20 et 30
    - au dessus de 30

*/
if (temperature/'a' !== NaN) {
    console.log('bv');
}
if (typeof temperature === 'number') {
    console.log('bvbv');
}
if (temperature < 0) {
    message = 'moins de 0';
} else if (temperature >= 0 && temperature < 10) {
    message = 'entre 0 et 10';
} else if (temperature >= 10 && temperature < 20) {
    message = 'entre 10 et 20';
} else if (temperature >= 20 && temperature < 30) {
    message = 'entre 20 et 30';
} else {
    message = 'plus de 30';
}

console.log("info température: " + message);


/* 
    * Le Switch 
*/

let weather = "";
switch(true) {
    case temperature < 0: weather = "🌨️";
        break; 
    case temperature >= 0 && temperature < 10: weather = "🌧️";
        break;
    case temperature >= 10 && temperature < 20: weather = "☁️";
        break;
    case temperature >= 20 && temperature < 30: weather = "⛅"
        break;
    default: weather = "☀️";
}

switch(weather) {
    case '☀️': message = "😍";
        break; 
    case '🌧️': message = "😞";
        break;
    case '⛅': message = "😀";
        break;
    case '☁️': message = "😐";
        break;
    case '🌨️': message = "😨"
        break;
    default: message = "🤔";
}

console.log("info température emoji: " + message);

switch(true) {
    case temperature < 0 : message = 'moins de 0';
        break; 
    case temperature >= 0 && temperature < 10: message = 'entre 0 et 10';
        break;
    case temperature >= 10 && temperature < 20: message = 'entre 10 et 20';
        break;
    case temperature >= 20 && temperature < 30: message = 'entre 20 et 30';
        break;
    default: message = 'plus de 30';
}

console.log("info température switch: " + message);

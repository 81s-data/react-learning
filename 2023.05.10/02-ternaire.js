let userAge = 15;
let message = '';

// if (userAge < 18) {
//     message = 'mineur';
// } else {
//     message = 'majeur';
// }


userAge < 18 ? message = 'mineur' : message = 'majeur'; // --> mineur
// ou plutôt
message = userAge < 18 ? 'mineur' : 'majeur';
console.log(message);
// valeur falsy
userAge = 0
message = userAge ? 'mineur' : 'majeur' // --> majeur
console.log("valeur falsy: " + message);

temperature < 0 ? message = 'moins de 0' : 
temperature >= 0 && temperature < 10 ? message = 'entre 0 et 10': 
temperature >= 10 && temperature < 20 ? message = 'entre 10 et 20':
temperature >= 20 && temperature < 30 ? message = 'entre 20 et 30':
message = 'plus de 30';
// ou plutôt

message = temperature < 0 ? 'moins de 0' :
    temperature <= 10 ? 'entre 0 et 10':
        temperature < 20 ? 'entre 10 et 20':
            temperature < 30 ? 'entre 20 et 30': 'plus de 30';
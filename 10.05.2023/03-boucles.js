let count = 0;

while (count < 10) {
    console.log(count);
    count++;
}

for (let i = 0; i < count; i++) {
    console.log(i);
}

let towns = ['Paris', 'Barcelone', 'Agadir'];

for (let i = 0; i < towns.length; i++) {
    console.log(towns[i]);
}

for (let town of towns) {
    console.log(town);
}

let fruits = ['🍌', '🍏', '🥝', '🍓', '🍍'];

for (let fruit of fruits) {
    console.log(fruit);
    if (fruit === '🥝') {
        console.log('siuuu');
        break;
    }
}
let fruit;
for (let i = 0; fruit !== '🥝' && i < fruits.length; i++) {
    fruit = fruits[i];
    console.log(fruit);
}

// On enlève le kiwi du tableau physiquement
// on parcourt le tableau :
// si le kiwi est présent on l'affiche (juste le kiwi pas les autres fruits)
// si le kiwi est absent on affiche UNE SEULE FOIS un message 'il n'y a pas de kiwi'

let isKiwi = false;
for (let fruit of fruits) {
    if (fruit === '🥝') {
        isKiwi = true;
        console.log(fruit);
    }
}
if(!isKiwi) console.log('il n\'y a pas de kiwi1');

for (let i = 0; i < fruits.length; i++) {
    if (fruits[i] === '🥝') {
        console.log(fruits[i]);
        break;
    }
    if (i === fruits.length - 1) {
        console.log('il n\'y a pas de kiwi2');
    }
}
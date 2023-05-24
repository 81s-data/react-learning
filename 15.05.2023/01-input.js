// document.getElementById('userName').addEventListener('input', function(event) {
//     console.log(event.target.value);
// })
// document.getElementById('password').addEventListener('input', function() {
//     console.log('jsuis pas la');
// })
// document.getElementById('userLevel').addEventListener('input', function(event) {
//     console.log(event.target.value);
// })

// récupérer la liste de tous les inputs
let inputs = document.querySelectorAll('input');

// faire une boucle sur la liste pour accéder à chacun des inputs
for (const input of inputs) {
    
    console.log(input.id);

    // attacher un écouteur d'événements sur chaque input
    input.addEventListener('input', event => {
        console.log(event.target.id, event.target.value);
    })
}

// inputs.map(item => console.log(item)); --> erreur
[...inputs].map(item => console.log("map log: " + item.value));

// SI INPUT TYPE COLOR : APPLIQUER LA COULEUR RECUPEREE SUR LE BACKGROUND DU BODY

[...inputs].map((item) => {
    item.addEventListener('input', e => {
        if (e.target.type === 'color') document.body.style.backgroundColor = e.target.value;
    })
});
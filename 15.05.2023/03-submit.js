document.querySelector('input[type="submit"]').addEventListener('click', function(event) {
    event.preventDefault(); // annule les actions par défaut (ici chargement automatique)
    console.log('formaire envoyé1');
});

document.querySelector('button').addEventListener('click', function(event) {
    event.preventDefault();
    console.log('formaire envoyé2');
});

// PLUTOT

document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault();
    console.log('formaire envoyé3');
});

// Event Handler

document.getElementById('eventHandler').onclick = function() {
    console.log('click');
};

function checkClick () {
    console.log('click');
}

function checkClick2 () {
    console.log('autre click');
}
// Difference entre Listeners et Handlers
document.getElementById('eventHandler').addEventListener('click', checkClick);
document.getElementById('eventHandler').addEventListener('click', checkClick2); // --> click autre click

document.getElementById('eventHandler').onclick = checkClick;
document.getElementById('eventHandler').onclick = checkClick2; // --> autre click


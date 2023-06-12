/* 

* dans un prompt, demander le prénom de l'utilisateur
* si un prénom est saisi dans le prénom, afficher dans le h1 : Bonjour + prénom
* si rien n'est saisi, reposer la question

* */

function askFirstName() {
    let firstName;
    do {
        firstName = window.prompt('Comment tu t\'apelles ?');
    } while (firstName === '' || firstName === null)
    console.log(firstName);
    document.querySelector('h1.title').innerText = `Bonjour ${firstName}`;
}

// En recursion

function askFirstNameRec (firstName) {
    if (firstName) {
        document.querySelector('h1').innerText = `Bonjour ${firstName}`;
    } else {
        askFirstNameRec (window.prompt('Comment tu t\'apelles'));
    }
}

// Recursion ternaire

const askFirstNameRec2 = firstName => firstName ? document.querySelector('h1').innerText = `Bonjour ${firstName}` : askFirstNameRec2(window.prompt('Comment tu t\'apelles ?'));

askFirstName();
// askFirstNameRec('');
// askFirstNameRec2('');
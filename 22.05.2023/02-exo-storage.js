/*

quand on arrive sur la page : 

- soit la personne a déjà donné son nom la dernière fois
    --> <h2> Bonjour - nom - !<h2>
        (pas d'input d'affiché)
    --> mode sombre activé ou pas 
        (pas de checkbox affichée)

- soit la personne n'est jamais venue
    --> <input type="text" placeholder="Jon Doe">
        <input type="checkbox" name="darkMode" id="darkMode">
        <label for="darkMode">Mode Nuit ou pas ?</label>

*/

if (localStorage.user) {
    document.querySelector('div').innerHTML = '';
    document.querySelector('div').innerHTML = `<h2> Bonjour ${JSON.parse(localStorage.user).name} </h2>`;
    if (JSON.parse(localStorage.user).darkMode) {
        document.body.classList.add('darkMode');
    }
} else {
    document.querySelector('button').onclick = () => {
        let userName = document.querySelector('input[type="text"]').value;
        if (userName === '') {
            document.querySelector('span').innerText = 'Le champ Nom ne peut pas être vide';
            document.querySelector('span').style.color = 'red';
        } else {
            let darkMode = document.querySelector('input[type="checkbox"]').checked;
            let newUser = {
                name: userName,
                darkMode: darkMode
            };
            localStorage.user = JSON.stringify(newUser);
            location.reload(); // rafraichit la page
        }
    }
}
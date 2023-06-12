// Semi correction

document.getElementById('pseudo').addEventListener('input', function(event) {
    if (event.target.value > 3 && event.target.value <= 10) {
        event.target.classList.remove('invalid');
        event.target.classList.add('valid');
        document.querySelector('.pseudo').innerHTML = ''; // Selectionner une classe ne pas oublier le .
    } else {
        event.target.classList.remove('valid');
        event.target.classList.add('invalid');
        document.querySelector('.pseudo').innerHTML = '<i></i>'; // message erreur
    }
});

document.getElementById('email').addEventListener('input', function(event) {
    
});

document.getElementById('pseudo').addEventListener('input', function(event) {
    
});

document.getElementById('pseudo').addEventListener('input', function(event) {
    
});

document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault();
    let inputs = [...document.querySelectorAll('input')];
    if (inputs.every(item => item.value.length > 0 && item.className.includes('valid'))) {
        Swal.fire(
            'Bien joué!',
            // `Merci pour tes logs ${pseudo.value} 🤑`, ne fonctionne pas avec les ``
            'Merci pour tes logs 🤑',
            'success'
        );
    } else {
        Swal.fire({
            icon: 'error',
            title: errorText
        });
    }
});

const checkData = (value, id) => {
    let errorMessage = '';
    if (id === 'pseudo') {
        errorMessage = (value.length > 3 && value.length <= 10) ? 'Minimum 3 caractères et maximum 3 caractères' : '';
    }
    if (id === 'email') {
        let mailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        errorMessage = (mailRegex.test(value)) ? 'Merci de renseigner un mail valide' : '';
    }
    if (id === 'password') {
        errorMessage = (value.length >= 8 && value.toLowerCase() !== value && /\d/.test(value)) ? 'Mot de passe érroné' : '';
    }
    if (id === 'password2') {
        errorMessage = (value > 3 && value <= 10) ? 'Mots de passe non identiques' : '';
    }

    if (errorMessage !== '') {

    } else {

    }
};
let errorType = 0;

let progressBar = document.getElementById('progress_bar');

// Tests des champs

const isValidPseudo = pseudo => {
    return pseudo.length >= 3 && pseudo.length <= 10;
};

const isValidEmail = email => {
    return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);
};

const isValidPassword = password => {
    return password.length >= 8 && password.toLowerCase() !== password && /\d/.test(password);
};

const isSecondPasswordValid = (password1, password2) => {
    return password1 === password2;
};

// Messages durant la saisie

pseudo.oninput = () => {
    if (!isValidPseudo(pseudo.value)) {
        pseudoMessage.innerText = 'pseudo non valide';
        pseudoMessage.classList.remove('valid');
        pseudoMessage.classList.add('invalid');
    } else {
        pseudoMessage.innerText = 'OK';
        pseudoMessage.classList.remove('invalid');
        pseudoMessage.classList.add('valid');
    }
};

email.oninput = () => {
    if (!isValidEmail(email.value)) {
        emailMessage.innerText = 'email non valide';
        emailMessage.classList.remove('valid');
        emailMessage.classList.add('invalid');
    } else {
        emailMessage.innerText = 'OK';
        emailMessage.classList.remove('invalid');
        emailMessage.classList.add('valid');
    }
};

password2.oninput = () => {
    if (!isSecondPasswordValid(password.value, password2.value)) {
        password2Message.innerText = 'mots de passe différents';
        password2Message.classList.remove('valid');
        password2Message.classList.add('invalid');
    } else {
        password2Message.innerText = 'OK';
        password2Message.classList.remove('invalid');
        password2Message.classList.add('valid');
    }
};

// Barre de progression mot de passe

password.oninput = () => {
    if (!isValidPassword(password.value)) {
        progressBar.style.width = '33%';
        progressBar.style.backgroundColor = '#bd0404';
    } else if (isValidPassword(password.value) && password.value.length <= 10) {
        progressBar.style.width = '66%';
        progressBar.style.backgroundColor = '#f27602';
    } else {
        progressBar.style.width = '100%';
        progressBar.style.backgroundColor = '#109e17';
    }
};

// Validation du formulaire

document.getElementById('loginForm').onsubmit = () => {
    let errorText = '';
    if (isValidPseudo(pseudo.value) && isValidEmail(email.value)
            && isValidPassword(password.value)
                && isSecondPasswordValid(password.value, password2.value)) {
        Swal.fire(
            'Bien joué!',
            // `Merci pour tes logs ${pseudo.value} 🤑`, ne fonctionne pas avec les ``
            'Merci pour tes logs 🤑',
            'success'
        );
        // mise à jour de errorType dans des if
    } else {
        switch (errorType) {
            case 1 : errorText = 'Pseudo invalide';
            break;
            case 2 : errorText = 'email invalide';
            break;
            case 3 : errorText = 'Mot de passe invalide';
            break;
            case 4 : errorText = 'Les mots de passes doivent être les mêmes';
            break;
            default: break;
        }
        Swal.fire({
            icon: 'error',
            title: errorText
        });
    }
    errorType = 0;
};
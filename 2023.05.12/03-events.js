document.querySelector('button').addEventListener('click', function(event) {
    console.log('click');
    console.log(event);
    console.log(this); // this représente la page
})

// Event Handler (mieux)

document.getElementById('eventHandler').onclick = function() {
    console.log('click');
};

document.querySelector('button:nth-of-type(2)').addEventListener('click', (event) => {
    console.log(event.target);
    console.log(this);
})

function createAccount () {
    console.log('compte créé');
}

// document.getElementById('createAccount').addEventListener('click', createAccount()); va appeler createAccount sans le click
document.getElementById('createAccount').addEventListener('click', createAccount);
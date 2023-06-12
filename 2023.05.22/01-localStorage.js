// stocker une donnée dans le local storage du navigateur
localStorage.setItem('data1', 'valeur de data1');

localStorage.data2 = 'valeur de data2';

// accéder à une donnée
localStorage.data2;

localStorage.getItem('data2');

// supprimer une donnée du local storage
localStorage.removeItem('data2');

// supprimer toutes les données du local storage
localStorage.clear();

// stocker des objets

let user = {
    name: 'Eric',
    age: 23
};

localStorage.setItem('user1', user); // --> Dans le localStorage : [Object object]

// Transformer en format JSON
localStorage.user1 = JSON.stringify(user); // --> Dans le localStorage : {"name":"Antoine","age":23}

// récupérer en JS
console.log(JSON.parse(localStorage.user1));

JSON.parse(localStorage.getItem('user1')).age; // --> 23
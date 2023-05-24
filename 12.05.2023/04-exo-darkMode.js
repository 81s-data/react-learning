// document.getElementById('btn-activate').addEventListener('click', function(event){
//     if (event.target.mode !== null) {
//         if (event.target.mode === 'light') {
//             document.body.style.backgroundColor = 'black';
//             document.body.style.color = 'white';
//             event.target.mode = 'dark';
//             document.querySelector('img').src = 'sun.png';
//         } else {
//             document.body.style.backgroundColor = 'white';
//             document.body.style.color = 'black';
//             event.target.mode = 'light';
//             document.querySelector('img').src = 'full-moon.png';
//         }
//     }
// }); TROLLONS

document.getElementById('btn-darkMode').addEventListener('click', (event) => {
    document.body.classList.toggle('darkMode');
    if (event.target.alt === 'icone lune') {
        event.target.src = 'sun.png';
        event.target.alt = 'icone soleil';
    } else {
        event.target.src = 'full-moon.png';
        event.target.alt = 'icone lune';
    }
});
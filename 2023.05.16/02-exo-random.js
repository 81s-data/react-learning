// AFFICHER UNE IMAGE CHOISIE ALEATOIREMENT
// EXERCICE PEU REALISTE CAR LES IMAGES SONT COTE SERVER EN PROD

document.getElementById('displayBtn').onclick = () => {
    let images = ['full-moon.png', 'images.jpeg', 'sun.png'];
    let rand = Math.floor(Math.random() * images.length);
    console.log(rand);
    document.getElementById('pageImage').src = images[rand];
}
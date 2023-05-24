// exemples propriétés et méthodes de l'objet Math
Math.PI;
Math.cos(12);
Math.sin(12); // --> 
Math.pow(4, 5); // --> 1024

// méthodes pour arrondir un nombre

// Math.round() arrondit au nombre le plus proche
Math.round(10.3); // --> 10
Math.round(10.8); // --> 11

// Math.ceil() arrondir au dessus
Math.ceil(10.3); // --> 11
Math.ceil(10.8); // --> 11

// Math.floor() arrondir au dessus
Math.floor(10.3); // --> 10
Math.floor(10.8); // --> 10

// Math.trunc() supprimer la décimale
Math.trunc(10.345); // --> 10
Math.trunc(10.845); // --> 10

// Math.min()
Math.min(1,2) // --> 1

// Math.max()
Math.max(1,2) // --> 2

// Math.random() génère un nombre aléatoire entre  0 (inclus) et 10 (exclu)
Math.random() * 10;

// pour générer un nombre dans un interval 
Math.floor(Math.random() * (max - min + 1) + min); // + 1 pour pouvoir atteindre la valeur maximale à cause de floor

// entre 20 et 50
Math.floor(Math.random() * (50 - 20 + 1) + 20);
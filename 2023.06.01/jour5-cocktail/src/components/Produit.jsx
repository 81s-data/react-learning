import React from 'react';

const Produit = ({title, image, description, ingredients, mesures}) => {
    return <article>
        <h3>{title}</h3>
        <img src={image} alt={description} />
        <p>{description}</p>
        Ingrédients
        <ul>
        </ul>
    </article>
};
export default Produit;
import React from 'react'

const Produit = ({title, thumbnail, description, price, ajouterPanier}) => {
    return <article>
        <h2>{title}</h2>
    <img src={thumbnail}></img>
    <p>{description}</p>
    <p>{price}€</p>
    <button onClick={() => ajouterPanier({ title , price })}>ajouter au panier</button>
    </article>
};
export default Produit;
import React from 'react';

const Panier = ({panier, supprimerPanier}) => {
    return <div>
        <h2>Votre panier</h2>
        <ul>
        {panier.length === 0 ? 'Votre panier est vide' :
            panier.map(({title, price, qte}, key) => {
                return <li key={key}>{title} : {price}€ - <button onClick={() => supprimerPanier(title)}>Supprimer</button></li>
            })
        }
        </ul>
        <p>Total: </p>
    </div>

};
export default Panier;
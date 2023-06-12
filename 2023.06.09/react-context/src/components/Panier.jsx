import React, { useContext } from 'react'
import { PanierContext } from '../context/PanierContext';

function Panier() {

    const {panier, supprimerArticle} = useContext(PanierContext);

    return (
        <div className='col'>
            <h2>Panier</h2>
            {panier.map((item, key) => {
                return <div key={key}>
                    <h5>{item.nom}</h5>
                    <p>{item.prix}</p>
                    <p>Quantité : {item.qte}</p>
                    <button onClick={() => supprimerArticle(item.id)} className='btn btn-danger'> Supprimer </button>
                </div>
            })}
            <div>Total: </div> {/** à finaliser */}
        </div>
    )
}

export default Panier
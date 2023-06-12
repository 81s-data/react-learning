import React, {useEffect, useState, useContext} from 'react'
import { PanierContext } from '../context/PanierContext';

function Catalogue() {

    const [catalogue, setCatalogue] = useState([])

    const { ajouterArticle } = useContext(PanierContext);

    useEffect(() => {
        setCatalogue([
            {id : 1 , nom : "PS4" , prix : 500},
            {id : 2 , nom : "Nintendo DS" , prix : 600}
        ])
    }, [])

    return (
        <div>
            <h2>Catalogue</h2>
            {catalogue.map((item, key) => {
                return <article key={key}>
                <h2>{item.nom}</h2>
                <p>{item.prix}</p>
                <button onClick={() => ajouterArticle(item)} className='btn btn-success me-3'> Ajouter </button>
            </article>
            })}
             
        </div>
    )
}

export default Catalogue
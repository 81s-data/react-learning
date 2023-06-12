import React, { useState, useEffect } from 'react';
import './Exo1.css';
import Panier from './Panier';
import Produit from './Produit';

const Exo1 = () => {

    const [catalogue, setCatalogue] = useState([]);
    const [panier, setPanier] = useState([]);

    useEffect(function() {
        fetch('https://dummyjson.com/products')
        .then(response => response.json())
        .then(({products}) => {
            const data = products.map(({title, thumbnail, description, price}) => {
                return {
                    title, 
                    thumbnail, 
                    description, 
                    price}
            })
            setCatalogue(data);
        })
    }, [])

    const ajouterPanier = produit => {
        const clonePanier = structuredClone(panier);

        const produitAAjouter = clonePanier.find(function(item){
            return item.title === produit.title
        })

        if(produitAAjouter){
            const index = clonePanier.indexOf(produitAAjouter);
            clonePanier[index].qte++
        }else {
            clonePanier.push({...produit, qte : 1});
        }

        setPanier(clonePanier); 
    };

    const supprimerPanier = title => {
        const clonePanier = structuredClone(panier);
        
        const produitASupprimer = clonePanier.find(item => {
            return item.title === title;
        });

        const index = panier.indexOf(produitASupprimer);

        clonePanier.splice(index, 1);

        setPanier(clonePanier);
    };

    return <div>
        < Panier panier={panier} supprimerPanier={supprimerPanier}/>
        <section className='exo1'>
        {catalogue.map(({title, thumbnail, description, price}) => {
            return <Produit
                        title={title}
                        thumbnail={thumbnail}
                        description={description}
                        price={price}
                        ajouterPanier={ajouterPanier}/>
        })}
        </section>
    </div>
}
export default Exo1;
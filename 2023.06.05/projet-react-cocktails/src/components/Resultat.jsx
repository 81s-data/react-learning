import React from 'react'
import Produit from './Produit';

function Resultat({resultat , filtre}) {
  return (
    <div style={{ display : "grid" , gridTemplateColumns : "repeat(3,1fr)", gap : "10px"}}>
        <h2 style={{ gridColumn : "1/-1" }}>Resultat</h2>
        { resultat.filter(function(item){
            // recherche n'importe où dans le titre 
            //return item.strDrink.toLowerCase().includes(filtre)
            // recherche tout ce qui commence par 
            const regex = new RegExp(`^${filtre}`, 'i');
            return item.strDrink.toLowerCase().match(regex)
        }).map(function(cocktail, key){
            return <Produit key={key} cocktail={cocktail} />
        }) }
    </div>
  )
}

export default Resultat
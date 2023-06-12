// rfce
import React, {useState} from 'react'
import Compteur from './Compteur'

function Sommaire() {

  const [compteurs, setCompteurs] = useState([
    {nb: 30, couleur: '#ED116B', id: 1},
    {nb: 3, couleur: '#3413A1', id: 2},
    {nb: 23, couleur: '#4411ED', id: 3},
  ]);

  let augmenter = id => {
    const cloneCompteurs = structuredClone(compteurs);
       // rechercher dans le tableau 
       const compteurAModifier = cloneCompteurs.find(function(item){ // find renvoie l'item alors que filter renvoie un tableau
        return item.id === id
       })
       // récupérer la position
       const index = cloneCompteurs.indexOf(compteurAModifier)
       // modification => augmentation
       cloneCompteurs[index].nb++;
       // efectue la mise à jour du state
       setCompteurs(cloneCompteurs); // A besoin d'un tableau qui a une référence mémoire différente pour être exécutée
  };

  let diminuer = id => {
    const cloneCompteurs = structuredClone(compteurs);
       const compteurAModifier = cloneCompteurs.find(function(item){
        return item.id === id
       })
       const index = cloneCompteurs.indexOf(compteurAModifier)
       cloneCompteurs[index].nb--;
       setCompteurs(cloneCompteurs);
  };

  return (
    <div>
        <h2>Sommaire</h2>
        {compteurs.map(({nb, couleur, id}, key) => {
          return < Compteur 
                      nb={nb} 
                      couleur={couleur} 
                      key={key}
                      id={id}
                      augmenter={augmenter}
                      diminuer={diminuer}/>
        })}
        {/* <Compteur nb={10} couleur={'#00FF00'}/>
        <Compteur nb={0} couleur={'#B3C890'}/>
        <Compteur nb={15} couleur={'#73A9AD'}/> */}
    </div>
  )
}

export default Sommaire;
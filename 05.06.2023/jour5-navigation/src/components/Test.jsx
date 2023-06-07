import React , {useState, useEffect} from 'react'
function Test() {

    // Exemple d'utilisation de useEffect avec variable

    const [recherche, setRecherche] = useState("")
    const [resultat, setResultat] = useState([])
    useEffect(function(){
        if(recherche.length === 0 ) return ; 
        const cloneResultat = [...resultat]; // <-- clone tableau
        cloneResultat.push("nouvelle recherche suite à la modification de l'input")
        setResultat(cloneResultat)
    } , [recherche]) // <----
    function change(e){
        setRecherche(e.target.value)
    }
  return (
    <div>
        <input type="text" onChange={ change  } value={recherche} />
        <pre>{JSON.stringify(resultat , null , "   ")}</pre>
    </div>
  )
}

export default Test
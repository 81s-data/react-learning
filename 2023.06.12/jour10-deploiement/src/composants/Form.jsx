import React, {useRef} from 'react'
import { db } from '../../config'
import { collection, addDoc } from 'firebase/firestore'

function Form({setUpdate}) {
  
    const refTitre = useRef();

    function submit(e) {
        e.preventDefault();
        addDoc(collection(db, 'notes'), {titre: refTitre.current.value});
        setUpdate((update) => {!update})
    }
  return (
    <div>
        <h2>Formulaire</h2>
        <form onSubmit={submit}>
            <input type="text" ref={refTitre} name="titre" placeholder='saisir un titre' />
            <input type="submit" value='Envoyer'/>
        </form>
    </div>
  )
}

export default Form
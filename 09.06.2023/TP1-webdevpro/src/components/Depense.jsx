import React, {useContext, useRef} from 'react'
import { DepensesContext } from '../context/DepensesContext';
import {toast, ToastContainer} from 'react-toastify'

import 'react-toastify/dist/ReactToastify.css';

function Depense () {

    // get the inputs value
    let depense = {nom: '', montant: ''}

    const nomInputRef = useRef();

    const {ajouterDepense} = useContext(DepensesContext);

    const handleInput = (e) => {
        depense[e.target.name] = e.target.value;
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (depense.nom.length < 3 || depense.nom.length >= 50 ) {
            toast.error('Le nom doit être entre 4 et 50');
            return;
        } else if (Math.abs(Number(depense.montant)) > 9000) {
            toast.error('C\'est au dessus de 9000 !!!');
            return;
        }
        if (depense.montant === '') {
            toast.error('Indiquez un montant');
            return;
        }
        depense = {nom: depense.nom, montant: parseInt(depense.montant)}
        ajouterDepense(depense);
        e.target.reset();
        nomInputRef.current.focus();
    }

    return (
        <div>
            <ToastContainer />
            <h1 className='text-center'>Ajouter une nouvelle opération</h1>
            <form onSubmit={handleSubmit}>
                <div className='d-flex align-items-center flex-column '>
                    <label htmlFor="nom">nom</label>
                    <input type="text" name="nom" id="nom" 
                    ref={nomInputRef} onChange={handleInput}/>
                    <label htmlFor="montant">montant</label>
                    <input type="number" name="montant" id="montant" onChange={handleInput}/>
                    <input type="submit" value='envoyer'
                    className='btn btn-success'/>
                </div>
            </form>
        </div>
    )
}

export default Depense
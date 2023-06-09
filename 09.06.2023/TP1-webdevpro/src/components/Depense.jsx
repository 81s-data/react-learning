import React, { useState } from 'react'
import {toast, ToastContainer} from 'react-toastify'

import 'react-toastify/dist/ReactToastify.css';

function Depense() {

    let depense = {nom: '', montant: ''}

    const handleInput = (e) => {
        depense[e.target.name] = e.target.value;
        console.log(depense);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (depense.nom.length < 3 || depense.nom.length >= 50) {
            toast.error('Le nom doit être entre 4 et 50')
            return;
        } else if (Math.abs(Number(depense.montant)) > 9000) {
            toast.error('It is over 9000 !!!')
            return;
        }

        const option = {
            method: 'POST',
            body: JSON.stringify(depense),
            headers: {
                'content-type' : 'application/json'
            }
        }

        fetch('http://localhost:4200/elements', option)
        .then(response => response.json())
        .then(data => {
            console.log(data);
        })
    }

    return (
        <div className='d-flex justify-content-center flex-column'>
            <ToastContainer />
            <h1 className='text-center'>Ajouter une nouvelle opération</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="nom">nom</label>
                    <input type="text" name="nom" id="nom" onChange={handleInput}/>
                </div>
                <div>
                    <label htmlFor="montant">montant</label>
                    <input type="number" name="montant" id="montant" onChange={handleInput}/>
                </div>
                <input type="submit" value='envoyer'
                className='btn btn-primary'/>
            </form>
        </div>
    )
}

export default Depense
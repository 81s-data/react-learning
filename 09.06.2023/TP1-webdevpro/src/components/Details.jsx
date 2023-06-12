import React, { useContext, useEffect } from 'react'
import { DepensesContext } from '../context/DepensesContext'

import './Details.css'

export default function Details({update}) {

    const {depenses, supprimerDepenseById} = useContext(DepensesContext);

    useEffect(() => {
        
    }, [update])

    return (
        <div className='details'>
            <h1 className='text-center'>Details</h1>
            <table>
                <thead>
                    <tr>
                        <th>id</th>
                        <th>nom</th>
                        <th>montant</th>
                        <th>actions</th>
                    </tr>
                </thead>
                <tbody>
                    {depenses.map(({id, nom, montant}, key) => {
                        return <tr key={key}>
                            <td>{id}</td>
                            <td>{nom}</td>
                            <td>{montant}</td>
                            <td>
                                <button className='btn btn-primary me-3'>Modifier</button>
                                <button className='btn btn-dark' onClick={() => supprimerDepenseById(id)}>Supprimer</button>
                            </td>

                        </tr>
                    })}
                </tbody>
            </table>
            <hr />
        </div>
    )
}
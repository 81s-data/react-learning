import React, { useContext } from 'react'
import {DepensesContext} from '../context/DepensesContext'

export default function Details() {

    const {depenses} = useContext(DepensesContext);

    return (
        <div>
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
                                <button className='btn btn-primary'>Modifier</button>
                                <button className='btn btn-dark'>Supprimer</button>
                            </td>
                        </tr>
                    })}
                </tbody>
            </table>
        </div>
    )
}
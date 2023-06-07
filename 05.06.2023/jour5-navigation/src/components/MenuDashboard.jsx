import React from 'react'
import { Link } from 'react-router-dom'

function MenuDashboard() {
  return (
    <ul className='list-group'>
        <li className='liste-group-item'>
            <Link to='/'>Accueil du site</Link>
        </li>
        <li className='liste-group-item'>
            <Link to='/'>Accueil du BO</Link>
        </li>
        <li className='liste-group-item'>
            <Link to='/'>Gestion des users</Link>
        </li>
    </ul>
  )
}

export default MenuDashboard
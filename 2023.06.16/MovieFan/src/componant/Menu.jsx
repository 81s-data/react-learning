import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { AuthContext } from '../context/AuthContext'
import icon from '/cinema.png'

import './Menu.css';

function Menu() {

  const {isLogged, logout} = useContext(AuthContext);

  return (
    <div className='bg-warning'>
      <Link to='/' className='d-flex justify-content-center menu-title text-black text-bottom'>
          <img src={icon} alt="le logo du site" width={'3%'}/>
          <h3 className=''>MovieFan</h3>
      </Link>
      <div className='d-flex flex-row justify-content-between navbar'>
        <ul className='list-unstyled text-decoration-none d-flex '>
            <li className='ms-3 me-3 nav-item'>
              <Link to='/' className='nav-link'>Accueil</Link>
            </li>
            <li className='nav-item me-3'>
              <Link to='/about' className='nav-link'>Qui sommes-nous</Link>
            </li>
            <li className='nav-item'>
              <Link to='/contactus' className='nav-link'>Nous contacter</Link>
            </li>
        </ul>
        <ul className='list-unstyled nav-item'>
          <li>{isLogged() ? 
            <button className='btn' onClick={logout}>Déconnexion</button>
            :
            <Link to='login' className='nav-link me-3'>Connexion</Link>
          }</li>
        </ul>
      </div>
    </div>
    
  )
}

export default Menu
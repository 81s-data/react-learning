import React from 'react'
import { Link } from 'react-router-dom'

function Menu() {
  return (
    <div className='bg-primary'>
        <nav className='navbar navbar-expand container navbar-dark'>
          <span className='navbar-brand'>Menu</span>
          <ul className='navbar-nav'>
            <li className='nav-item'>
              <Link to='/' className='nav-link'>Home</Link>
            </li>
            <li className='nav-item'>
              <Link to='/login' className='nav-link'>Login</Link>
            </li>
          </ul>
        </nav>
      </div>
  )
}

export default Menu
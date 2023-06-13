import React, { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { signOut } from 'firebase/auth';
import { auth } from '../config/firebase';

import { AuthContext } from '../context/AuthContext'

function Menu() {

  const {isLogged , setUser} = useContext(AuthContext);
    const navigate = useNavigate()
    function logout(){
        signOut(auth)
        .then(() => {
            localStorage.removeItem("authentification");
            navigate('/');
            setUser({})
        })
        .catch((error) => {
            console.log(error);
        });
    }

  return (
    <div className='bg-primary'>
        <nav className='navbar navbar-expand container navbar-dark'>
          <span className='navbar-brand'>Menu</span>
          <ul className='navbar-nav'>
            <li className='nav-item'>
              <Link to='/' className='nav-link'>Home</Link>
            </li>
            {isLogged() ?
              <li className='nav-item'>
                <button onClick={logout} className='nav-link bg-danger rounded text-dark'>Logout</button>
              </li>
              :
              <li className='nav-item'>
                <Link to='/login' className='nav-link bg-success rounded text-dark'>Login</Link>
              </li>
            }
          </ul>
        </nav>
      </div>
  )
}

export default Menu
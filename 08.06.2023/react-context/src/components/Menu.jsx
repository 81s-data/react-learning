import React, {useContext} from 'react'
import {ConnexionContext} from '../context/connexionContext'

function Menu() {
  const { logout, isLogged } = useContext(ConnexionContext);

  return (
    <div>
      { isLogged() ? <>
      Dashboard
      <button onClick={logout}>deconnexion</button></> : <>Login</>}
    </div>
  )
}

export default Menu
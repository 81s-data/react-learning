import React, {useContext} from 'react'
import {ConnexionContext} from '../context/connexionContext'

function Menu() {
  const { user } = useContext(ConnexionContext);
  return (
    <div>
      { user.isLogged ? <>
      Dashboard
      <button>deconnexion</button></> : <>Login</>}
      {JSON.stringify(user)}
    </div>
  )
}

export default Menu
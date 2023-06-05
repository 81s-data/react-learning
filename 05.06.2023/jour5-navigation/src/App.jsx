import React from 'react'
import { Outlet } from 'react-router-dom'
import Menu from './components/Menu'

function App() {
  return (
    <div>
      <Menu />
      <Outlet /> {/*c'est ce composant qui va devenir le composant Accueil par exemple si on clique sur le bouton Accueil */}
    </div>
  )
}
export default App
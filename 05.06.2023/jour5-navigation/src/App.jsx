import React from 'react'
import { Outlet } from 'react-router-dom'
import Menu from './components/Menu'
import { PanierContextProvider } from './context/PanierContext'

function App() {
  return (
    <div>
      <PanierContextProvider >
        <Menu />
        <Outlet /> {/*c'est ce composant qui va devenir le composant Accueil par exemple si on clique sur le bouton Accueil */}
      </PanierContextProvider >
    </div>
  )
}
export default App
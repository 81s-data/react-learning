import React from 'react'
import Accueil from './components/Accueil'
import Menu from './components/Menu'
import { ConnexionContextProvider } from './context/connexionContext'

function App() {
  return (
    <ConnexionContextProvider>
      <div>
        <h1>App</h1>
        <Menu />
        <Accueil />
      </div>
    </ConnexionContextProvider>
  )
}

export default App
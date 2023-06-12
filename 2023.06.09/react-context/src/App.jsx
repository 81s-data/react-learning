import React from 'react'
import Accueil from './components/Accueil'
import Panier from './components/Panier'
import { PanierContextProvider } from './context/PanierContext'

function App() {
  return (
    <PanierContextProvider>
      <div className='row'>
        <h1 className='text-center'>Site marchand mdr</h1>
        <Panier />
        <Accueil />
      </div>
    </PanierContextProvider>
  )
}

export default App
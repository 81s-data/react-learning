import React from 'react'
import Details from './components/Details'
import Total from './components/Total'
import Synthese from './components/Synthese'
import { DepensesContextProvider } from './context/DepensesContext'
import Depense from './components/Depense'

import './App.css'

function App() {
  return (
    <div>
      <DepensesContextProvider>
        <Total />
        <Synthese />
        <Details />
        <Depense />
      </DepensesContextProvider>
    </div>
  )
}

export default App
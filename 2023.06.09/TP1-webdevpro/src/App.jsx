import React, {useState} from 'react'
import Details from './components/Details'
import Total from './components/Total'
import Synthese from './components/Synthese'
import { DepensesContextProvider } from './context/DepensesContext'
import Depense from './components/Depense'

import './App.css'

function App() {

  const [update, setUpdate] = useState(false);

  return (
    <div className='app'>
      <DepensesContextProvider update={update} setUpdate={setUpdate}>
        <Total />
        <Synthese />
        <Details />
        <Depense />
      </DepensesContextProvider >
    </div>
  )
}

export default App
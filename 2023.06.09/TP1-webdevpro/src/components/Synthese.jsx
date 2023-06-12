import React, { useContext } from 'react'
import { DepensesContext } from '../context/DepensesContext'

function Synthese() {

  const {depenses} = useContext(DepensesContext);

  return (
    <div>
        <h1 className='text-center'>Synthese</h1>
        <div className='d-grid'>
          <div className='row'>
            <p className='col'>Revenus: {depenses?.filter(item => {
                return item.montant >= 0;
              }).reduce((total, item) => {
                return total + item.montant;
              }, 0)}</p>

              <p className='col float-right'>Depenses: {depenses?.filter(item => {
                return item.montant < 0;
              }).reduce((total, item) => {
                return total + item.montant;
              }, 0)}</p>
          </div>
            
        </div>
        <hr />
    </div>
  )
}

export default Synthese
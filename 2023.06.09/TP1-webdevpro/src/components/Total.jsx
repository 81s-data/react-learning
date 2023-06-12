import React, { useContext } from 'react'
import { DepensesContext } from '../context/DepensesContext';

function Total() {

  const { depenses } = useContext(DepensesContext);

  return (
    <div className='text-center'>
        <h1>Total</h1>
        <p>{depenses.reduce((total, item) => {
          return total + item.montant;
        }, 0)}</p>
        <hr />
    </div>
  )
}

export default Total
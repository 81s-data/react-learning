import React from 'react'

import './ListForm.css'

function ListForm({setUpdateList}) {

  let formData = {titre: '', status: false};

  const handleInput = (e) => {
    formData.titre = e.target.value;
  }

  const handleCheckbox = (e) => {
    console.log(e.target.checked);
    formData.status = e.target.checked;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.titre.length < 3 || formData.titre.length > 255) {
      alert('la tâche doit être entre 3 et 255 caractères');
    } else {
      const option = {
        method: 'POST',
        body: JSON.stringify(formData),
        headers: {
          'content-type' : 'application/json'
        }
      }
      fetch('http://localhost:4200/todo', option)
      .then(response => response.json())
      .then(() => {
        formData = {titre: '', status: false}
        e.target.reset();
        setUpdateList((update) => {return !update});
      })
    }
  }

  return (
    <div className='container listForm'>
      <h2>Ajouter une tâche</h2>
      <form onSubmit={handleSubmit}>
        <input type='text'onInput={handleInput} placeholder='Ici' name='titre'
        className='me-3'/>
        <label htmlFor="status" className='me-3'>défà faite</label>
        <input type="checkbox" onClick={handleCheckbox} name="status" id="status"/> 
        {/** Ne pas utiliser onChange sur les checkBox */}
        <div>
          <input type="submit" value="Ajouter" className='btn btn-primary mt-3'/>
        </div>
      </form>
    </div>
  )
}

export default ListForm
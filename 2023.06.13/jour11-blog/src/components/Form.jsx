import React, { useRef } from 'react'

import { collection, addDoc } from 'firebase/firestore'

import { db } from '../config/firebase';

function Form() {
    // TODO Remplacer la partie formulaire dans Home

    const titleRef = useRef();
    const textRef = useRef();

    const resetForm = () => {
      titleRef.current.value = '';
      textRef.current.value = '';
      titleRef.current.focus();
    }

    const handleSubmit = (e) => {
      e.preventDefault();
      if (titleRef.current.value.length <= 3 || textRef.current.value.length < 3) {
        alert('formulaire invalide');
        resetForm();
        return;
      }
      const data = {title: titleRef.current.value, text: textRef.current.value}
      data.dt_creation = new Date();
      addDoc(collection(db, 'articles'), data);
      setUpdate((update) => {!update})
      resetForm();
    }
  return (
    <div>
      <form className='form-group' onSubmit={handleSubmit}>
        <input type="text" ref={titleRef} name='title' className='form-control mt-3' placeholder='Title'/>
        <textarea name="text" ref={textRef} id="text" cols="30" className='form-control mt-3' rows="10" placeholder='Write something ...'></textarea>
        <input type="submit" value="Send" className='btn btn-primary mt-3'/>
      </form>
    </div>
  )
}

export default Form
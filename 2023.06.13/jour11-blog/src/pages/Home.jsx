import React, { useContext, useEffect, useRef, useState } from 'react'
import { collection, addDoc, getDocs } from 'firebase/firestore'

import { AuthContext } from '../context/AuthContext'
import { db } from '../config/firebase';

function Home() {

  const {isLogged, update, setUpdate} = useContext(AuthContext);

  const titleRef = useRef();
  const textRef = useRef();

  const [articles, setArticles] = useState([])

  useEffect(() => {
    async function getDocuments() {
      const data = await getDocs(collection(db, 'articles'))
      return data.docs.map(item => {
              return item.data();
      })
    }
    getDocuments().then((data) => {
      setArticles(data);
    });
  }, [update])

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
    addDoc(collection(db, 'articles'), {title: titleRef.current.value, text: textRef.current.value});
    setUpdate((update) => {!update})
    resetForm();
  }

  return (
    <div className='container mt-3'>
        {isLogged() ?
          <div className='row'>
            <div className='col-6'>
              <form className='form-group' onSubmit={handleSubmit}>
                <input type="text" ref={titleRef} name='title' className='form-control mt-3' placeholder='Title'/>
                <textarea name="text" ref={textRef} id="text" cols="30" className='form-control mt-3' rows="10" placeholder='Write something ...'></textarea>
                <input type="submit" value="Send" className='btn btn-primary mt-3'/>
              </form>
              </div>
              <div className='col'>
                <ul>
                  {articles.map((item, key) => {
                    return <li key={key}>
                      <h2>{item.title}</h2>
                      <p>{item.text}</p>
                    </li>
                  })}
                </ul>
              </div>
          </div>
          :
          <p>Log In to Acces the App</p>
        }
    </div>
  )
}

export default Home
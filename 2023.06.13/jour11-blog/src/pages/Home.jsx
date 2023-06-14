import React, { useContext, useEffect, useRef, useState } from 'react'
import { collection, addDoc, getDocs, doc, deleteDoc } from 'firebase/firestore'

import { AuthContext } from '../context/AuthContext'
import { db } from '../config/firebase';

function Home() {

  const {isLogged, update, setUpdate} = useContext(AuthContext);

  const titleRef = useRef();
  const textRef = useRef();

  const [articles, setArticles] = useState([])
  const [id, setId] = useState(0);

  useEffect(() => {
    async function getDocuments() {
      const data = await getDocs(collection(db, 'articles'))
      const articles = data.docs.map(item => {
        return {...item.data(), id: item.id};
      })
      setArticles(articles)
      return articles
    }
    getDocuments();
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
    const data = {title: titleRef.current.value, text: textRef.current.value}
    data.dt_creation = new Date();
    addDoc(collection(db, 'articles'), data);
    setUpdate((update) => {!update})
    resetForm();
  }

  const deleteArticle = async (id) => {
    const ref = doc(db, "articles", id)
    await deleteDoc(ref)
    setUpdate(!update);
  }

  const updateArticle = async (id) => {
    // TODO Implémenter la modification d'un article
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
                <ul className='list-unstyled'>
                  {articles?.map((item, key) => {
                    return <li key={key}>
                      <h2>{item.title}</h2>
                      <p>{item.text}</p>
                      <p>{new Intl.DateTimeFormat("fr-FR").format(new Date(item?.dt_creation?.seconds * 1000))}</p>
                      {isLogged() &&
                      <div>
                        <button className='btn btn-warning me-3'onClick={() => updateArticle(item.id)} >Update</button>
                        <button className='btn btn-danger' onClick={() => deleteArticle(item.id)} >Delete</button>
                      </div>
                      }
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
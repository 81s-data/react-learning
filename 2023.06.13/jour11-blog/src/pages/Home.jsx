import React, { useContext, useEffect, useRef, useState } from 'react'
import { collection, addDoc, getDocs, doc, deleteDoc } from 'firebase/firestore'

import { AuthContext } from '../context/AuthContext'
import { db } from '../config/firebase';
import Form from '../components/Form';

function Home() {

  const {isLogged, update, setUpdate} = useContext(AuthContext);

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
              <Form />
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
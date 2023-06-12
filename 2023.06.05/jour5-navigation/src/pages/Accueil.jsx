import React, { useEffect, useState } from 'react';

function Accueil() {
  // requete Ajax
  // afficher dans le composant
  // <article>
  //  <h2>titre</h2>
  //  tag1 tag2 tag3
  //  nb commentaire
  // </article>

  const [posts, setPosts] = useState([])

  useEffect(() => {
    fetch('https://dummyjson.com/posts')
    .then(response => response.json())
    .then(({posts}) => {
      setPosts(posts);
    })
  }, [])

  return (
    <div className='row'>
      {posts.map(({title, tags, reactions}, key) => {
        return <article key={key} className='col-4'>
          <h2>{title}</h2>
          {tags.map((item, key) => {
            return <span key={key} className='badge bg-warning mx-2'>#{item}</span>
          })}
          <br />
          Commentaires: {reactions}
          <hr />
        </article>
      })}
    </div>
  )
}

export default Accueil
import React, { useContext }from 'react'
import { Link } from 'react-router-dom';
import slug from 'slug';
import Footer from '../componant/Footer';
import { AuthContext } from '../context/AuthContext';
import { MoviesContext } from '../context/MoviesContext';

function Home() {

  const {movies, getMovieById, deleteMovieById} = useContext(MoviesContext);
  const {isLogged} = useContext(AuthContext);
  
  return (
    <div>
        {/* <pre>{JSON.stringify(movies, null, '  ')}</pre> */}
        <div className='row mt-3 p-2'>
          {movies.map((item, key) => {
              return <div key={key} className='col-3 mb-3'>
                  <h2>{item.title}</h2>
                  <img src={item.poster} alt="" />
                  <button className='btn btn-dark mt-2 mb-2'>
                      <Link to={`movie/${item.id}/${slug(item.title)}`} state={{movie: getMovieById(item.id)}}
                            className='nav-link'>Plus de détails</Link>
                  </button>
                  {isLogged() && 
                    <div>
                      <button onClick={() => deleteMovieById(item.fb_id)} className='btn btn-danger'>Supprimer</button>
                    </div>
                  }
              </div>
          })}
        </div>
        <Footer />
    </div>
  )
}

export default Home
import React, { useContext, useState } from 'react'
import { useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';


function MovieDetails() {

    const location = useLocation();
    const { movie } = location.state;
    const { isLogged } = useContext(AuthContext);
    const [update, setUpdate] = useState(false);

    const titleRef = useRef();
    const posterRef = useRef();
    const synopsisRef = useRef();
    const countryRef = useRef();

    const updateMovie = () => {
        setUpdate((update) => !update)
    }

    const resetForm = () => {
        titleRef.current.value = '';
        posterRef.current.value = '';
        synopsisRef.current.value = '';
        countryRef.current.value = '';
        titleRef.current.focus();
      }

    const getInputsValue = () => {

    }

    const handleSubmit = (e) => {
        e.preventDefault();
        resetForm();
        setUpdate((update) => !update)
    }

    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-sm">
                    <img src={movie.poster} alt="" />
                </div>
                {!update ?
                    <div className="col-sm">
                        <h2>{movie.title}</h2>
                        <p>{movie.synopsis}</p>
                        <p>{movie.country}</p>
                        {movie.genre.map((item, key) => {
                            return <ul key={key}>
                                <li>{item}</li>
                            </ul>
                        })}
                        {/** // TODO a terminer */}
                        {isLogged() && <button onClick={() => updateMovie} className='btn btn-warning'>Modifier</button>}
                    </div>
                    : 
                    <div className="col-sm">
                        <form onSubmit={handleSubmit} className='form-group'>
                            <input type="text" ref={titleRef} name="title" id="" placeholder='Titre' className='form-control mb-2'/>
                            <input type="text" ref={posterRef} name="poster" id="" placeholder='Affiche' className='form-control mb-2'/>
                            <input type="text" ref={synopsisRef} name="synopsis" id="" placeholder='Synopsis' className='form-control mb-2'/>
                            <input type="text" ref={countryRef} name="country" id="" placeholder='Pays' className='form-control mb-2'/>
                            <input type="submit" value="Modifier" className='btn btn-primary'/>
                        </form>
                        
                    </div>
                }
                <div className="col-sm">
                </div>
            </div>
        </div>
    )
}

export default MovieDetails
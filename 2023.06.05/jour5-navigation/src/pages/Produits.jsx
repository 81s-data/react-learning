import React, { useState, useEffect } from 'react';
import {Link} from 'react-router-dom';
import slug from 'slug';

function Produits() {

    const [produits, setProduits] = useState([])

    useEffect(() => {
        fetch('https://dummyjson.com/products')
        .then(response => response.json())
        .then(({products}) => {
            setProduits(products)
        })
    }, [])

    return (
        <div className='container'>
            <h1>Produits</h1>
            {/* <pre>{JSON.stringify(produits, null, ' ')}</pre> */}
            <div className='row'>
                {produits.map(({title, thumbnail, category, id}, key) => {
                    return <article className='col-2' key={key}>
                        <h2 className='fs-4'>{title}</h2>
                        <img src={thumbnail} alt="" className='img-fluid'
                        style={{height: '150px', objectFit: 'cover'}}/>
                        <p>{category}</p>
                        <Link to={`/produits/${id}/${slug(title)}`} >
                            <button className='btn btn-sm btn-success mb-3'>Afficher</button>
                        </Link>
                        {/** Iphone X => iphone-x : slugify 
                         * npm install slug
                         * 
                        */}
                    </article>
                })}
            </div>
            
        </div>
    )
}

export default Produits
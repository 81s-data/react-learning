import React, { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import './ProduitSingle.css'

function ProduitSingle() {
    
    const {id} = useParams(); // permet de récupérer la partie variable dans l'url
    // :id/:title défini dans le router

    const [produit, setProduit] = useState({});
    useEffect(() => {
        fetch(`https://dummyjson.com/products/${id}`)
        .then(response => response.json())
        .then(data => {
            setProduit(data);
        })
    }, [])

    const [lightbox, setLightBox] = useState({show : false, img : ''}) // lightbox = agrandissement d'image

    const showLightBox = url => {
        setLightBox({show: true, img: url});
    }

    const hideLightBox = url => {
        setLightBox({show: false, img: ''});
    }

    return (
        <div>
            { lightbox.show && <div className='light-box' onClick={hideLightBox}>
                <img src={lightbox.img}></img>
            </div>}
            { Object.keys(produit).length > 0 && <div className='container'>
                <section className="row mt-4">
                    <figure className="col-4">
                        <img src={produit.thumbnail} alt="" className='img-fluid mb-3'
                        onClick={() => showLightBox(produit.thumbnail)}/>
                        <div className="row">
                            {produit.images && produit.images.map(function(item, key){
                                return <div className='col-3'  key={key}>
                                    <img src={item} alt=""  className='mw-100 border border-primary'
                                    onClick={() => showLightBox(item)}/>
                                </div>
                            }) }
                        </div>
                        <div className='text-center mt-3'>
                            <Link to='/produits' className='btn btn-danger btn-sm'>
                                Retour aux produits
                            </Link>
                        </div>
                    </figure>
                    <div className="col-8">
                        <h1>{produit.title}</h1>
                        <p>{produit.description}</p>
                        <p>{new Intl.NumberFormat("fr-FR", { style: 'currency', currency: 'EUR' }).format(produit.price)  }</p>
                        <p>{produit.brand}</p>
                    </div>
                </section>
            </div>}
        </div>
    )
}

export default ProduitSingle
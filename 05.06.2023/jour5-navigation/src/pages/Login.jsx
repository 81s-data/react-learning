import React from 'react';
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';

import Joi from 'joi';
import './Login.css';

function Login() {
// dans le composant <Login />
// insérer dans un formulaire
// contenant 2 champs
// input type texte => saisir un login
// input type password => saisir un password
// et un bouton de soumission
// une fois que vous avez soumis le formulaire
// vous devez récupérer les valeurs saisies dans les 2 champs

// vérifier que le champ input du login n'est pas vide / contient un minimum de 3 lettres et max de 255
// vérifier que le champ input du password n'est pas vide / contient un minimum de 3 lettres et max de 255

// => si c'est ok => toast message => welcome
// => si ko => toast message => liste les erreurs

  let credentials = {login: '', password: ''}

  let navigate = useNavigate();

  const formData = (e) => {
    credentials[e.target.name] = e.target.value;
  }

  const checkForm = (e) => {
    e.preventDefault();

    const schema = Joi.object({
      login : Joi.string().min(3).max(64).required().messages({
        "string.min" : "l'identifiant doit contenir au minimun 3 lettres",
        "string.max" : "l'inentifiant doit contenir au maximum 64 lettres",
        "string.empty" : "le champ identifiant est obligatoire"
      }),
      password : Joi.string().regex(/(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/).required().messages({
        "string.pattern.base" : "le password doit contenir 8 lettres avec des Majuscules, des minuscules et des chiffres"
      } )
    })

    const {error} = schema.validate(credentials, {abortEarly :false})

    if (!error) {
      // par la suite => INSERT dans une base de données, envoyer un email, ...
      console.log('inserer base de données');
      // vider le forumulaire
      e.target.reset();
      credentials = {login: '', password: ''}
      // afficher un bandeau en haut du formulaire
      // qui dit 'merci pour le message on revient vers vous au plus vite"
      // => librarie react-toastify
      navigate('/admin')
    } else {
      for(let msg of error.details) {
        toast.error(msg.message);
      }
    }
  }

  return (
    <div className='container'>
      <h1 className='text-center my-5'>Connexion</h1>
      <form className='grid-form' onSubmit={checkForm}>
          <input type="text" className='form-control me-3' placeholder='votre identifiant'
                  id='login' name='login' onInput={formData}/>
          <input type="password" className='form-control me-3' placeholder='votre mot de passe'
                  id='password' name='password' onInput={formData}/>
        <div>
          <input type='submit' className='btn btn-info'/>
        </div>
      </form>
      <ToastContainer />
    </div>
  )
}

export default Login
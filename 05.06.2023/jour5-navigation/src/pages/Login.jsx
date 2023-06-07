import React from 'react';
import Joi from 'joi';
import { toast, ToastContainer } from 'react-toastify';

function Login() {
//   dans le composant <Login />
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

  let dataForm = {login: '', password: ''}

  const formData = (e) => {
    dataForm[e.target.name] = e.target.value;
  }

  const checkForm = (e) => {
    e.preventDefault();

    const schema = Joi.object({
      login : Joi.string().min(3).max(255).required().messages({
        "string.min" : "l'indentifiant doit contenir au minimun 3 lettres",
        "string.max" : "l'indentifiant doit contenir au maximum 64 lettres",
        "string.email" : "l'indentifiant soumis n'est pas valide",
        "string.empty" : "le champ identifiant est obligatoire"
      }),
      password : Joi.string().min(3).max(255).required().messages({
        "string.min" : "le mot de passe doit contenir au minimun 3 lettres",
        "string.max" : "le mot de passe doit contenir au maximum 255 lettres",
        "string.empty" : "le le mot de passe est obligatoire"
      })
    })

    const {error} = schema.validate(dataForm, {abortEarly :false})

    if (!error) {
      // par la suite => INSERT dans une base de données, envoyer un email, ...
      console.log('inserer base de données');
      // vider le forumulaire
      e.target.reset();
      dataForm = {login: '', password: ''}
      // afficher un bandeau en haut du formulaire
      // qui dit 'merci pour le message on revient vers vous au plus vite"
      // => librarie react-toastify
      toast.success('création de compte réussie');
    } else {
      for(let msg of error.details) {
        toast.error(msg.message);
      }
    }
  }

  return (
    <div className='container'>
      <h1>Connexion</h1>
      <ToastContainer />
      <form onSubmit={checkForm}>
        <div className='form-floating mb-3'>
          <input type="text" className='form-control' id='login' name='login' onInput={formData}/>
          <label htmlFor="login">Identifiant</label>
        </div>
        <div className='form-floating mb-3'>
          <input type="password" className='form-control' id='password' name='password' onInput={formData}/>
          <label htmlFor="password">Mot de passe</label>
        </div>
        <div className='mb-3 d-flex justify-content-end'>
          <input type='submit' className='btn btn-info' value="se connecter" />
        </div>
      </form>
    </div>
  )
}

export default Login
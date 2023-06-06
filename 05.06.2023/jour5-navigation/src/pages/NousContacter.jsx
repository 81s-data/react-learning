import React from 'react';
import Joi from 'joi'; //yup ou zod
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function NousContacter() {

  let dataForm = {email: '', sujet: '', commentaire: ''}

  const formData = (e) => {
    dataForm[e.target.name] = e.target.value;
  }

  const checkValues = (e) => {
    // bloquer le rechargement automatique de la page
    e.preventDefault();

    dataForm
    // lorsque je soumets le formulaire
    // je dois récupérer les valeurs saisies u formulaire
    // vérifier qu'elles sont correctes
    // => librarie Joi pour les formulaires | yup | zod
    const schema = Joi.object({
      email : Joi.string().min(3).max(64).email({tlds:{allow: false}}).required().messages({
        "string.min" : "email doit contenir au minimun 3 lettres",
        "string.max" : "email doit contenir au maximum 64 lettres",
        "string.email" : "email soumis n'est pas valide",
        "string.empty" : "le champ email est obligatoire"
      }),
      sujet : Joi.string().min(3).max(255).required().messages({
        "string.min" : "sujet doit contenir au minimun 3 lettres",
        "string.max" : "sujet doit contenir au maximum 255 lettres",
        "string.empty" : "le champ sujet est obligatoire"
      }),
      commentaire : Joi.string().min(3).max(1000).required().messages({
        "string.min" : "commentaire doit contenir au minimun 3 lettres",
        "string.max" : "commentaire doit contenir au maximum 1000 lettres",
        "string.empty" : "le champ commentaire est obligatoire"
      })
    })
    // la variable schema contient 13 vérifications

    // si c'est pas correct => non
    // afficher dans la console
    const {error} = schema.validate(dataForm, {abortEarly :false})
    if (!error) {
      // par la suite => INSERT dans une base de données, envoyer un email, ...
      console.log('inserer base de données');
      // vider le forumulaire
      e.target.reset();
      dataForm = {email: '', sujet: '', commentaire: ''}
      // afficher un bandeau en haut du formulaire
      // qui dit 'merci pour le message on revient vers vous au plus vite"
      // => librarie react-toastify
      toast.success('merci pour le message on revient vers vous au plus vite');
    } else {
      for(let msg of error.details) {
        toast.error(msg.message);
      }
    }
  }

  return (
    <div className='container'>
      <h1>Nous Contacter</h1>
      <p>Vous avez des questions, nous avons les réponses !</p>
      <ToastContainer />
      <form onSubmit={checkValues}>
        <div className='form-floating mb-3'>
          <input type="email" className='form-control' id='email'
          onChange={formData} name='email' placeholder='votre@email.com'/>
          <label htmlFor="email">votre email</label>
        </div>
        <div className='form-floating mb-3'>
          <input type="text" className='form-control' id='sujet'
          onChange={formData} placeholder='le sujet du message' name='sujet'/>
          <label htmlFor='sujet'>votre sujet</label>
        </div>
        <div className='form-floating mb-3'>
          <textarea className='form-control' id='commentaire' onChange={formData}
          style={{ height : '150px'}} placeholder='votre commentaire' name='commentaire'/>
          <label htmlFor='commentaire'>votre commentaire</label>
        </div>
        <div className='mb-3 d-flex justify-content-end'>
          <input type='submit' className='btn btn-info' value="envoyer la demande d'information" />
        </div>
      </form>
    </div>
  )
}

export default NousContacter
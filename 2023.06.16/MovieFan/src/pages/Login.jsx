import React, {useContext} from 'react'
import { signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { auth, provider } from '../config/firebase'
import { useNavigate } from 'react-router-dom';

import { AuthContext } from '../context/AuthContext';

function Login() {

  const {login} = useContext(AuthContext);
  const navigate = useNavigate();
  
  const googleHandler = async () => {
      provider.setCustomParameters({ prompt: 'select_account' });
      signInWithPopup(auth, provider)
          .then((result) => {
              // This gives you a Google Access Token. You can use it to access the Google API.
              const credential = GoogleAuthProvider.credentialFromResult(result);
              const token = credential.accessToken;
              // The signed-in user info.
              const user = result.user;
              login(user);
              navigate("/");
              // redux action? --> dispatch({ type: SET_USER, user });
          })
          .catch((error) => {
              // Handle Errors here.
              const errorCode = error.code;
              const errorMessage = error.message;
              // The email of the user's account used.
              const email = error.email;
              // The AuthCredential type that was used.
              const credential = GoogleAuthProvider.credentialFromError(error);
              // ...
          });
  };

  return (
    <div className='container row'>
      <div className='col-sm'>
        <h2>Bienvenue sur la page de connexion de MovieFan.</h2>
        <p>Si vous êtes déjà membre, veuillez entrer vos identifiants ci-dessous pour accéder à votre compte et continuer à explorer notre univers cinématographique.</p>
        <p>Si vous êtes nouveau chez MovieFan, nous sommes ravis de vous accueillir. Cliquez sur "Créer un compte" pour commencer votre voyage cinématographique avec nous.</p>
        <p>Rappel : si vous avez oublié votre mot de passe, cliquez sur "Mot de passe oublié" et suivez les instructions pour le réinitialiser.</p>
        <p>Profitez bien de votre expérience cinématographique avec MovieFan !</p>
      </div>
      <div className='col-sm'>
        <h1>Connexion</h1>
        <button className='btn btn-success' onClick={googleHandler}>Authentification avec Gmail</button>
      </div>
        
    </div>
  )
}

export default Login
import React, { useContext } from 'react'
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
    <div className='container'>
        <h1>Login</h1>
        <button className='btn btn-success' onClick={googleHandler}>Auth with Gmail</button>
    </div>
  )
}

export default Login
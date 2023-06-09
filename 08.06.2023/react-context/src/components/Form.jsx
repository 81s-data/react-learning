import React, {useRef, useContext} from 'react'
import { ConnexionContext } from '../context/connexionContext';
import { ToastContainer, toast } from 'react-toastify';

function Form() {
  const {login, isLogged} = useContext(ConnexionContext)

  const refLogin = useRef();
  const refPassword = useRef();

  const submit = (e) => {
    e.preventDefault();
    const data = {
      login: refLogin.current.value,
      password: refPassword.current.value
    }
    login(data);
  }

  return (
    <div>
      <h2>connexion</h2>
      {/** si l'utilisateur saisit 
       * login: toto@gmail.com 
       * password: tutu123
       * l'utilisateur est authentifié ET le menu va changer
       * à la place du texte Login (dans Menu) il va y avoir le texte back office et un bouton de deconnexion
       * et le formulaire devient un p qui devient le texte Bonjour
       * 
       * si je clique sur le bouton deconnexion, le formulaire revient, le p disparait et le texte Login réaparait*/}
      { isLogged()
        ? 
        <p>Bienvenue</p>
        : 
      <form onSubmit={submit}>
        <input type="text" name="login" placeholder='login' ref={refLogin} />
        <br />
        <input type="password" name='password' placeholder='password' ref={refPassword} />
        <br />
        <input type="submit" value="connexion"/>
      </form>
      }
      < ToastContainer />
    </div>
  )
}

export default Form
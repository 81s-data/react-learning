import React, {useRef, useContext} from 'react'
import { ConnexionContext } from '../context/connexionContext';

function Form() {
  const {user, setUser} = useContext(ConnexionContext)

  const refLogin = useRef();
  const refPassword = useRef();

  const submit = (e) => {
    e.preventDefault();
    const data = {
      login: refLogin.current.value,
      password: refPassword.current.value
    }

    if (data.login.length < 3 || data.password.length < 3) {
      alert('formulaire invalide');
      return;
    }
    if (data.login === user.login && data.password === user.password) {
      setUser(function(prevUser){
        const cloneUser = structuredClone(prevUser);
        cloneUser.isLogged = true
        return cloneUser; 
      })
    }
  }

  return (
    <div>
      <h2>connexion</h2>
      { user.isLogged 
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
      {/** si l'utilisateur saisit 
       * login: toto@gmail.com 
       * password: tutu123
       * l'utilisateur est authentifié ET le menu va changer
       * à la place du texte Login (dans Menu) il va y avoir le texte back office et un bouton de deconnexion
       * et le formulaire devient un p qui devient le texte Bonjour
       * 
       * si je clique sur le bouton deconnexion, le formulaire revient, le p disparait et le texte Login réaparait*/}
    </div>
  )
}

export default Form
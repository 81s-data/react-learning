import { createContext, useState } from "react";
import { toast, ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const ConnexionContext = createContext(); // $_SESSION ou localStorage
// state utiliable sur PLUSIEURS composants

export const ConnexionContextProvider = function({children}) {

    const [user, setUser] = useState({
        login: 'toto@gmail.com',
        password: 'tutu123',
        isLogged: false
    })

    const login = (data) => {
        if (data.login.length < 3 || data.password.length < 3) {
            toast.error('formulaire invalide');
            return;
          }
          if (data.login === user.login && data.password === user.password) {
            setUser(function(prevUser){
              const cloneUser = structuredClone(prevUser);
              cloneUser.isLogged = true
              localStorage.setItem("auth" , JSON.stringify(cloneUser))
              return cloneUser; 
            })
          } else {
            toast.error('identifiants oubliés ?')
          }
    }

    const logout = () => {
        setUser(() => {
            const cloneUser = structuredClone(user);
            cloneUser.isLogged = false;
            localStorage.removeItem("auth") // ; ça supprimer 
            return cloneUser;
          })
    }

    const isLogged = () => {
        if( localStorage.getItem("auth")  && JSON.parse(localStorage.getItem("auth")).isLogged ){
            return true ; 
        }
        return user.isLogged
    }

    return <ConnexionContext.Provider value={{login, logout, isLogged}}>
        <ToastContainer />
        {children}
    </ConnexionContext.Provider>
}
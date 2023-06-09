import { createContext, useState } from "react";

export const ConnexionContext = createContext(); // $_SESSION ou localStorage
// state utiliable sur PLUSIEURS composants

export const ConnexionContextProvider = function({children}) {

    const [user, setUser] = useState({
        login: 'toto@gmail.com',
        password: 'tutu123',
        isLogged: false
    })

    return <ConnexionContext.Provider value={{user, setUser}}>
        {children}
    </ConnexionContext.Provider>
}
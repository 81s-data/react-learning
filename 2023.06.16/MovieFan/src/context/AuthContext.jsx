import { createContext , useState } from "react";

export const AuthContext = createContext();

export function AuthContextProvider ({ children }){
    
    let defaultUser = {}
    if(localStorage.getItem("authentification")){
        defaultUser = JSON.parse(localStorage.getItem("authentification"))
    }

    const [user, setUser] = useState(defaultUser)

    function login (user){
        setUser(user);
        localStorage.setItem("authentification" , JSON.stringify(user));
    }

    function isLogged(){
        return Object.keys(user).length > 0 ;
    }

    function logout() {
        setUser({});
        localStorage.clear();
    }

    return <AuthContext.Provider value={{login, isLogged, logout, setUser}}>
        {children}
    </AuthContext.Provider>

}
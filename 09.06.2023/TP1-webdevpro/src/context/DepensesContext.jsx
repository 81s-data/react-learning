import { useEffect, useState, createContext } from "react";

export const DepensesContext = createContext();

export function DepensesContextProvider({children}) {

    const [depenses, setDepenses] = useState([]);

    useEffect(() => {
        fetch('http://localhost:4200/elements')
        .then(reponse => reponse.json())
        .then((data) => {
            setDepenses(data)
        })
    }, [])

    return <DepensesContext.Provider value={{depenses}}>
        {children}
    </DepensesContext.Provider>
}
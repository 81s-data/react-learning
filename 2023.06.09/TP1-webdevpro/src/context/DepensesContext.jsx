import { useEffect, useState, createContext } from "react";

export const DepensesContext = createContext();

export function DepensesContextProvider({children, update, setUpdate}) {

    const [depenses, setDepenses] = useState([]);

    useEffect(() => {
        getDepenses();
    }, [update])

    const getDepenses = () => {
        fetch('http://localhost:4200/elements')
        .then(reponse => reponse.json())
        .then((data) => {
            setDepenses(data);
        })
    }

    const ajouterDepense = (depense) => {
        const option = {
            method: 'POST',
            body: JSON.stringify(depense),
            headers: {
                'content-type' : 'application/json'
            }
        }

        fetch('http://localhost:4200/elements', option)
        .then(response => response.json())
        .then(() => {
            setUpdate((update) => !update);
        })
    }

    const supprimerDepenseById = (id) => {
        const option = {
            method: 'DELETE',
        }

        fetch(`http://localhost:4200/elements/${id}`, option)
        .then(response => response.json())
        .then(() => {
            setUpdate((update) => !update)
        })
    }

    return <DepensesContext.Provider value={{depenses, ajouterDepense, supprimerDepenseById}}>
        {children}
    </DepensesContext.Provider>
}
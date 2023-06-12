import { createContext, useState } from "react";

export const PanierContext = createContext();

export const PanierContextProvider = function({children}) {

    const [panier, setPanier] = useState([]);

    const ajouterArticle = (article) => {
        const clonePanier = structuredClone(panier);
        const articleAAjouter = clonePanier.find(item => {
            return item.id === article.id;
        })
        if (articleAAjouter){
            const index = clonePanier.indexOf(articleAAjouter);
            clonePanier[index].qte++;
        } else {
            article.qte = 1;
            clonePanier.push(article);
        }
        setPanier(clonePanier);
    }

    const supprimerArticle = (id) => {
        const clonePanier = structuredClone(panier);
        const articleASupprimer = clonePanier.find(item => {
            return item.id === id;
        })
        const index = clonePanier.indexOf(articleASupprimer);
        clonePanier.splice(index, 1);
        setPanier(clonePanier);
    }

    return <PanierContext.Provider value={{panier, ajouterArticle, supprimerArticle}}>
        {children}
    </PanierContext.Provider>
}
import { createContext, useState } from "react";

export const LangContext = createContext();

export function LangContextProvider({children}) {

    const [lang, setLang] = useState('fr');

    // TODO Implementer l'option de langues multiples

    return <LangContext.Provider value={{lang, setLang}}>
        {children}
    </LangContext.Provider>
}
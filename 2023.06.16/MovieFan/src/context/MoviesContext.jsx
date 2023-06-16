import { createContext , useState, useEffect } from "react";

import { collection, getDocs, deleteDoc, doc} from 'firebase/firestore'
import { db } from '../config/firebase'

export const MoviesContext = createContext();

export function MoviesContextProvider ({ children, update, setUpdate }){

    const [movies, setMovies] = useState([]);

    useEffect(() => {
        async function getDocuments() {
            const data = await getDocs(collection(db, 'movie'))
            let id = 0;
            const movies = data.docs.map(item => {
                id++;
              return {...item.data(), id: id, fb_id: item.id};
            })
            setMovies(movies)
            return movies
          }
          getDocuments();
    }, [update])

    const getMovieById = (id) => {
        return movies.filter(item => {
            return item.id === id;
        })[0]
    }

    const deleteMovieById = async (id) => {
        const ref = doc(db, "movie", id)
        await deleteDoc(ref)
        setUpdate((update) => !update)
    }
 
    return <MoviesContext.Provider value={{movies, setMovies, getMovieById, deleteMovieById}}>
        {children}
    </MoviesContext.Provider>

}
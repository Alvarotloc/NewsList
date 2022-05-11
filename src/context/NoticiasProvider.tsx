import axios from "axios";
import { useState,useEffect,createContext } from "react";
import type { Article,NewsType } from '../types/index';

const NoticiasContext = createContext<any>({});

interface IChildren {
    children : JSX.Element | JSX.Element[]
}

const NoticiasProvider = ({children}:IChildren) => {

    const [categoria, setCategoria] = useState<string>('general');
    const [noticias, setNoticias] = useState<Article[]>([]);

    useEffect(() => {
        const getNewsByCategory =async () => {
            const url = `https://newsapi.org/v2/top-headlines?country=us&pageSize=100&category=${categoria}&apiKey=${import.meta.env.VITE_API_KEY}`;

            const {data}:{data : NewsType} = await axios(url);

            setNoticias(data.articles)
        }
    },[categoria])

    const handleChangeCategoria = (evento:React.ChangeEvent<HTMLSelectElement>) => {
        setCategoria(evento.target.value)
    }
    
    return (
        <NoticiasContext.Provider value={{
            categoria,
            handleChangeCategoria
        }}>
            {children}
        </NoticiasContext.Provider>
    )
}

export {
    NoticiasProvider
}
export default NoticiasContext;
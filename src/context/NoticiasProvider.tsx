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
    const [pagina, setPagina] = useState<number>(1);
    const [totalNoticias, setTotalNoticias] = useState<number>(0);

    useEffect(() => {
        const getNewsByCategory =async () => {
            const url = `https://newsapi.org/v2/top-headlines?country=us&category=${categoria}&apiKey=${import.meta.env.VITE_API_KEY}`;

            const {data}:{data : NewsType} = await axios(url);

            setPagina(1);
            setNoticias(data.articles);
            setTotalNoticias(data.totalResults);
        }
        getNewsByCategory();
    },[categoria]);

    useEffect(() => {
        const getNewsByCategory =async () => {
            const url = `https://newsapi.org/v2/top-headlines?country=us&page=${pagina}&category=${categoria}&apiKey=${import.meta.env.VITE_API_KEY}`;

            const {data}:{data : NewsType} = await axios(url);

            setNoticias(data.articles);
            setTotalNoticias(data.totalResults)
        }
        getNewsByCategory();
    },[pagina]);

    const handleChangeCategoria = (evento:React.ChangeEvent<HTMLSelectElement>) => {
        setCategoria(evento.target.value)
    }
    const handleChangePagina = (evento:any,valor:number) => {
        setPagina(valor);
    }
    
    return (
        <NoticiasContext.Provider value={{
            categoria,
            handleChangeCategoria,
            noticias,
            totalNoticias,
            handleChangePagina,
            pagina
        }}>
            {children}
        </NoticiasContext.Provider>
    )
}

export {
    NoticiasProvider
}
export default NoticiasContext;
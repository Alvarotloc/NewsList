import { useState,useEffect,createContext } from "react";

const NoticiasContext = createContext({});

interface IChildren {
    children : JSX.Element | JSX.Element[]
}

const NoticiasProvider = ({children}:IChildren) => {
    
    return (
        <NoticiasContext.Provider value={{

        }}>
            {children}
        </NoticiasContext.Provider>
    )
}

export {
    NoticiasProvider
}
export default NoticiasContext;
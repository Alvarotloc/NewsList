import { useContext } from "react";
import NoticiasContext from '../context/NoticiasProvider';

const useNoticias = () =>  useContext(NoticiasContext);

export default useNoticias;
import useNoticias from '../hooks/useNoticias';
import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";

interface ICategoria {
  value: string;
  label: string;
}

const CATEGORIAS: ICategoria[] = [
  { value: "general", label: "General" },
  { value: "business", label: "Negocios" },
  { value: "entertainment", label: "Entretenimiento" },
  { value: "health", label: "Salud" },
  { value: "science", label: "Ciencia" },
  { value: "sports", label: "Deportes" },
  { value: "technology", label: "Tecnología" },
];

const Formulario = (): JSX.Element => {
    const {categoria,handleChangeCategoria} = useNoticias()
  return (
    <form>
      <FormControl fullWidth>
        <InputLabel>Categoría</InputLabel>
        <Select label="Categoría" onChange={handleChangeCategoria} value={categoria}>
          {CATEGORIAS.map(({ value, label }) => (
            <MenuItem key={value} value={value}>
              {label}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </form>
  );
};

export default Formulario;

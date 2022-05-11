import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Button,
  Box,
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
  return (
    <form>
      <FormControl fullWidth>
        <InputLabel>Categoría</InputLabel>
        <Select label="Categoría">
          {CATEGORIAS.map(({ value, label }) => (
            <MenuItem key={value} value={value}>
              {label}
            </MenuItem>
          ))}
        </Select>
        <Box sx={{marginTop:2}}>

        <Button fullWidth variant='contained' color='primary'>
            Buscar Noticias
        </Button>
        </Box>
      </FormControl>
    </form>
  );
};

export default Formulario;

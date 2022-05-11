import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import useNoticias from "../hooks/useNoticias";
import type { Article } from "../types/index";
import Noticia from "./Noticia";
import { ChangeEvent } from "react";

interface DesestructuringUseNoticias {
  noticias: Article[];
  totalNoticias: number;
  handleChangePagina: (event: ChangeEvent<unknown>, page: number) => void;
  pagina : number;
}

const ListadoNoticias = (): JSX.Element => {
  const {
    noticias,
    totalNoticias,
    handleChangePagina,
    pagina
  }: DesestructuringUseNoticias = useNoticias();
  const totalPaginas = Math.ceil(totalNoticias / 20);
  return (
    <>
      <Typography textAlign="center" marginY={5} variant="h3" component="h2">
        Últimas Noticias
      </Typography>
      <Grid container spacing={3}>
        {noticias.map((noticia) => (
          <Noticia key={noticia.url} noticia={noticia} />
        ))}
      </Grid>
      <Stack
        spacing={2}
        direction="row"
        justifyContent="center"
        alignItems="center"
        sx={{ marginY: 5 }}
      >
        <Pagination
          count={totalPaginas}
          color="primary"
          page={pagina}
          onChange={handleChangePagina}
        />
      </Stack>
    </>
  );
};

export default ListadoNoticias;

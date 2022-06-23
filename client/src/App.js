import "./App.css";
import DisplayMovieData from "./components/displayMovie/displayMovies";
import Container from "@mui/material/Container";
import MoviesSearchBox from "./components/moviesSearchBox/moviesSearchBox";
import Grid from "@mui/material/Grid";
import AddMovieBox from "./components/addMovieBox/addMovieBox";

function App() {
  return (
    <div className="background">
      <Container fixed className="App">
        <Grid
          container
          spacing={3}
          rowSpacing={1}
          columnSpacing={{ md: 1 }}
          justifyContent="center"
          rowGap={2}
        >
          <Grid item md={5}>
            <MoviesSearchBox />
          </Grid>
          <Grid item>
            <AddMovieBox />
          </Grid>
          <Grid item>
            <DisplayMovieData />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default App;

import "./App.css";
import DisplayMovie from "./components/displayMovie/displayMovies";
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
          spacing={5}
          rowSpacing={2}
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
            <DisplayMovie />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default App;

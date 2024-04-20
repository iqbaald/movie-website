import "./App.css";
import { getMovieList, searchMovie } from "./api";
import { useEffect, useState } from "react";

function App() {
  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    getMovieList().then((response) => {
      setMovieList(response);
    });
  }, []);

  const ListOfMovie = () => {
    return movieList.map((movie) => {
      return (
        <div className="Movie-wrapper" key={movie.id}>
          <div className="Movie-title">{movie.title}</div>
          <img
            className="Movie-image"
            src={`${process.env.REACT_APP_BASEIMGURL}/${movie.poster_path}`}
            alt={movie.title}
          />
          <div className="Movie-date">Release : {movie.release_date}</div>
          <div className="Movie-rate">{movie.vote_average}</div>
        </div>
      );
    });
  };

  // const [debouncedValue] = useDebounce(search, 3000);

  const search = async (q) => {
    if (q.length > 3) {
      const query = await searchMovie(q);
      setMovieList(query.results);
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Movie in Aja</h1>
        <input
          placeholder="Cari film..."
          className="Movie-search"
          onChange={({ target }) => {
            search(target.value);
          }}
        />
        <div className="Movie-container">
          <ListOfMovie />
        </div>
      </header>
    </div>
  );
}

export default App;

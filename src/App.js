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

  const search = (q) => {
    console.log({ q });
  };

  console.log({ movieList: movieList });

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
          <div className="Movie-wrapper">
            <div className="Movie-title">Fallout</div>
            <img className="Movie-image" src="" />
            <div className="Movie-date">23-04-2024</div>
            <div className="Movie-rate">8.9</div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;

import { useState, useEffect } from "react";

import "./App.css";

import SearchIcon from "./search.svg";

import MovieCard from "./MovieCard";

// f4d08845

const API_UR = "https://www.omdbapi.com?apikey=f4d08845";

const App = () => {
  const [movies, setMovies] = useState([]);
  const [serchTerm, setSerchTerm] = useState([])
  const searchMovies = async (title) => {
    const response = await fetch(`${API_UR}&s=${title}`);

    const data = await response.json();

    setMovies(data.Search);
  };

  useEffect(() => {
    searchMovies("Spiderman");
  }, []);

  return (
    <>
      <div className="app">
        <h1>Movie Land</h1>

        <div className="search">
          <input
            placeholder="Serch for Movies"
            value={serchTerm}
            onChange={(e) => setSerchTerm(e.target.value)}
            onKeyUp={() => searchMovies(serchTerm)}
          />
          <img src={SearchIcon} alt="serch" onClick={() => searchMovies(serchTerm)}></img>
        </div>

        {movies?.length > 0 ? (
          <div className="container">
            {movies.map((movie) => (
              <MovieCard movie={movie} />
            ))}
          </div>
        ) : (
          <div className="empty">
            <h2>No movies Found</h2>
          </div>
        )}
      </div>
    </>
  );
};

export default App;

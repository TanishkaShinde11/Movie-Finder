import React, { useState, useEffect } from "react";
import MovieCard from "./components/MovieCard";

const API_URL = "https://www.omdbapi.com/?apikey=4f074151";

function App() {
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState("");

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();

    // direct set – no genres, no full movie fetch
    setMovies(data.Search || []);
  };

  useEffect(() => {
    searchMovies("Avengers");
  }, []);

  return (
    <div className="app">
      <h1>Movie Finder</h1>

      <div className="search">
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search for movies"
        />

        <button onClick={() => searchMovies(search)}>Search</button>
      </div>

      <div className="container">
        {movies.length > 0 ? (
          movies.map((movie) => (
            <MovieCard key={movie.imdbID} movie={movie} />
          ))
        ) : (
          <h2>No movies found</h2>
        )}
      </div>
    </div>
  );
}

export default App;

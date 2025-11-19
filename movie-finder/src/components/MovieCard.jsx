import React from "react";

function MovieCard({ movie }) {
  return (
    <div className="movie-card">
      <div className="movie-img">
        <img
  src={
    movie.Poster !== "N/A"
      ? movie.Poster
      : "/noimage.jpg"   // your custom image
  }
  alt={movie.Title}
/>

      </div>

      <div className="movie-info">
        <h3>{movie.Title}</h3>
        <p className="year">{movie.Year}</p>

        <p className="genre">{movie.Genre}</p>

        <button
          className="imdb-btn"
          onClick={() =>
            window.open(`https://www.imdb.com/title/${movie.imdbID}`, "_blank")
          }
        >
          Open IMDb
        </button>
      </div>
    </div>
  );
}

export default MovieCard;

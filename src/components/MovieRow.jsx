import React from "react";
import "./MovieRow.css";

const MovieRow = ({ movie }) => {
  return (
    <div className="movieRow">
      <h2>{movie.title}</h2>
      <div className="movieRow__area">
        <div className="movieRow__list">
          {movie.items.results.length > 0 &&
            movie.items.results.map((movie, key) => (
              <div key={key} className="movieRow__item">
                <img
                src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
                alt={movie.original_title}
              />
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default MovieRow;

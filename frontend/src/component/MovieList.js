// MovieList.js

import React from 'react';
import MovieItem from './MovieItem';
import movie from '../data/movies';

const MovieList = ({ addToCart }) => {
  return (
    <div className="movie-list">
      {movie.map(movie => (
        <MovieItem key={movie.id} movie={movie} onAddToCart={addToCart} />
      ))}
    </div>
  );
};

export default MovieList;
// MovieItem.js

import React, { useState } from 'react';

const MovieItem = ({ movie, onAddToCart }) => {
  const [showDescription, setShowDescription] = useState(false);

  const handleMouseEnter = () => {
    setShowDescription(true);
  };

  const handleMouseLeave = () => {
    setShowDescription(false);
  };

  return (
    <div className="movie-item">
      <img src={movie.image} alt={movie.name} style={{width:'300px'}}/>
      <h3 onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        {movie.name}
      </h3> 
      <p>{movie.price}</p>
      <button onClick={() => onAddToCart(movie)}>Add to Cart</button>
        {showDescription && <p>{movie.description}</p>}
    </div>
  );
};

export default MovieItem;
import React from 'react';
import { useLocation } from 'react-router-dom';

const PurchasePage = () => {
  const { state } = useLocation();
  const { movieId, selectedSeats } = state;

  return (
    <div>
      <h2>Purchase Summary</h2>
      <p>Movie ID: {movieId}</p>
      <p>Selected Seats: {selectedSeats.join(', ')}</p>
      <button>Confirm Purchase</button>
    </div>
  );
};

export default PurchasePage;

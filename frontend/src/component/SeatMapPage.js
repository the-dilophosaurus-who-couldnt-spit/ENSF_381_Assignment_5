import React, { useEffect, useState } from 'react';

function SeatMapPage({ movieId, onProceedToPurchase }) {
  const [seatmap, setSeatmap] = useState([]); // Array to store seatmap data
  const [selectedSeats, setSelectedSeats] = useState([]); // Array to store selected seats
  const [error, setError] = useState(null); // State to handle error messages

  // Fetch seatmap on movieId change
  useEffect(() => {
    const fetchSeatmap = async () => {
      try {
        const response = await fetch(`http://127.0.0.1:5000/movies/${movieId}/seatmap`);
        if (response.ok) {
          const data = await response.json();
          setSeatmap(data.rows); // Access the 'rows' key from backend response
          setError(null); // Reset error state if fetch is successful
        } else {
          console.error('Failed to fetch seatmap:', response.status);
          setError('Failed to load seatmap. Please try again.');
        }
      } catch (error) {
        console.error('Error fetching seatmap:', error);
        setError('Error fetching seatmap. Please check your connection.');
      }
    };
    fetchSeatmap();
  }, [movieId]); // Re-run this effect when movieId changes  

  // Function to handle seat selection (toggle between selected/deselected)
  const handleSeatClick = (row, seatNumber) => {
    const seatKey = `${row}${seatNumber}`; // Unique identifier for seat
    setSelectedSeats((prev) =>
      prev.includes(seatKey) ? prev.filter((key) => key !== seatKey) : [...prev, seatKey]
    );
  };

  return (
    <div>
      <h1>Seatmap for Movie ID: {movieId}</h1>
      
      {/* Display error if fetching fails */}
      {error && <div style={{ color: 'red', marginBottom: '10px' }}>{error}</div>}
      
      <div className="seatmap">
        {seatmap.length === 0 ? (
          <p>Loading seatmap...</p>
        ) : (
          seatmap.map((row, rowIndex) => (
            <div key={rowIndex} className="seat-row">
              <span className="row-label">{row.row}:</span>
              {row.seats.map((seat, seatIndex) => (
                <button
                  key={seatIndex}
                  onClick={() => handleSeatClick(row.row, seat.number)}
                  style={{
                    backgroundColor: selectedSeats.includes(`${row.row}${seat.number}`)
                      ? 'green'  // Selected seat
                      : seat.available
                      ? 'gray'  // Available seat
                      : 'red',  // Unavailable seat
                    margin: '5px',
                    padding: '10px',
                    cursor: seat.available ? 'pointer' : 'not-allowed',  // Disable cursor for unavailable seats
                  }}
                  disabled={!seat.available}  // Disable the button if the seat is unavailable
                >
                  {seat.number}
                </button>
              ))}
            </div>
          ))
        )}
      </div>

      <button
        onClick={onProceedToPurchase}
        disabled={selectedSeats.length === 0}  // Disable button if no seat is selected
        style={{
          marginTop: '20px',
          padding: '10px 20px',
          backgroundColor: selectedSeats.length > 0 ? 'blue' : 'lightgray',
          color: 'white',
          cursor: selectedSeats.length > 0 ? 'pointer' : 'not-allowed',
        }}
      >
        Proceed to Purchase
      </button>
    </div>
  );
}

export default SeatMapPage;

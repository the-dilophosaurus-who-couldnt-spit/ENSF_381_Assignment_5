import React, { useEffect, useState } from 'react';

const MyTicketsPage = () => {
  const [tickets, setTickets] = useState([]);

  useEffect(() => {
    fetch('http://127.0.0.1:5000/tickets/user1')
      .then(response => response.json())
      .then(data => setTickets(data));
  }, []);

  const handleRefund = (ticket) => {
    fetch('http://127.0.0.1:5000/tickets/refund', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(ticket),
    })
      .then(response => response.json())
      .then(() => {
        setTickets(tickets.filter(t => t !== ticket));
      });
  };

  return (
    <div>
      <h2>My Tickets</h2>
      {tickets.map((ticket, index) => (
        <div key={index}>
          <p>Movie: {ticket.movie_id}</p>
          <p>Seat: {ticket.seat}</p>
          <button onClick={() => handleRefund(ticket)}>Refund</button>
        </div>
      ))}
    </div>
  );
};

export default MyTicketsPage;

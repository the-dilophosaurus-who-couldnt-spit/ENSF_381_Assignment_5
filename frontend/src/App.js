// App.js

import React from 'react';
import { AuthProvider } from './component/AuthContext'; // Import the Authentication context
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './component/HomePage';
import MoviePage from './component/MoviePage';
import LoginPage from './component/LoginPage';
import SeatMapPage from './component/SeatMapPage';
import MyTicketsPage from './component/MyTicketsPage';


const App = () => {
  return (
    <Router>
      <AuthProvider> {/* Wrap your Routes with AuthProvider */}
        <div>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/movies" element={<MoviePage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/movies/:id/seatmap" element={<SeatMapPage />} />
            <Route path="/mytickets" element={<MyTicketsPage />} />
          </Routes>
        </div>
      </AuthProvider>
    </Router>
  );
};

export default App;

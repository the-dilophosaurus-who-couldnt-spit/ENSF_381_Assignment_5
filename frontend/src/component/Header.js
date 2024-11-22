// Header.js

import React from 'react';
import { Link } from 'react-router-dom';



const Header = () => {
  return (
    <header>
        <div className = "logo-name" style ={{display :'flex', justifyContent: 'space-between', padding:10}} >
            <div className="logo">
                <img src="/images/logo.png" alt="Logo" style ={{width:50}}/>
            </div>
            <div className="company-name">
                ACMEPlex
            </div>
        </div>

        <div className="navigation" style ={{display :'flex', justifyContent: 'space-between', padding:10}}>
         <Link to="/">Home</Link>
         <Link to="/movies">Movies</Link>
         <Link to="/login">Login</Link>
         <Link to="/my_tickets">My Tickets Page</Link>
         </div>
    </header>
  );
};

export default Header;
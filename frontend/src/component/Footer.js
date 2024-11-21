// Footer.js

import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="copyright">
        &copy; {new Date().getFullYear()} ACMEPlex. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;

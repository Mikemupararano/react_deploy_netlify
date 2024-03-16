import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import Logo from './logo.png';

function Navbar() {
  const [openLinks, setOpenLinks] = useState(false);

  const toggleNavbar = () => {
    setOpenLinks(!openLinks);
  };

  return (
    <div className="container-fluid text-white">
      <nav className="navbar">
        {/* Logo and toggle button */}
        <div className={`leftSide ${openLinks ? 'open' : 'close'}`}>
          <Link to="/">
            <img src={Logo} alt="logo" className="logo" />
          </Link>
          {/* <h1>CodeCraft</h1> */}
          <div className="hiddenLinks"></div>
        </div>
        {/* Navbar links */}
        <div className="rightSide">
          <Link to="/">Home</Link>
          <Link to="/about">About Us</Link> 
          <Link to="/module">Module Pages</Link> 
          {/* Add more navbar links as needed */}
        </div>
      </nav>
    </div>
  );
}

export default Navbar;

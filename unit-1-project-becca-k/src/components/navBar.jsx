import React from 'react';
import { Link } from 'react-router-dom'; // Required for navigation
import './index.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">Self Love Bombs</div>
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/aboutPage">About</Link></li>
        <li><Link to="/tempCheck">Temp Check</Link></li>
        <li><Link to="/createYourOwn">Create Your Own</Link></li>
        <li><Link to="/resources">Resources</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
  
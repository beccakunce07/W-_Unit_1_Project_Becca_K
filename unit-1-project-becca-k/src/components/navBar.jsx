import React from 'react';
import { Routes, Route, BrowserRouter, Link} from "react-router-dom";
import '../index.css';
import TempCheckPage from '../pages/TempCheckPage';
import AboutPage from '../pages/aboutPage';
import CreateYourOwnSLBPage from '../pages/CreateYourOwnPage';
import HomePage from '../pages/homePage';

const Navbar = () => {
  return (
    <>  
    <div className = "navbar">
    
    <nav className="navbar">
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/AboutPage">About</Link></li>
        <li><Link to="/TempCheckPage">Temp Check</Link></li>
        <li><Link to="/CreateYourOwnPage">Create Your Own</Link></li>
      </ul>
      </nav>
    
    
    </div>   
    </>
 
  );
};

export default Navbar;
  
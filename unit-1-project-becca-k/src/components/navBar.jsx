import React from 'react';
import { Routes, Route, BrowserRouter, Link} from "react-router-dom";
import '../index.css';
import TempCheckPage from '../pages/TempCheckPage';
import AboutPage from '../pages/aboutPage';
import CreateYourOwnSLBPage from '../pages/CreateYourOwnPage';

const Navbar = () => {
  return (
  <div>
    <BrowserRouter>
    <nav className="navbar">
      <div className="logo">Self Love Bombs</div>
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/AboutPage">About</Link></li>
        <li><Link to="/TempCheckPage">Temp Check</Link></li>
        <li><Link to="/CreateYourOwnPage">Create Your Own</Link></li>
      </ul>
      </nav>
      <Routes>
      <Route path = '/AboutPage' element ={<h1>About Page</h1>}></Route>
      <Route path = '/HomePage' element ={<h1>Home Page</h1>}></Route>
      <Route path = '/TempCheckPage' element ={<TempCheckPage/>}></Route>
      <Route path = '/CreateYourOwnPage' element ={<CreateYourOwnSLBPage></CreateYourOwnSLBPage>}></Route>      
    </Routes>
    </BrowserRouter>
    </div>    
  );
};

export default Navbar;
  
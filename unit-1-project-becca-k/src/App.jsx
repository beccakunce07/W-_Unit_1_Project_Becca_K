import React from 'react';
import { Routes, Route, Link} from "react-router-dom";
// import '../index.css';
import AboutPage from './pages/aboutPage.jsx';
import HomePage from './pages/homePage.jsx';
import TempCheckPage from './pages/TempCheckPage.jsx';
import CreateYourOwnSLBPage from './pages/CreateYourOwnPage.jsx';

function App() {
  
  return (
    <>
    <main>  
         <nav className="navbar">
            <ul className="nav-links">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/AboutPage">About</Link></li>
              <li><Link to="/TempCheckPage">Temp Check</Link></li>
              <li><Link to="/CreateYourOwnPage">Create Your Own</Link></li>
            </ul>
            </nav>
      <Routes>
      <Route path = '/AboutPage' element ={<AboutPage></AboutPage>}></Route>
      <Route path = '/HomePage' element ={<HomePage></HomePage>}></Route>
      <Route path = '/TempCheckPage' element ={<TempCheckPage/>}></Route>
      <Route path = '/CreateYourOwnPage' element ={<CreateYourOwnSLBPage></CreateYourOwnSLBPage>}></Route>      
      </Routes>
     
    </main>
   
    
    
    </>
  )
}

export default App
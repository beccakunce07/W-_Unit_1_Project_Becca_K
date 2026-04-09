import React from 'react';
import { Routes, Route, Link} from "react-router-dom";
// import '../index.css';
import AboutPage from './pages/aboutPage.jsx';
import HomePage from './pages/homePage.jsx';
import TempCheckPage from './pages/TempCheckPage.jsx';
import CreateYourOwnSLBPage from './pages/CreateYourOwnPage.jsx';
import Navbar from './components/navBar.jsx';

function App() {
  
  return (
    <>

    <Navbar></Navbar>
      <Routes>
      <Route path = '/AboutPage' element ={<AboutPage></AboutPage>}></Route>
      <Route path = '/HomePage' element ={<HomePage></HomePage>}></Route>
      <Route path = '/TempCheckPage' element ={<TempCheckPage/>}></Route>
      <Route path = '/CreateYourOwnPage' element ={<CreateYourOwnSLBPage></CreateYourOwnSLBPage>}></Route>      
      </Routes>
     
    
   
    
    
    </>
  )
}

export default App
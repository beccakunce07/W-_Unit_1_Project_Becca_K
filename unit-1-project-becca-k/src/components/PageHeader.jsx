import React from 'react';
import NavBar from './navBar';
// import logo from '/assets/SelfLoveBombWithText.png'

function PageHeader () {
    return (
        <div>
        <header className="pageHeader">
            {/* <div className="logo">return <img src={logo} alt="Project Logo" />;</div> */}
           
         <NavBar>
        </NavBar>
        </header>
        </div>
    )
}

export default PageHeader;

//should have logo
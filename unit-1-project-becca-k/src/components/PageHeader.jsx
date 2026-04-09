import React from 'react';
import NavBar from './navBar';
// import logoWithWords from '../assets/SelfLoveBombwithText.png'



function PageHeader () {
    return (
        <div>
        <header className="pageHeader"> 
             {/* <img 
                    src={logoWithWords}
                    style = {{width:'900px', height: 'auto', align: 'center'}}
                    alt="An outline of a heart with lit fuses on the ends. The words 'Self Love Bombs' in soft font. Sub text 'Because love only needs a spark.'" /> */}
         <NavBar>
        </NavBar>
        </header>
        </div>
    )
}

export default PageHeader;

//should have logo
import NavBar from './NavBar.jsx';
import SlbButton from './SlbButton.jsx';
import {SelfLoveBombImage} from "./SelfLoveBombImage.jsx";
import React, {useEffect} from 'react';

function PageHeader ({title}) {

    useEffect(() => {
    document.title = title;
}, [title]);


    return (
        <>
        <header>
            <div className = "header-inset">
            <SlbButton />
            <h1 class = "main-title"> {title}</h1>
            </div>
            <NavBar />
        </header>
        </>        
    )
}
export default PageHeader;

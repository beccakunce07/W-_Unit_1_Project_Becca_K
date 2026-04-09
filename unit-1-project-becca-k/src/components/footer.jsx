import React from 'react'
import logo from  '../assets/SelfLoveBomb.png'


function PageFooter() {
    return (
        <footer>
            <div>
                 <img 
                src = {logo}
                style = {{width:'100px', height: 'auto', align: 'center'}}
                /><p> &copy; 2026 Becca Kunce All Rights Reserved</p>
                
            </div>
        </footer>
    )
}

export default PageFooter;



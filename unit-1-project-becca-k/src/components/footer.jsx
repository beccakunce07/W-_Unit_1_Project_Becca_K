import logo from  '../assets/SelfLoveBomb.png'
import { Link } from 'react-router-dom'


function PageFooter() {
    return (
        <footer>
            <>
            <div className = "pageFooter">
                <img src = {logo}/>
                <h3>
                    &copy; 2026 Becca Kunce. All Rights Reserved
        
                </h3>
                <ul>
                    <li><Link to="https://www.linkedin.com/in/becca-kunce-a0013255/">Connect On LinkedIn</Link></li>
                </ul>
            </div>
            </>
        </footer>
    )
}

export default PageFooter;



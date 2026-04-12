import {SelfLoveBombWithTextImage} from './SelfLoveBombWithTextImage.jsx'
import { Link } from 'react-router-dom';
import {ContactUsForm} from './ContactUsForm.jsx';


function PageFooter() {
    return (
        <footer>
            <>
            <div className = "footer-container">
                <img src = {SelfLoveBombWithTextImage} alt = "An outline of a heart with lit fuses on the ends." />
                <p>
                    &copy; 2026 Becca Kunce. All Rights Reserved
        
                </p>
                <ul>
                    <li><Link to="https://www.linkedin.com/in/becca-kunce-a0013255/">Connect On LinkedIn</Link></li>
                    <li>Email: rebeccakunce@gmail.com</li>
                </ul>
                <ContactUsForm />
            </div>
            </>
        </footer>
    )
}

export default PageFooter;



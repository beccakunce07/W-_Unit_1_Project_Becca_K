import {Link} from 'react-router-dom';
import ContactUsForm from './ContactUsForm.jsx';


function PageFooter() {
    return (
        <footer>
                {/* <div className="footer-container"> */}
                    
                    <div><Link to="https://www.linkedin.com/in/becca-kunce-a0013255/">|| Hire Me ||</Link></div>

                    <a href="mailto:rebeccakunce@gmail.com">|| Email Me ||</a>
                    <p>
                        || &copy; 2026 Becca Kunce. All Rights Reserved ||
                    </p>
                    
                <ContactUsForm/>
        </footer>
    )
}

export default PageFooter;



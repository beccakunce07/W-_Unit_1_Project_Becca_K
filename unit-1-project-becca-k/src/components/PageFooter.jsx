import {Link} from 'react-router-dom';
import ContactUsForm from './ContactUsForm.jsx';


function PageFooter() {
    return (
        <footer>
            <>
                <div className="footer-container">
                    <p>
                        &copy; 2026 Becca Kunce. All Rights Reserved
                    </p>
                    <div><Link to="https://www.linkedin.com/in/becca-kunce-a0013255/">Connect On LinkedIn</Link></div>
                    <div>Email: rebeccakunce@gmail.com</div>

                    <ContactUsForm/>
                </div>
            </>
        </footer>
    )
}

export default PageFooter;



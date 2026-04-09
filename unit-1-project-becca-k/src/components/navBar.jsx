import { Link} from "react-router-dom";
import '../index.css';
// import TempCheckPage from '../pages/TempCheckPage';
// import AboutPage from '../pages/aboutPage';
// import CreateYourOwnSLBPage from '../pages/CreateYourOwnPage';
// import HomePage from '../pages/homePage';

const Navbar = () => {
  return (
    <>  
    <div className = "navbar">
    <nav>
      <ul id = "links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/AboutPage">About</Link></li>
        <li><Link to="/TempCheckPage">Temp Check</Link></li>
        <li><Link to="/CreateYourOwnPage">Create Your Own</Link></li>
      </ul>
      </nav>
    
    </div>   
    </>
 
  );
};

export default Navbar;
  
import { Link} from "react-router-dom";

const Navbar = () => {
  return (
    <>  
    <nav>
    <div className = "navbar">
      <ul id = "links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/AboutPage">About</Link></li>
        <li><Link to="/TempCheckPage">Temp Check</Link></li>
        <li><Link to="/CreateYourOwnPage">Create Your Own</Link></li>
        <li><Link to="/FetchAnimalPage">Pet Inspiration</Link></li>
      </ul>
    </div>   
    </nav>
    </>
 
  );
};

export default Navbar;
  
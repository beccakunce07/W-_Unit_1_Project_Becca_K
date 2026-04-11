import { Link} from "react-router-dom";

const Navbar = () => {
  return (
    <>  
    <nav>
    <div className = "navbar">
      <ul>
        <li><Link to="/">You're Home</Link></li>
        <li><Link to="/AboutPage">About Self Love Bombs</Link></li>
        <li><Link to="/TempCheckPage">Check In</Link></li>
        <li><Link to="/CreateYourOwnPage">Create Your Own Love Bomb</Link></li>
        <li><Link to="/FetchAnimalPage">Pet Inspiration</Link></li>
      </ul>
    </div>   
    </nav>
    </>
 
  );
};

export default Navbar;
  
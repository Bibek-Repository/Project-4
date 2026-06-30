
import '../index.css';
import { Link } from "react-router-dom";
import logo from "../assets/ai_solutions_logo.png";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        <Link to="/" className="logo">
          <img src={logo} alt="AI Solutions Logo" className="logo-img" />
        </Link>
      </div>
      
      

      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/About">About Us</Link></li>
        <li><Link to="/Reviews">Customer Ratings & Feedbacks</Link></li>
        <li><Link to="/Contact">Contact Us</Link></li>
        <li><Link to="/GalleryBlog">Photo Galleries and Blogs</Link></li>
        <li><Link to="/Events">Events Timeline</Link></li>
        <li><Link to="/FinalServices">Provided Software Solutions</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
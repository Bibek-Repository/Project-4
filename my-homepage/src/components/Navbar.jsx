
// import '../index.css';
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">Bibek Baiju</div>

      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/About">About Us</Link></li>
        <li><Link to="/Reviews">Customer Ratings & Feedbacks</Link></li>
        <li><Link to="/Contact">Contact Us</Link></li>
        <li><Link to="/GalleryBlog">Photo Galleries and Blogs</Link></li>
        <li><Link to="/">Events Timeline</Link></li>
        <li><Link to="/">Provided Software Solutions</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
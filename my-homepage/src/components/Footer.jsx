import {
  FaLinkedinIn,
  FaFacebookF,
  FaXTwitter,
  FaInstagram,
  FaYoutube
} from "react-icons/fa6";

import "./Footer.css";
import logo from "../assets/ai_solutions_logo.png";

function Footer() {
return (
<footer className="footer">
  <div className="footer-container">
    <div className="footer-column">
      <img src={logo} alt="AI Solutions Logo" className="logo-img" />

      <p className="footer-description">
        AI Solutions delivers innovative AI-powered software,
        automation tools, virtual assistants, and digital transformation services to businesses worldwide.
      </p>
    </div>

    <div className="footer-column">
      <h3>Quick Linkgs</h3>

      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/about">About Us</a></li>
        <li><a href="/FinalServices">Solutions</a></li>
        <li><a href="/events">Events</a></li>
        <li><a href="/galleryblog">Blogs</a></li>
        <li><a href="/contact">Contact</a></li>
      </ul>
    </div>

    <div className="footer-column">
      <h3>Our Services</h3>

      <ul>
        <li><a href="/FinalServices">AI Virtual Assistants</a></li>
        <li><a href="/FinalServices">Machine Learning Solutions</a></li>
        <li><a href="/FinalServices">Custom Software Development</a></li>
        <li><a href="/FinalServices">Data Analytics</a></li>
        <li><a href="/FinalServices">Cloud Integration</a></li>
        <li><a href="/FinalServices">Business Automation</a></li>
      </ul>
    </div>

    <div className="footer-column">
      <h3>Contact Us</h3>

      <p>📍 Sunderland, United Kingdom</p>
      <p>📞 +44 1234 567890</p>
      <p>✉ info@aisolutions.com</p>

      <div className="social-icons">
        <a
          href = "https://linkedin.com"
          target="_blank"
          rel = "noopener noreferrer">
            <FaLinkedinIn />
        </a>

        <a
          href="https://facebook.com"
          target="_blank"
          rel="noopener noreferrer">
            <FaFacebookF />
        </a>

        <a
          href="https://x.com"
          target="_blank"
          rel="noopener noreferrer">
            <FaXTwitter />
        </a>

        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer">
            <FaInstagram />
        </a>
              
        <a 
          href="https://youtube.com"
          target="_blank"
          rel="noopener noreferrer">
            <FaYoutube />
        </a>
      </div>
    </div>
  </div>

  <div className="footer-bottom">
    <p>
      © 2026 AI Solutions. All Rights Reserved.
    </p>
  </div>
    
</footer>
);
}

export default Footer;
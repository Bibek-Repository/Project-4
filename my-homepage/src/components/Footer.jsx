import {
  FaLinkedinIn,
  FaFacebookF,
  FaXTwitter,
  FaInstagram,
  FaYoutube
} from "react-icons/fa6";

import "./Footer.css";

function Footer() {
return (
<footer className="footer">
  <div className="footer-container">
    <div className="footer-column">
      <img src="/logo.png" alt = "AI Solutions Logo" className="footer-logo"/>

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
        <li><a href="/services">Solutions</a></li>
        <li><a href="/events">Events</a></li>
        <li><a href="/galleryblog">Blogs</a></li>
        <li><a href="/contact">Contact</a></li>
      </ul>
    </div>

    <div className="footer-column">
      <h3>Our Services</h3>

      <ul>
        <li>AI Virtual Assistants</li>
        <li>Machine Learning Solutions</li>
        <li>Custom Software Development</li>
        <li>Data Analytics</li>
        <li>Cloud Integration</li>
        <li>Business Automation</li>
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
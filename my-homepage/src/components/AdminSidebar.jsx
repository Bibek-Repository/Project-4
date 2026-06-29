import { NavLink } from "react-router-dom";
import "./AdminSidebar.css";
import { Link } from "react-router-dom";

import {
  FaTachometerAlt,
  FaCalendarAlt,
  FaBlog,
  FaCogs,
  FaEnvelope,
  FaCog,
  FaKey,
  FaSignOutAlt,
  FaImages,
} from "react-icons/fa";

function AdminSidebar() {
  return (
    <div className="admin-sidebar">
      <div className="sidebar-logo">AI Solutions</div>

      <ul>
        <NavLink to="/admin/dashboard">
          <li>
            <FaTachometerAlt /> Dashboard
          </li>
        </NavLink>

        <NavLink to="/admin/events">
          <li>
            <FaCalendarAlt /> Events
          </li>
        </NavLink>

        <NavLink to="/admin/gallery">
          <li>
            <FaImages /> Gallery
          </li>
        </NavLink>

        <NavLink to="/admin/blogs">
          <li>
            <FaBlog /> Blogs
          </li>
        </NavLink>

        <NavLink to="/admin/services">
          <li>
            <FaCogs /> Services
          </li>
        </NavLink>

        <NavLink to="/admin/contacts">
          <li>
            <FaEnvelope /> Contacts
          </li>
        </NavLink>

        <NavLink to="/admin/settings">
          <li>
            <FaCog /> Settings
          </li>
        </NavLink>

        <NavLink to="/admin/password">
          <li>
            <FaKey /> Password
          </li>
        </NavLink>

        {/* <li>
          <FaSignOutAlt /> Logout
        </li> */}

        <li>
          <Link to="/admin/newsletter">Newsletter</Link>
        </li>

        <Link to="/admin/event-registrations">📝 Event Registrations</Link>
      </ul>
    </div>
  );
}

export default AdminSidebar;
import { NavLink, Link } from "react-router-dom";
import "./AdminSidebar.css";

import {
  FaTachometerAlt,
  FaCalendarAlt,
  FaBlog,
  FaCogs,
  FaEnvelope,
  FaCog,
  FaKey,
  FaImages,
} from "react-icons/fa";

function AdminSidebar({ sidebarOpen, setSidebarOpen }) {
  const closeSidebar = () => {
    setSidebarOpen(false);
  };

  return (
    <div className={`admin-sidebar ${sidebarOpen ? "open" : ""}`}>
      <div className="sidebar-logo">AI Solutions</div>

      <ul>
        <NavLink to="/admin/dashboard" onClick={closeSidebar}>
          <li>
            <FaTachometerAlt />
            <span>Dashboard</span>
          </li>
        </NavLink>

        <NavLink to="/admin/events" onClick={closeSidebar}>
          <li>
            <FaCalendarAlt />
            <span>Events</span>
          </li>
        </NavLink>

        <NavLink to="/admin/gallery" onClick={closeSidebar}>
          <li>
            <FaImages />
            <span>Gallery</span>
          </li>
        </NavLink>

        <NavLink to="/admin/blogs" onClick={closeSidebar}>
          <li>
            <FaBlog />
            <span>Blogs</span>
          </li>
        </NavLink>

        <NavLink to="/admin/services" onClick={closeSidebar}>
          <li>
            <FaCogs />
            <span>Services</span>
          </li>
        </NavLink>

        <NavLink to="/admin/contacts" onClick={closeSidebar}>
          <li>
            <FaEnvelope />
            <span>Contacts</span>
          </li>
        </NavLink>

        <NavLink to="/admin/settings" onClick={closeSidebar}>
          <li>
            <FaCog />
            <span>Settings</span>
          </li>
        </NavLink>

        <NavLink to="/admin/password" onClick={closeSidebar}>
          <li>
            <FaKey />
            <span>Password</span>
          </li>
        </NavLink>

        <li>
          <Link to="/admin/newsletter" onClick={closeSidebar}>
            📝 <span>Newsletter</span>
          </Link>
        </li>

        <li>
          <Link
            to="/admin/event-registrations"
            onClick={closeSidebar}
          >
            📝 <span>Event Registrations</span>
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default AdminSidebar;
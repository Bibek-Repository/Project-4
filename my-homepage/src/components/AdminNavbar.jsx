import { FaBars } from "react-icons/fa";
import "./AdminNavbar.css";

function AdminNavbar({ setSidebarOpen }) {
  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("admin");

    window.location.href = "/admin/login";
  };

  return (
    <div className="admin-navbar">

      <div className="navbar-left">

        <button
          className="mobile-menu-btn"
          onClick={() => setSidebarOpen(true)}
        >
          <FaBars />
        </button>

        <h2>Dashboard</h2>

      </div>

      <div className="navbar-right">

        <span>Welcome Admin</span>

        <button
          onClick={logout}
          className="logout-btn"
        >
          Logout
        </button>

      </div>

    </div>
  );
}

export default AdminNavbar;
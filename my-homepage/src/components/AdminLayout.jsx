import { useState } from "react";
import "./AdminLayout.css";

import AdminSidebar from "./AdminSidebar";
import AdminNavbar from "./AdminNavbar";

import { FaBars } from "react-icons/fa";

function AdminLayout({ children }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="admin-layout">
      {/* Mobile Overlay */}
      <div
        className={`sidebar-overlay ${sidebarOpen ? "show" : ""}`}
        onClick={() => setSidebarOpen(false)}
      />

      {/* Sidebar */}
      <AdminSidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

      <div className="admin-main">
        {/* Mobile Hamburger */}
        <AdminNavbar setSidebarOpen={setSidebarOpen} />

        <div className="admin-content">{children}</div>
      </div>
    </div>
  );
}

export default AdminLayout;
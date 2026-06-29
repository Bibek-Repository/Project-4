import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import AdminLayout from "../components/AdminLayout";
import DashboardChart from "../components/DashboardChart";

import {
  FaEnvelope,
  FaBlog,
  FaCalendarAlt,
  FaImages,
  FaCogs,
} from "react-icons/fa";

import "./Dashboard.css";

function Dashboard() {
  const navigate = useNavigate();

  const [stats, setStats] = useState({});
  const [loading, setLoading] = useState(true);

  const token = localStorage.getItem("token");

  useEffect(() => {
    const fetchDashboard = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/dashboard", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        const data = await response.json();

        setStats(data);
      } catch (error) {
        console.error("Dashboard Error:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchDashboard();
  }, [token]);

  if (loading) {
    return (
      <AdminLayout>
        <h2>Loading Dashboard...</h2>
      </AdminLayout>
    );
  }

  return (
    <AdminLayout>
      <h1>Dashboard</h1>

      <div className="dashboard-cards">
        <div className="dashboard-welcome">
          <div>
            <h1>Welcome back 👋</h1>
            <p>AI Solutions Admin Dashboard</p>
          </div>

          <div className="dashboard-date">
            {new Date().toLocaleDateString()}
          </div>
        </div>

        <div className="dashboard-card">
          <FaEnvelope className="card-icon" />
          <h2>{stats.totalContacts || 0}</h2>
          <p>Total Enquiries</p>
        </div>

        <div className="dashboard-card">
          <FaBlog className="card-icon" />
          <h2>{stats.totalBlogs || 0}</h2>
          <p>Total Blogs</p>
        </div>

        <div className="dashboard-card">
          <FaCalendarAlt className="card-icon" />
          <h2>{stats.totalEvents || 0}</h2>
          <p>Total Events</p>
        </div>

        <div className="dashboard-card">
          <FaImages className="card-icon" />
          <h2>{stats.totalGallery || 0}</h2>
          <p>Gallery Images</p>
        </div>

        <div className="dashboard-card">
          <FaCogs className="card-icon" />
          <h2>{stats.totalServices || 0}</h2>
          <p>Services</p>
        </div>
      </div>

      <div className="dashboard-grid">
        <div className="dashboard-panel">
          <h3>Monthly Enquiries</h3>
          <DashboardChart contacts={stats.allContacts || []} />
        </div>

        <div className="dashboard-panel">
          <h3>Recent Enquiries</h3>

          <ul>
            {stats.recentContacts?.length > 0 ? (
              stats.recentContacts.map((contact) => (
                <li key={contact._id}>
                  <strong>{contact.name}</strong>
                  <br />
                  <small>{contact.email}</small>
                </li>
              ))
            ) : (
              <li>No enquiries found</li>
            )}
          </ul>
        </div>
      </div>

      <div className="quick-actions">
        <h2>Quick Actions</h2>

        <div className="quick-grid">
          <button onClick={() => navigate("/admin/services")}>
            + Add Service
          </button>

          <button onClick={() => navigate("/admin/blogs")}>
            + Add Blog
          </button>

          <button onClick={() => navigate("/admin/events")}>
            + Add Event
          </button>

          <button onClick={() => navigate("/admin/gallery")}>
            Upload Gallery
          </button>

          <button onClick={() => navigate("/admin/settings")}>
            Website Settings
          </button>
        </div>
      </div>
    </AdminLayout>
  );
}

export default Dashboard;
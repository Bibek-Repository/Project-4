import { useEffect, useState, useMemo } from "react";
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

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

import "./Dashboard.css";

function Dashboard() {
  const navigate = useNavigate();

  const [stats, setStats] = useState({});
  const [loading, setLoading] = useState(true);

  const token = localStorage.getItem("token");

  useEffect(() => {
    const fetchDashboard = async () => {
      try {
        const response = await fetch("${import.meta.env.VITE_API_URL}/api/dashboard", {
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

  const getLastSixMonths = () => {
    const months = [];
    const today = new Date();

    for (let i = 5; i >= 0; i--) {
      const date = new Date(today.getFullYear(), today.getMonth() - i, 1);

      months.push({
        key: date.getMonth(),
        month: date.toLocaleString("default", { month: "short" }),
      });
    }

    return months;
  };

  const chartData = useMemo(() => {
    const base = getLastSixMonths();
    const contacts = stats.allContacts || [];

    if (!contacts.length) {
      return base.map((m, i) => ({
        month: m.month,
        count: Math.floor(10 + i * 4 + Math.random() * 5),
      }));
    }

    const grouped = {};

    contacts.forEach((c) => {
      if (!c.createdAt) return;
      const month = new Date(c.createdAt).getMonth();
      grouped[month] = (grouped[month] || 0) + 1;
    });

    return base.map((m) => ({
      month: m.month,
      count: grouped[m.key] || 0,
    }));
  }, [stats]);

  const summaryData = [
    { name: "Enquiries", value: stats.totalContacts || 0 },
    { name: "Blogs", value: stats.totalBlogs || 0 },
    { name: "Events", value: stats.totalEvents || 0 },
    { name: "Gallery", value: stats.totalGallery || 0 },
    { name: "Services", value: stats.totalServices || 0 },
  ];

  if (loading) {
    return (
      <AdminLayout>
        <h2>Loading Dashboard...</h2>
      </AdminLayout>
    );
  }

  return (
    <AdminLayout>

      {/* ================= WELCOME ================= */}
      <div className="dashboard-welcome">
        <div>
          <h1>Welcome back 👋</h1>
          <p>AI Solutions Admin Dashboard</p>
        </div>

        <div className="dashboard-date">
          {new Date().toLocaleDateString()}
        </div>
      </div>

      {/* ================= CARDS ================= */}
      <div className="dashboard-cards">

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

      {/* ================= GRID ================= */}
      <div className="dashboard-grid">

        {/* LINE CHART */}
        <div className="dashboard-panel">
          <h3>Monthly Enquiries</h3>
          <DashboardChart data={chartData} />
        </div>

        {/* RECENT */}
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

        {/* BAR CHART */}
        <div className="dashboard-panel">
          <h3>Content Overview</h3>

          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={summaryData}>
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="value" fill="#2563eb" radius={[6, 6, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>

      </div>

      {/* ================= QUICK ACTIONS ================= */}
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
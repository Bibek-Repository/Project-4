import { useEffect, useState} from "react";
import AdminLayout from "../components/AdminLayout";
import "./Dashboard.css";

function Dashboard() {

  const [stats, setStats] = useState({});
  const token = localStorage.getItem("token");

  useEffect(() => {
    fetch("http://localhost:5000/api/dashboard", {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
      .then(res => res.json())
      .then(data => {
        setStats(data);
      })
      .catch(err => console.log(err));
  }, []);

  return (
  <AdminLayout>

    <h1>Dashboard</h1>

    <div className="dashboard-cards">

      <div className="dashboard-card">
        <h2>{stats.totalEvents || 0}</h2>
        <p>Total Events</p>
      </div>

      <div className="dashboard-card">
        <h2>{stats.totalBlogs || 0}</h2>
        <p>Total Blogs</p>
      </div>

      <div className="dashboard-card">
        <h2>{stats.totalServices || 0}</h2>
        <p>Total Services</p>
      </div>

      <div className="dashboard-card">
        <h2>{stats.totalContacts || 0}</h2>
        <p>Total Enquiries</p>
      </div>

    </div>

    <div className="dashboard-grid">

      <div className="dashboard-panel">

        <h3>System Overview</h3>

        <ul>
          <li>Services Published: {stats.totalServices || 0}</li>
          <li>Blogs Published: {stats.totalBlogs || 0}</li>
          <li>Events Scheduled: {stats.totalEvents || 0}</li>
          <li>Customer Enquiries: {stats.totalContacts || 0}</li>
        </ul>

      </div>

      <div className="dashboard-panel">

        <h3>Recent Enquiries</h3>

        <ul>

          {stats.recentContacts &&
            stats.recentContacts.length > 0 ? (

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

  </AdminLayout>
);
}

export default Dashboard;


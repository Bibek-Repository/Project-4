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
          <h2>12</h2>
          <p>Total Events</p>
        </div>

        <div className="dashboard-card">
          <h2>8</h2>
          <p>Total Blogs</p>
        </div>

        <div className="dashboard-card">
          <h2>6</h2>
          <p>Total Services</p>
        </div>

        <div className="dashboard-card">
          <h2>24</h2>
          <p>Total Enquiries</p>
        </div>

      </div>

      <div className="dashboard-grid">

        <div className="dashboard-panel">

          <h3>Recent Activity</h3>

          <ul>
            <li>New enquiry received</li>
            <li>AI Summit event added</li>
            <li>Blog article updated</li>
            <li>Service portfolio modified</li>
          </ul>

        </div>

        <div className="dashboard-panel">

          <h3>Recent Enquiries</h3>

          <ul>
            <li>Ram Shrestha</li>
            <li>Hari Maharjan</li>
            <li>Bikesh Bhandari</li>
            <li>Rahul Joshi</li>
          </ul>

        </div>

      </div>

    </AdminLayout>
  );
}

export default Dashboard;


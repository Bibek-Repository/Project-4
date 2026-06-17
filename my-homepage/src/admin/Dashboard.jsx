import AdminLayout from "../components/AdminLayout";
import "./Dashboard.css";

function Dashboard() {
  return (
    <AdminLayout>

      <h1>Dashboard</h1>

      <div className="dashboard-cards">

        <div className="card">
          <h2>12</h2>
          <p>Events</p>
        </div>

        <div className="card">
          <h2>8</h2>
          <p>Blogs</p>
        </div>

        <div className="card">
          <h2>6</h2>
          <p>Services</p>
        </div>

        <div className="card">
          <h2>24</h2>
          <p>Enquiries</p>
        </div>

      </div>

    </AdminLayout>
  );
}

export default Dashboard;
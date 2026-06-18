import AdminLayout from "../components/AdminLayout";
import "./SiteSettings.css";

function SiteSettings() {
  return (
    <AdminLayout>

      <h1>Site Settings</h1>

      <form className="settings-form">

  <div className="settings-grid">

    <div className="form-group">
      <label>Site Name</label>
      <input
        type="text"
        defaultValue="AI Solutions"
      />
    </div>

    <div className="form-group">
      <label>Contact Email</label>
      <input
        type="email"
        defaultValue="admin@aisolutions.com"
      />
    </div>

  </div>

  <div className="form-group">
    <label>Logo Upload</label>
    <input type="file" />
  </div>

  <div className="form-group">
    <label>Timezone</label>

    <select>
      <option>Europe/London</option>
      <option>Asia/Kathmandu</option>
      <option>America/New_York</option>
    </select>
  </div>

  <button className="save-btn">
    Save Settings
  </button>

</form>

    

    </AdminLayout>
  );
}

export default SiteSettings;
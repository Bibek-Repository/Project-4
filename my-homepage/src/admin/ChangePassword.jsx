import AdminLayout from "../components/AdminLayout";
import "./ChangePassword.css";

function ChangePassword() {
  return (
    <AdminLayout>

      <div className="password-page">

        <h1>Change Password</h1>

        <div className="password-card">

          <form>

            <div className="form-group">
              <label>Current Password</label>
              <input
                type="password"
                placeholder="Enter current password"
              />
            </div>

            <div className="form-group">
              <label>New Password</label>
              <input
                type="password"
                placeholder="Enter new password"
              />
            </div>

            <div className="form-group">
              <label>Confirm New Password</label>
              <input
                type="password"
                placeholder="Confirm new password"
              />
            </div>

            <button
              type="submit"
              className="update-password-btn"
            >
              Update Password
            </button>

          </form>

        </div>

      </div>

    </AdminLayout>
  );
}

export default ChangePassword;
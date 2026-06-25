
function AdminNavbar() {

  const logout = () => {

    localStorage.removeItem("token");
    localStorage.removeItem("admin");

    window.location.href = "/admin/login";

  };

  return (
    <div className="admin-navbar">

      <h2>Dashboard</h2>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "15px",
        }}
      >
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


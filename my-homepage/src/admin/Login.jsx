import "./Login.css";

function Login() {
  return (
    <div className="login-page">

      <div className="login-card">

        <div className="login-header">
          <h1>AI Solutions</h1>
          <p>Admin Portal</p>
        </div>

        <form className="login-form">

          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              placeholder="admin@aisolutions.com"
            />
          </div>

          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              placeholder="Enter password"
            />
          </div>

          <button type="submit">
            Login
          </button>

        </form>

      </div>

    </div>
  );
}

export default Login;
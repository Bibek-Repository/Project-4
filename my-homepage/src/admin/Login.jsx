import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import API_URL from "../api/api";
import "./Login.css";

function Login() {

  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {

    e.preventDefault();

    setError("");
    setLoading(true);

    try {

      const res = await axios.post(
        `${API_URL}/auth/login`,
        {
          email,
          password,
        }
      );

      localStorage.setItem(
        "token",
        res.data.token
      );

      localStorage.setItem(
        "admin",
        JSON.stringify(res.data)
      );

      navigate("/admin/dashboard");

    } catch (err) {

      setError(
        err.response?.data?.message ||
        "Login failed. Please try again."
      );

    } finally {

      setLoading(false);

    }

  };

  return (
    <div className="login-page">

      <div className="login-card">

        <div className="login-header">
          <h1>AI Solutions</h1>
          <p>Admin Portal</p>

          {error && (
            <p className="error-message">
              {error}
            </p>
          )}
        </div>

        <form
          className="login-form"
          onSubmit={handleSubmit}
        >

          <div className="form-group">
            <label>Email</label>

            <input
              type="email"
              placeholder="admin@aisolutions.com"
              value={email}
              onChange={(e) =>
                setEmail(e.target.value)
              }
              required
            />
          </div>

          <div className="form-group">
            <label>Password</label>

            <input
              type="password"
              placeholder="Enter password"
              value={password}
              onChange={(e) =>
                setPassword(e.target.value)
              }
              required
            />
          </div>

          <button
            type="submit"
            disabled={loading}
          >
            {loading
              ? "Logging in..."
              : "Login"}
          </button>

        </form>

      </div>

    </div>
  );
}

export default Login;


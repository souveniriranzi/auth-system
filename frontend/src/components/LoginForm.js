// src/components/LoginForm.js
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import api from "../api";

export default function LoginForm() {
  const navigate = useNavigate();
  const [form, setForm] = useState({ email: "", password: "" });
  const [error, setError] = useState("");

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const res = await api.post("/login", form);
      if (res.data.success) {
        localStorage.setItem("token", res.data.token);
        navigate("/dashboard");
      } else {
        setError(res.data.message || "Invalid credentials");
      }
    } catch (err) {
      setError(err.response?.data?.message || "Server error");
    }
  };

  return (
    <div style={styles.right}>
      <form onSubmit={handleSubmit} style={styles.form}>
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          required
          style={styles.input}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={form.password}
          onChange={handleChange}
          required
          style={styles.input}
        />
        {error && <p style={styles.error}>{error}</p>}
        <button type="submit" style={styles.btnPrimary}>Login</button>
        <p style={styles.registerText}>
          No account? <Link to="/register" style={styles.registerLink}>Register here</Link>
        </p>
      </form>
    </div>
  );
}

// Inline styles
const styles = {
  right: {
    width: "350px",
    background: "white",
    padding: "40px",
    borderRadius: "12px",
    boxShadow: "0 4px 20px rgba(0,0,0,0.15)",
  },
  form: { display: "flex", flexDirection: "column" },
  input: { padding: "12px", margin: "10px 0", borderRadius: "6px", border: "1px solid #ccc", fontSize: "14px" },
  btnPrimary: {
    padding: "12px", background: "#2563eb", color: "white",
    border: "none", borderRadius: "8px", fontWeight: "bold",
    cursor: "pointer", marginTop: "10px"
  },
  error: { color: "red", fontSize: "13px" },
  registerText: { marginTop: "15px", fontSize: "14px", color: "#555" },
  registerLink: { color: "#10b981", textDecoration: "none", fontWeight: "bold" },
};
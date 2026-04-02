import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import Register from "./pages/register";
import api from "./api";

function Home() {
  const navigate = useNavigate();
  const [form, setForm] = useState({ email: "", password: "" });
  const [error, setError] = useState("");

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(""); // reset previous error

    try {
      const res = await api.post("/login", form); // call your backend
      if (res.data.success) {
        localStorage.setItem("token", res.data.token); // store token
        navigate("/dashboard"); // redirect after login
      } else {
        setError(res.data.message || "Invalid credentials");
      }
    } catch (err) {
      setError(err.response?.data?.message || "Server error");
    }
  };

  return (
    <div style={styles.container}>
      {/* Left: Welcome */}
      <div style={styles.left}>
        <h1 style={styles.welcomeTitle}>Welcome to My App</h1>
        <p style={styles.welcomeText}>
          Securely register and login to access your account.
        </p>
      </div>

      {/* Right: Login Form */}
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
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </Router>
  );
}

export default App;

// Inline CSS
const styles = {
  container: {
    display: "flex",
    minHeight: "100vh",
    background: "#f0f2f5",
    alignItems: "center",
    justifyContent: "center",
    padding: "0 50px",
  },
  left: {
    flex: 1,
    paddingRight: "50px",
  },
  welcomeTitle: {
    fontSize: "48px",
    margin: 0,
    color: "#111",
  },
  welcomeText: {
    fontSize: "18px",
    color: "#555",
    marginTop: "20px",
  },
  right: {
    width: "350px",
    background: "white",
    padding: "40px",
    borderRadius: "12px",
    boxShadow: "0 4px 20px rgba(0,0,0,0.15)",
  },
  form: {
    display: "flex",
    flexDirection: "column",
  },
  input: {
    padding: "12px",
    margin: "10px 0",
    borderRadius: "6px",
    border: "1px solid #ccc",
    fontSize: "14px",
  },
  btnPrimary: {
    padding: "12px",
    background: "#2563eb",
    color: "white",
    border: "none",
    borderRadius: "8px",
    fontWeight: "bold",
    cursor: "pointer",
    marginTop: "10px",
  },
  error: {
    color: "red",
    fontSize: "13px",
  },
  registerText: {
    marginTop: "15px",
    fontSize: "14px",
    color: "#555",
  },
  registerLink: {
    color: "#10b981",
    textDecoration: "none",
    fontWeight: "bold",
  },
};
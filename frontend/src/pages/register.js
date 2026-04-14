import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import api from "../api";

export default function Register() {
  const navigate = useNavigate();
  const [form, setForm] = useState({ username: "", email: "", password: "" });
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setError("");
    setMessage("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");
    setError("");
    setLoading(true);

    try {
      const res = await api.post("/api/auth/register", form);
      if (res.data.success) {
        setMessage("Account created successfully!");
        setTimeout(() => navigate("/login"), 1500);
      } else {
        setError(res.data.message || "Registration failed");
      }
    } catch (err) {
      setError(err.response?.data?.message || "Server error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={styles.container}>
      {/* Left Side - Green Gradient */}
      <div style={styles.leftSide}>
        <div style={styles.circleOverlay}></div>
        <div style={styles.welcomeContent}>
          <h1 style={styles.welcomeTitle}>Join us today!</h1>
          <p style={styles.welcomeText}>
            Create an account to get started and explore all the features we have to offer.
          </p>
        </div>
      </div>

      {/* Right Side - Register Form */}
      <div style={styles.rightSide}>
        <div style={styles.formCard}>
          <div style={styles.logoContainer}>
            <div style={styles.logoIcon}>🔐</div>
            <h2 style={styles.logoText}>Auth System</h2>
          </div>

          <h3 style={styles.formTitle}>Create your account</h3>
          <p style={styles.formSubtitle}>Fill in your details to get started</p>

          {message && (
            <div style={styles.successMessage}>
              <span style={styles.successIcon}>✅</span>
              {message}
            </div>
          )}

          {error && (
            <div style={styles.errorMessage}>
              <span style={styles.errorIcon}>⚠️</span>
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit}>
            <div style={styles.inputGroup}>
              <span style={styles.inputIcon}>👤</span>
              <input
                type="text"
                name="username"
                placeholder="Username"
                value={form.username}
                onChange={handleChange}
                required
                style={styles.input}
              />
            </div>

            <div style={styles.inputGroup}>
              <span style={styles.inputIcon}>📧</span>
              <input
                type="email"
                name="email"
                placeholder="Email address"
                value={form.email}
                onChange={handleChange}
                required
                style={styles.input}
              />
            </div>

            <div style={styles.inputGroup}>
              <span style={styles.inputIcon}>🔒</span>
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={form.password}
                onChange={handleChange}
                required
                style={styles.input}
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              style={{...styles.button, ...styles.primaryButton}}
            >
              {loading ? (
                <span style={styles.spinner}>⏳</span>
              ) : (
                <>
                  <span style={styles.buttonIcon}>📝</span>
                  Create account
                </>
              )}
            </button>
          </form>

          <div style={styles.divider}>
            <span style={styles.dividerLine}></span>
            <span style={styles.dividerText}>or</span>
            <span style={styles.dividerLine}></span>
          </div>

          <Link to="/" style={styles.homeLink}>
            <span>🏠</span> Go Home
          </Link>

          <p style={styles.loginText}>
            Already have an account?{" "}
            <Link to="/login" style={styles.link}>
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    minHeight: "100vh",
    fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, sans-serif",
  },
  leftSide: {
    flex: 1,
    background: "linear-gradient(135deg, #10b981 0%, #059669 50%, #047857 100%)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
    overflow: "hidden",
    padding: "40px",
  },
  circleOverlay: {
    position: "absolute",
    width: "600px",
    height: "600px",
    borderRadius: "50%",
    background: "rgba(255, 255, 255, 0.1)",
    top: "-200px",
    left: "-100px",
  },
  welcomeContent: {
    position: "relative",
    zIndex: 1,
    maxWidth: "400px",
    textAlign: "center",
  },
  welcomeTitle: {
    color: "#ffffff",
    fontSize: "42px",
    fontWeight: "700",
    marginBottom: "16px",
    lineHeight: 1.2,
  },
  welcomeText: {
    color: "rgba(255, 255, 255, 0.9)",
    fontSize: "16px",
    lineHeight: 1.6,
  },
  rightSide: {
    flex: 1,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "40px",
    backgroundColor: "#f8fafc",
  },
  formCard: {
    backgroundColor: "#ffffff",
    borderRadius: "16px",
    padding: "48px",
    boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
    width: "100%",
    maxWidth: "420px",
  },
  logoContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "12px",
    marginBottom: "32px",
  },
  logoIcon: {
    fontSize: "32px",
  },
  logoText: {
    fontSize: "24px",
    fontWeight: "700",
    color: "#10b981",
    margin: 0,
  },
  formTitle: {
    fontSize: "24px",
    fontWeight: "600",
    color: "#1f2937",
    marginBottom: "8px",
    textAlign: "center",
  },
  formSubtitle: {
    fontSize: "14px",
    color: "#6b7280",
    marginBottom: "24px",
    textAlign: "center",
  },
  successMessage: {
    backgroundColor: "#f0fdf4",
    color: "#16a34a",
    padding: "12px 16px",
    borderRadius: "8px",
    fontSize: "14px",
    marginBottom: "20px",
    display: "flex",
    alignItems: "center",
    gap: "8px",
  },
  successIcon: {
    fontSize: "16px",
  },
  errorMessage: {
    backgroundColor: "#fef2f2",
    color: "#dc2626",
    padding: "12px 16px",
    borderRadius: "8px",
    fontSize: "14px",
    marginBottom: "20px",
    display: "flex",
    alignItems: "center",
    gap: "8px",
  },
  errorIcon: {
    fontSize: "16px",
  },
  inputGroup: {
    position: "relative",
    marginBottom: "16px",
  },
  inputIcon: {
    position: "absolute",
    left: "16px",
    top: "50%",
    transform: "translateY(-50%)",
    fontSize: "18px",
    color: "#9ca3af",
  },
  input: {
    width: "100%",
    padding: "14px 16px 14px 48px",
    borderRadius: "8px",
    border: "1px solid #e5e7eb",
    fontSize: "15px",
    outline: "none",
    transition: "border-color 0.2s ease",
    boxSizing: "border-box",
  },
  button: {
    width: "100%",
    padding: "14px 20px",
    borderRadius: "8px",
    border: "none",
    fontSize: "16px",
    fontWeight: "600",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "10px",
    transition: "all 0.2s ease",
    marginTop: "8px",
  },
  primaryButton: {
    backgroundColor: "#10b981",
    color: "#ffffff",
    boxShadow: "0 4px 6px -1px rgba(16, 185, 129, 0.3)",
  },
  buttonIcon: {
    fontSize: "18px",
  },
  spinner: {
    fontSize: "18px",
  },
  divider: {
    display: "flex",
    alignItems: "center",
    margin: "24px 0",
    gap: "16px",
  },
  dividerLine: {
    flex: 1,
    height: "1px",
    backgroundColor: "#e5e7eb",
  },
  dividerText: {
    color: "#9ca3af",
    fontSize: "14px",
  },
  homeLink: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "8px",
    color: "#6b7280",
    textDecoration: "none",
    fontSize: "14px",
    padding: "12px",
    borderRadius: "8px",
    border: "1px solid #e5e7eb",
    transition: "background-color 0.2s ease",
  },
  loginText: {
    textAlign: "center",
    marginTop: "24px",
    fontSize: "14px",
    color: "#6b7280",
  },
  link: {
    color: "#10b981",
    textDecoration: "none",
    fontWeight: "500",
  },
};
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import api from "../api";

export default function Login() {
  const [form, setForm] = useState({ email: "", password: "" });
  const [msg, setMsg] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setMsg("");
  };

  const handleSubmit = async () => {
    if (!form.email || !form.password) {
      setMsg("All fields are required");
      return;
    }

    setLoading(true);
    try {
      console.log("Sending login data:", form);
      const res = await api.post("/api/auth/login", form);

      if (res.data.success) {
        localStorage.setItem("user", JSON.stringify(res.data.user));
        navigate("/dashboard");
      } else {
        setMsg(res.data.message);
      }
    } catch (err) {
      console.error("Login error:", err.response?.data || err.message);
      setMsg(err.response?.data?.message || "Server error");
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
          <h1 style={styles.welcomeTitle}>Welcome back!</h1>
          <p style={styles.welcomeText}>
            Sign in to access your account and continue where you left off.
          </p>
        </div>
      </div>

      {/* Right Side - Login Form */}
      <div style={styles.rightSide}>
        <div style={styles.formCard}>
          <div style={styles.logoContainer}>
            <div style={styles.logoIcon}>🔐</div>
            <h2 style={styles.logoText}>Auth System</h2>
          </div>

          <h3 style={styles.formTitle}>Login to my account</h3>
          <p style={styles.formSubtitle}>Enter your credentials to continue</p>

          {msg && (
            <div style={styles.errorMessage}>
              <span style={styles.errorIcon}>⚠️</span>
              {msg}
            </div>
          )}

          <div style={styles.inputGroup}>
            <span style={styles.inputIcon}>📧</span>
            <input
              name="email"
              type="email"
              placeholder="Email address"
              value={form.email}
              onChange={handleChange}
              style={styles.input}
            />
          </div>

          <div style={styles.inputGroup}>
            <span style={styles.inputIcon}>🔒</span>
            <input
              name="password"
              type="password"
              placeholder="Password"
              value={form.password}
              onChange={handleChange}
              style={styles.input}
            />
          </div>

          <div style={styles.forgotPassword}>
            <Link to="#" style={styles.link}>Forgot password?</Link>
          </div>

          <button
            onClick={handleSubmit}
            disabled={loading}
            style={{...styles.button, ...styles.primaryButton}}
          >
            {loading ? (
              <span style={styles.spinner}>⏳</span>
            ) : (
              <>
                <span style={styles.buttonIcon}>👤</span>
                Login to my account
              </>
            )}
          </button>

          <div style={styles.divider}>
            <span style={styles.dividerLine}></span>
            <span style={styles.dividerText}>or</span>
            <span style={styles.dividerLine}></span>
          </div>

          <Link to="/" style={styles.homeLink}>
            <span>🏠</span> Go Home
          </Link>

          <p style={styles.registerText}>
            Don't have an account?{" "}
            <Link to="/register" style={styles.link}>
              Register
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
    height: "100vh",
    width: "100vw",
    overflow: "hidden",
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
    padding: "20px",
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
    padding: "20px",
    backgroundColor: "#f8fafc",
    overflow: "auto",
  },
  formCard: {
    backgroundColor: "#ffffff",
    borderRadius: "16px",
    padding: "32px",
    boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
    width: "100%",
    maxWidth: "380px",
  },
  logoContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "12px",
    marginBottom: "20px",
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
    fontSize: "22px",
    fontWeight: "600",
    color: "#1f2937",
    marginBottom: "6px",
    textAlign: "center",
  },
  formSubtitle: {
    fontSize: "13px",
    color: "#6b7280",
    marginBottom: "16px",
    textAlign: "center",
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
    marginBottom: "12px",
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
  forgotPassword: {
    textAlign: "right",
    marginBottom: "20px",
  },
  link: {
    color: "#10b981",
    textDecoration: "none",
    fontWeight: "500",
    fontSize: "14px",
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
    margin: "16px 0",
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
  registerText: {
    textAlign: "center",
    marginTop: "16px",
    fontSize: "14px",
    color: "#6b7280",
  },
};
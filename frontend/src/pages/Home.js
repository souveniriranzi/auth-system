// src/pages/Home.js
import React from "react";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div style={styles.container}>
      {/* Left Side - Green Gradient with Welcome Text */}
      <div style={styles.leftSide}>
        <div style={styles.circleOverlay}></div>
        <div style={styles.welcomeContent}>
          <h1 style={styles.welcomeTitle}>Welcome to my app</h1>
          <p style={styles.welcomeText}>
            Your secure authentication system for managing user access and protected content.
          </p>
        </div>
      </div>

      {/* Right Side - Action Buttons */}
      <div style={styles.rightSide}>
        <div style={styles.logoContainer}>
          <div style={styles.logoIcon}>🔐</div>
          <h2 style={styles.logoText}>Auth System</h2>
        </div>
        
        <div style={styles.card}>
          <h3 style={styles.cardTitle}>Get Started</h3>
          <p style={styles.cardSubtitle}>Access your account or create a new one</p>
          
          <button 
            style={{...styles.button, ...styles.primaryButton}} 
            onClick={() => navigate("/login")}
          >
            <span style={styles.buttonIcon}>👤</span>
            Login to my account
          </button>
          
          <button 
            style={{...styles.button, ...styles.secondaryButton}} 
            onClick={() => navigate("/register")}
          >
            <span style={styles.buttonIcon}>📝</span>
            Create new account
          </button>
        </div>
        
        <p style={styles.footerText}>
          Secure and reliable authentication for your applications
        </p>
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
    fontSize: "48px",
    fontWeight: "700",
    marginBottom: "20px",
    lineHeight: 1.2,
  },
  welcomeText: {
    color: "rgba(255, 255, 255, 0.9)",
    fontSize: "18px",
    lineHeight: 1.6,
  },
  rightSide: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: "40px",
    backgroundColor: "#f8fafc",
  },
  logoContainer: {
    display: "flex",
    alignItems: "center",
    gap: "12px",
    marginBottom: "40px",
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
  card: {
    backgroundColor: "#ffffff",
    borderRadius: "16px",
    padding: "40px",
    boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
    width: "100%",
    maxWidth: "400px",
    textAlign: "center",
  },
  cardTitle: {
    fontSize: "24px",
    fontWeight: "600",
    color: "#1f2937",
    marginBottom: "8px",
  },
  cardSubtitle: {
    fontSize: "14px",
    color: "#6b7280",
    marginBottom: "24px",
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
    marginBottom: "12px",
  },
  primaryButton: {
    backgroundColor: "#10b981",
    color: "#ffffff",
    boxShadow: "0 4px 6px -1px rgba(16, 185, 129, 0.3)",
  },
  secondaryButton: {
    backgroundColor: "#ffffff",
    color: "#374151",
    border: "2px solid #e5e7eb",
  },
  buttonIcon: {
    fontSize: "18px",
  },
  footerText: {
    marginTop: "32px",
    fontSize: "14px",
    color: "#9ca3af",
    textAlign: "center",
  },
};
// src/pages/Dashboard.js
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const userData = localStorage.getItem("user");
    if (userData) {
      setUser(JSON.parse(userData));
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/login");
  };

  return (
    <div style={styles.container}>
      {/* Sidebar */}
      <div style={styles.sidebar}>
        <div style={styles.sidebarHeader}>
          <div style={styles.logoIcon}>🔐</div>
          <h2 style={styles.logoText}>Auth System</h2>
        </div>

         <nav style={styles.nav}>
      <div
        onClick={() => navigate("/dashboard")}
        style={{ ...styles.navLink, ...styles.navLinkActive, cursor: "pointer" }}
      >
        <span style={styles.navIcon}>📊</span>
        Dashboard
      </div>
    </nav>

        <button onClick={handleLogout} style={styles.logoutButton}>
          <span style={styles.navIcon}>🚪</span>
          Logout
        </button>
      </div>

      {/* Main Content */}
      <div style={styles.mainContent}>
        {/* Header */}
        <header style={styles.header}>
          <h1 style={styles.pageTitle}>Dashboard</h1>
          <div style={styles.userInfo}>
            <div style={styles.userAvatar}>
              {user?.username?.charAt(0).toUpperCase() || "U"}
            </div>
            <div>
              <p style={styles.userName}>{user?.username || "User"}</p>
              <p style={styles.userEmail}>{user?.email || "user@example.com"}</p>
            </div>
          </div>
        </header>

        {/* Dashboard Content */}
        <div style={styles.content}>
          {/* Stats Cards */}
          <div style={styles.statsGrid}>
            <div style={styles.statCard}>
              <div style={{...styles.statIcon, backgroundColor: "#dbeafe"}}>👋</div>
              <div>
                <p style={styles.statLabel}>Welcome</p>
                <p style={styles.statValue}>{user?.username || "Guest"}</p>
              </div>
            </div>

            <div style={styles.statCard}>
              <div style={{...styles.statIcon, backgroundColor: "#d1fae5"}}>✅</div>
              <div>
                <p style={styles.statLabel}>Status</p>
                <p style={styles.statValue}>Active</p>
              </div>
            </div>

            <div style={styles.statCard}>
              <div style={{...styles.statIcon, backgroundColor: "#fef3c7"}}>📧</div>
              <div>
                <p style={styles.statLabel}>Email</p>
                <p style={{...styles.statValue, fontSize: "14px"}}>{user?.email || "N/A"}</p>
              </div>
            </div>

            <div style={styles.statCard}>
              <div style={{...styles.statIcon, backgroundColor: "#fce7f3"}}>🆔</div>
              <div>
                <p style={styles.statLabel}>User ID</p>
                <p style={{...styles.statValue, fontSize: "12px"}}>{user?._id?.slice(-8) || "N/A"}</p>
              </div>
            </div>
          </div>

          {/* Main Card */}
          <div style={styles.mainCard}>
            <h2 style={styles.cardTitle}>🎉 Welcome to Your Dashboard!</h2>
            <p style={styles.cardText}>
              You have successfully logged in to the Auth System. This is your personal
              dashboard where you can manage your account and view your information.
            </p>
            <div style={styles.featureGrid}>
              <div style={styles.featureItem}>
                <span style={styles.featureIcon}>🔒</span>
                <p style={styles.featureText}>Secure Authentication</p>
              </div>
              <div style={styles.featureItem}>
                <span style={styles.featureIcon}>⚡</span>
                <p style={styles.featureText}>Fast & Reliable</p>
              </div>
              <div style={styles.featureItem}>
                <span style={styles.featureIcon}>🛡️</span>
                <p style={styles.featureText}>Protected Data</p>
              </div>
            </div>
          </div>
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
    backgroundColor: "#f8fafc",
  },
  sidebar: {
    width: "260px",
    backgroundColor: "#ffffff",
    borderRight: "1px solid #e5e7eb",
    display: "flex",
    flexDirection: "column",
    padding: "24px",
  },
  sidebarHeader: {
    display: "flex",
    alignItems: "center",
    gap: "12px",
    marginBottom: "32px",
    paddingBottom: "24px",
    borderBottom: "1px solid #e5e7eb",
  },
  logoIcon: {
    fontSize: "28px",
  },
  logoText: {
    fontSize: "20px",
    fontWeight: "700",
    color: "#10b981",
    margin: 0,
  },
  nav: {
    display: "flex",
    flexDirection: "column",
    gap: "8px",
    flex: 1,
  },
  navLink: {
    display: "flex",
    alignItems: "center",
    gap: "12px",
    padding: "12px 16px",
    borderRadius: "8px",
    color: "#6b7280",
    textDecoration: "none",
    fontSize: "15px",
    fontWeight: "500",
    transition: "all 0.2s ease",
    cursor: "pointer",
  },
  navLinkActive: {
    backgroundColor: "#ecfdf5",
    color: "#10b981",
  },
  navIcon: {
    fontSize: "18px",
  },
  logoutButton: {
    display: "flex",
    alignItems: "center",
    gap: "12px",
    padding: "12px 16px",
    borderRadius: "8px",
    border: "none",
    backgroundColor: "#fef2f2",
    color: "#dc2626",
    fontSize: "15px",
    fontWeight: "500",
    cursor: "pointer",
    transition: "all 0.2s ease",
    marginTop: "auto",
  },
  mainContent: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    overflow: "hidden",
  },
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "16px 24px",
    backgroundColor: "#ffffff",
    borderBottom: "1px solid #e5e7eb",
  },
  pageTitle: {
    fontSize: "24px",
    fontWeight: "700",
    color: "#1f2937",
    margin: 0,
  },
  userInfo: {
    display: "flex",
    alignItems: "center",
    gap: "12px",
  },
  userAvatar: {
    width: "40px",
    height: "40px",
    borderRadius: "50%",
    backgroundColor: "#10b981",
    color: "#ffffff",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "16px",
    fontWeight: "600",
  },
  userName: {
    fontSize: "15px",
    fontWeight: "600",
    color: "#1f2937",
    margin: 0,
  },
  userEmail: {
    fontSize: "13px",
    color: "#6b7280",
    margin: 0,
  },
  content: {
    padding: "24px",
    flex: 1,
    overflow: "auto",
  },
  statsGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(4, 1fr)",
    gap: "16px",
    marginBottom: "24px",
  },
  statCard: {
    backgroundColor: "#ffffff",
    borderRadius: "12px",
    padding: "16px",
    display: "flex",
    alignItems: "center",
    gap: "12px",
    boxShadow: "0 1px 3px rgba(0, 0, 0, 0.1)",
  },
  statIcon: {
    width: "40px",
    height: "40px",
    borderRadius: "10px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "20px",
  },
  statLabel: {
    fontSize: "12px",
    color: "#6b7280",
    margin: "0 0 2px 0",
  },
  statValue: {
    fontSize: "14px",
    fontWeight: "600",
    color: "#1f2937",
    margin: 0,
  },
  mainCard: {
    backgroundColor: "#ffffff",
    borderRadius: "16px",
    padding: "24px",
    boxShadow: "0 1px 3px rgba(0, 0, 0, 0.1)",
  },
  cardTitle: {
    fontSize: "20px",
    fontWeight: "600",
    color: "#1f2937",
    margin: "0 0 12px 0",
  },
  cardText: {
    fontSize: "14px",
    color: "#6b7280",
    lineHeight: 1.5,
    margin: "0 0 16px 0",
  },
  featureGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
    gap: "16px",
  },
  featureItem: {
    backgroundColor: "#f8fafc",
    borderRadius: "12px",
    padding: "20px",
    textAlign: "center",
  },
  featureIcon: {
    fontSize: "32px",
    marginBottom: "8px",
    display: "block",
  },
  featureText: {
    fontSize: "14px",
    color: "#6b7280",
    margin: 0,
  },
};

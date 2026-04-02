// src/components/HomeLeft.js
import React from "react";

export default function HomeLeft() {
  return (
    <div style={styles.left}>
      <h1 style={styles.welcomeTitle}>Welcome to My App</h1>
      <p style={styles.welcomeText}>
        Securely register and login to access your account.
      </p>
    </div>
  );
}

// Inline styles
const styles = {
  left: { flex: 1, paddingRight: "50px" },
  welcomeTitle: { fontSize: "48px", margin: 0, color: "#111" },
  welcomeText: { fontSize: "18px", color: "#555", marginTop: "20px" },
};
// src/pages/Dashboard.js
import React from "react";

export default function Dashboard() {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Welcome to the Dashboard!</h1>
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "100vh",
    background: "#f0f2f5",
  },
  title: {
    fontSize: "32px",
    color: "#111",
  },
};
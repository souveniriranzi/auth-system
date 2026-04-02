// src/pages/Home.js
import React from "react";
import HomeLeft from "../components/HomeLeft";
import LoginForm from "../components/LoginForm";

export default function Home() {
  return (
    <div style={styles.container}>
      <HomeLeft />
      <LoginForm />
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    minHeight: "100vh",
    background: "#f0f2f5",
    alignItems: "center",
    justifyContent: "center",
    padding: "0 50px",
  },
};
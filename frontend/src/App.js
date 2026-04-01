import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Register from "./pages/register";
import Login from "./pages/login";
import "./App.css";

function Home() {
  return (
    <div style={styles.home}>
      <h1 style={styles.title}>Authentication System</h1>
      <p style={styles.subtitle}>
        Securely register and login 
      </p>

      <div style={styles.buttons}>
        <Link to="/register" style={styles.btnPrimary}>Register</Link>
        <Link to="/login" style={styles.btnSecondary}>Login</Link>
      </div>
    </div>
  );
}

function App() {
  return (
    <Router>
      <div style={styles.container}>
        
        {/* Navbar */}
        <nav style={styles.nav}>
          <h2 style={styles.logo}>App</h2>
          <div>
            <Link to="/" style={styles.link}>Home</Link>
            <Link to="/register" style={styles.link}>Register</Link>
            <Link to="/login" style={styles.link}>Login</Link>
          </div>
        </nav>

        {/* Routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Routes>

      </div>
    </Router>
  );
}

export default App;

//////////////////////////////////////////////////
// 🎨 STYLES (INLINE CSS)
//////////////////////////////////////////////////

const styles = {
  container: {
    fontFamily: "Arial, sans-serif",
    background: "#f4f6f9",
    minHeight: "100vh"
  },

  nav: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "15px 40px",
    background: "#1e293b",
    color: "white"
  },

  logo: {
    margin: 0
  },

  link: {
    color: "white",
    marginLeft: "20px",
    textDecoration: "none",
    fontWeight: "bold"
  },

  home: {
    textAlign: "center",
    marginTop: "100px"
  },

  title: {
    fontSize: "40px",
    color: "#1e293b"
  },

  subtitle: {
    fontSize: "18px",
    color: "#555",
    margin: "20px 0"
  },

  buttons: {
    marginTop: "30px"
  },

  btnPrimary: {
    padding: "12px 25px",
    marginRight: "15px",
    background: "#2563eb",
    color: "white",
    borderRadius: "8px",
    textDecoration: "none",
    fontWeight: "bold"
  },

  btnSecondary: {
    padding: "12px 25px",
    background: "#10b981",
    color: "white",
    borderRadius: "8px",
    textDecoration: "none",
    fontWeight: "bold"
  }
};
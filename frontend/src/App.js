import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Register from "./pages/Register";

function App() {
  return (
    <Router basename="/auth-system">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </Router>
  );
}


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

export default App;


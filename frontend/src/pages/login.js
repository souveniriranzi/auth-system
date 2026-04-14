import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import api from "../api";
import "../App.css";

export default function Login() {
  const [form, setForm] = useState({ email: "", password: "" });
  const [msg, setMsg] = useState("");

  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    if (!form.email || !form.password) {
      setMsg("All fields required");
      return;
    }

    try {
      console.log("Sending login data:", form);
      const res = await api.post("/api/auth/login", form);

      if (res.data.success) {
        setMsg("Welcome " + res.data.user.username);
        navigate("/dashboard");
      } else {
        setMsg(res.data.message);
      }
    } catch (err) {
      console.error("Login error:", err.response?.data || err.message);
      setMsg(err.response?.data?.message || "Server error");
    }
  };

  return (
    <div className="form-container">
      <h2>Login</h2>

      <input name="email" placeholder="Email" onChange={handleChange} />
      <input
        name="password"
        type="password"
        placeholder="Password"
        onChange={handleChange}
      />

      <button onClick={handleSubmit}>Login</button>

      {msg && <p>{msg}</p>}

      {/* 👇 NEW LINK */}
      <p style={{ marginTop: "10px" }}>
        Not registered?{" "}
        <Link to="/register" style={{ color: "blue" }}>
          Create account
        </Link>
      </p>
    </div>
  );
}
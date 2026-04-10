import { useState } from "react";
import API from "../api";
import "../App.css"; // import the shared CSS

export default function Login() {
  const [form, setForm] = useState({ email: "", password: "" });
  const [msg, setMsg] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    if (!form.email || !form.password) {
      setMsg("All fields required");
      return;
    }

   const res = await api.post("/api/auth/login", form);
    if (res.data.success) {
      setMsg("Welcome " + res.data.user.username);
    } else {
      setMsg(res.data.message);
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
    </div>
  );
}
import { useState } from "react";
import API from "../api";
import "../App.css"; // import the shared CSS

export default function Register() {
  const [form, setForm] = useState({ username: "", email: "", password: "" });
  const [msg, setMsg] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    if (!form.username || !form.email || !form.password) {
      setMsg("All fields required");
      return;
    }

    const res = await API.post("/auth/register", form);
    setMsg(res.data.message);
  };

  return (
    <div className="form-container">
      <h2>Register</h2>
      <input
        name="username"
        placeholder="Username"
        onChange={handleChange}
      />
      <input name="email" placeholder="Email" onChange={handleChange} />
      <input
        name="password"
        type="password"
        placeholder="Password"
        onChange={handleChange}
      />
      <button onClick={handleSubmit}>Register</button>
      {msg && <p>{msg}</p>}
    </div>
  );
}
import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

function Signup() {
  const [formData, setFormData] = useState({ email: "", username: "", password: "" });
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const backendUrl = import.meta.env.VITE_BACKEND_URL || "https://winter-internship-3beu.onrender.com";
      const response = await axios.post(`${backendUrl}/signup`, formData);
      setMessage("Signup successful!");
      console.log(response.data);
    } catch (error) {
      setMessage(error.response?.data?.Message || "Signup failed");
    }
  };

  return (
    <div>
      <h2>Signup</h2>
      {message && <p style={{color: message.includes('successful') ? 'green' : 'red'}}>{message}</p>}
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email</label><br />
          <input 
            type="email" 
            name="email" 
            value={formData.email}
            onChange={handleChange}
            required 
          />
        </div>

        <br />

        <div>
          <label>Username</label><br />
          <input 
            type="text" 
            name="username"
            value={formData.username}
            onChange={handleChange}
            required 
          />
        </div>

        <br />

        <div>
          <label>Password</label><br />
          <input 
            type="password" 
            name="password"
            value={formData.password}
            onChange={handleChange}
            required 
          />
        </div>

        <br />

        <button type="submit">Signup</button>
      </form>

      <br />

      <p>
        Already have an account?
        <Link to="/login"> Login</Link>
      </p>
    </div>
  );
}

export default Signup;
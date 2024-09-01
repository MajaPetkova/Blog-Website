import { Link } from "react-router-dom";
import "./register.css";
import { useState } from "react";
import axios from "axios";

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(false);
    try {
      const res = await axios.post("/auth/register", {
        username,
        email,
        password,
      });
      res.data && window.location.replace("/login");
    } catch (err) {
      setError(true);
    }
  };

  return (
    <div className="register">
      <form className="registerForm" onSubmit={handleSubmit}>
        <span className="registerTitle">Register</span>
        <label htmlFor="">Username</label>
        <input
          type="text"
          placeholder="Enter your username"
          className="usernameInput"
          onChange={(e) => setUsername(e.target.value)}
        />
        <label htmlFor="">Email</label>
        <input
          type="text"
          placeholder="Enter your email"
          className="emailInput"
          onChange={(e) => setEmail(e.target.value)}
        />
        <label htmlFor="">Password</label>
        <input
          type="password"
          placeholder="*****"
          className="registerInput"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="registerButton" type="submit">
          Register
        </button>
        {error && <span style ={{color:"red", fontSize:"22px", paddingTop:"20px"}}>Something went wrong</span>}
      </form>
      <button className="registerBtn">
        <Link to="/login" className="link">
          Login
        </Link>
      </button>
    </div>
  );
};

export default Register;

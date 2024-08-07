import "./register.css";

const Register = () => {
  return (
    <div className="register">
      <form className="registerForm">
        <span className="registerTitle">Register</span>
        <label htmlFor="">Username</label>
        <input
          type="text"
          placeholder="Enter your username"
          className="usernameInput"
        />
        <label htmlFor="">Email</label>
        <input
          type="text"
          placeholder="Enter your email"
          className="emailInput"
        />
        <label htmlFor="">Password</label>
        <input type="password" placeholder="*****" className="registerInput" />
        <button className="registerButton">Login</button>
      </form>
      <button className="registerBtn">Login</button>
    </div>
  );
};

export default Register;

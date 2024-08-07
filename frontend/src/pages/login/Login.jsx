import "./login.css";

const Login = () => {
  return (
    <div className="login">
      <form className="loginForm">
      <span className="loginTitle">Login</span>
        <label htmlFor="">Email</label>
        <input type="text" placeholder="Enter your email" className="emailInput"/>
        <label htmlFor="">Password</label>
        <input type="password" placeholder="*****" className="loginInput" />
        <button className="loginButton">Login</button>
      </form>
      <button className="loginRegisterBtn">Register</button>
    </div>
  );
};

export default Login;

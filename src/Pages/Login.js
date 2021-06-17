import React, { useState } from "react";
import "../App.css";

function Login() {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

  return (
    <div className="sigin-in">
      <h2 style={{ textAlign: "center", color: "rgb(6, 133, 150)" }}>
        Log in
      </h2>
      <div className="login">
        <form className="login-form">
          
          <label>Email</label>
          <input type="email" placeholder="name@example.com" />
          <label>Password</label>
          <input type="email" placeholder="password" />
          
          <button className="auth-btn">Login</button>
        </form>
      </div>
    </div>
  );
}

export default Login;

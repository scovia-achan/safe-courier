import React, { useState } from "react";
import "../App.css";

function Login() {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

  return (
    <div className="sigin-up">
      <h2 style={{ textAlign: "center", color: "rgb(6, 133, 150)" }}>
        Create a free account
      </h2>
      <div className="register">
        <form className="register-form">
          
          <label>Email</label>
          <input type="email" placeholder="name@example.com" />
          <label>Password</label>
          <input type="email" placeholder="password" />
          
          <button>Create Account</button>
        </form>
      </div>
    </div>
  );
}

export default Login;

import React, { useState } from "react";
import {Link} from "react-router-dom"
import "../App.css";

function Login() {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const user = {email, password};
   
      fetch("https://sefcourier.herokuapp.com/api/v1/user/login", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(user)
      })
      .then((data) => {
       console.log("user logged in")
       
       setemail("")
       setpassword("")
       
       
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="sigin-in">
      
      <div className="login">
        <form className="login-form" onSubmit={handleSubmit}>
          <h2 style={{ textAlign: "center", color: "rgb(6, 133, 150)" }}>Log in</h2>
          <label>Email</label>
          <input type="email" placeholder="name@example.com" value={email} onChange={e=>setemail(e.target.value)}/>
          <label>Password</label>
          <input type="text" placeholder="password" value={password} onChange={e=>setpassword(e.target.value)} />
          
          <button className="auth-btn" type="submit">Login</button>
          <p>Don't have an account? <Link to="/signup">Register</Link></p>
        </form>
      </div>
    </div>
  );
}

export default Login;

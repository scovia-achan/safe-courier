import React, { useState } from "react";
import {Link, useHistory} from "react-router-dom"
import "../App.css";
import axios from "axios"

function Login() {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const history = useHistory()

  const handleSubmit = async (e) => {
    e.preventDefault();
    const user = {email, password};
   
    axios
    .post("https://sefcourier.herokuapp.com/api/v1/user/login", user)
 
    .then((res) => {
     localStorage.removeItem("verified-token");
     
     localStorage.setItem("verified-token", res.data.accessToken)
    
     history.push("/parcelform")
     
    })
    .catch((err)=> { 
      console.log(err)
    })
    
    
    setemail("")
   
    setpassword("")
  
}
  

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

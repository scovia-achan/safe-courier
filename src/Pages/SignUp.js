import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import "../App.css";
import axios from "axios"



function SignUp() {
  const [firstName, setfirstName] = useState("");
  const [lastName, setlastName] = useState("");
  const [email, setemail] = useState("");
  const [role, setRole] = useState("user")
  const [password, setpassword] = useState("");
 
  const history = useHistory();  

  const handleSubmit = async (e) => {
    e.preventDefault();
    const user = {firstName, lastName, email, role, password};
    
    axios
      .post("https://sefcourier.herokuapp.com/api/v1/user/signup", user)
   
      .then((res) => {
       localStorage.removeItem("verified-token");
       localStorage.removeItem("firstname");
       localStorage.setItem("verified-token", res.data.accessToken)
      
       history.push("/login")
       
      })
      .catch((err)=> { 
        console.log(err)
      })
      
      setfirstName("")
      setlastName("")
      setemail("")
      setRole("")
      setpassword("")
    
  }

 

  return (
    <div className="sigin-up">
      <div className="register">
        <form className="register-form" onSubmit={handleSubmit}>
          <h2 style={{ textAlign: "center", color: "rgb(6, 133, 150)" }}>
            Create a free account
          </h2>
          <label>First name</label>
          <input
            type="text"
            placeholder="First Name"
            value={firstName}
            onChange={(e) => setfirstName(e.target.value)}
          />
          <label>Last name</label>
          <input
            type="text"
            placeholder="Last Name"
            value={lastName}
            onChange={(e) => setlastName(e.target.value)}
          />
          <label>Email</label>
          <input
            type="email"
            placeholder="name@example.com"
            value={email}
            onChange={(e) => setemail(e.target.value)}
          />
          <label>Role</label>
          <select className= "role-select" value={role} onChange={e=>setRole(e.target.value)}>
            <option value="admin">Admin</option>
            <option value="user">User</option>
          </select>
          
          
          <label>Password</label>
          <input
            type="text"
            placeholder="password"
            value={password}
            onChange={(e) => setpassword(e.target.value)}
          />
          
          <button className="auth-btn" type="submit" >Create Account</button>
          <p style={{ marginTop: "2px" }}>
            Already have an account? <Link to="/login">Login</Link>
          </p>
        
        </form>
      </div>
    </div>
  );
}

export default SignUp;

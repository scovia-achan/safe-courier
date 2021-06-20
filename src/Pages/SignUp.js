import React, { useState } from "react";
import {Link} from "react-router-dom"
import "../App.css";

function SignUp() {
	const [fname, setFname] = useState("")
	const [lname, setLname] = useState("")
	const [email, setemail] = useState("")
	const [password, setpassword] = useState("")
	const [password2, setpassword2] = useState("")


  return (
    <div className="sigin-up">
      
      <div className="register">
        
        <form className="register-form">
          <h2 style={{ textAlign: "center", color:"rgb(6, 133, 150)" }}>Create a free account</h2>
					<label>First name</label>
          <input type="text" placeholder="First Name" />
					<label>Last name</label>
          <input type="text" placeholder="Last Name" />
					<label>Email</label>
          <input type="email" placeholder="name@example.com" />
					<label>Password</label>
          <input type="email" placeholder="password" />
					<label>confirm Password</label>
          <input type="email" placeholder="reapeat password" />
					<button className="auth-btn">Create Account</button>
          <p style={{marginTop: "2px"}}>Already have an account? <Link to="/login">Login</Link></p>
        </form>
      </div>
    </div>
  );
}

export default SignUp;

import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Select,MenuItem} from "@material-ui/core";
import "../App.css";
import axios from "axios";

function SignUp() {
  const [firstName, setfirstName] = useState("");
  const [lastName, setlastName] = useState("");
  const [email, setemail] = useState("");
  const [role, setRole] = useState("")
  const [password, setpassword] = useState("");
  const [password2, setpassword2] = useState("");
  const [data, setData] = useState(""); 

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      role: role,
      password: password,
      password2: password2,
    };
    axios
      .post("https://sefcourier.herokuapp.com/api/v1/user/signup", data)
      .then((res) => {
       console.log(res.data)
       setData(res.data)
       setfirstName();
       setlastName();
       setemail()
       setRole()
       setpassword()
       setpassword2();
       
      })
      .catch((err) => console.log(err));
  };

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
          
          <Select
          
          id="demo-simple-select-outlined"
          placeholder="Your role"
          value={role}
          onChange={e=>setRole(e.target.value)}>
          <MenuItem value="" disabled>
            Your role
          </MenuItem>
            <MenuItem value={role}>Admin</MenuItem>
            <MenuItem value={role}>buyer</MenuItem>
          </Select>
          
          <label>Password</label>
          <input
            type="text"
            placeholder="password"
            value={password}
            onChange={(e) => setpassword(e.target.value)}
          />
          <label>confirm Password</label>
          <input
            type="text"
            placeholder="reapeat password"
            value={password2}
            onChange={(e) => setpassword2(e.target.value)}
          />
          <button className="auth-btn" type="submit">Create Account</button>
          <p style={{ marginTop: "2px" }}>
            Already have an account? <Link to="/login">Login</Link>
          </p>
          {console.log(data)}
        </form>
      </div>
    </div>
  );
}

export default SignUp;

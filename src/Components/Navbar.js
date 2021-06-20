import React from "react";
import { Link } from "react-router-dom";
import "./Main.css";

function Navbar() {
  return (
    <div className="nav">
      <div className="container">
        <div className="logo">
          <span>SC</span>delivery
        </div>
        <ul className="navlinks">
          <li>
            <Link to="/">home</Link>
          </li>
          <li>
            <Link to="/signup">SignUp</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;

import React from 'react'
import {Link} from "react-router-dom"
import "./Main.css"

function Navbar() {
    return (
        <div className="nav">
            <div className="logo">PC DEL</div>
            <ul className="navlinks">
                <li><Link to="/">home</Link></li>
                <li><Link to="/signup">SignUp</Link></li>
                <li><Link to="/">Login</Link></li>
            </ul>
            
        </div>
    )
}

export default Navbar;

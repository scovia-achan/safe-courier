import React from "react";
import { Link } from "react-router-dom";

export default function OrderForm() {
  return (
    <div className="Parcel">
      <div className="order">
        <h2 style={{ textAlign: "center", color: "white" }}>
            Create order
        </h2>
        <form className="order-form">
          
          <label>Type of item</label>
          <input type="text" placeholder="item type" />
          <label>Last name</label>
          <input type="text" placeholder="Last Name" />
          <label>Email</label>
          <input type="email" placeholder="name@example.com" />
          <label>Password</label>
          <input type="email" placeholder="password" />
          <label>confirm Password</label>
          <input type="email" placeholder="reapeat password" />
          <button className="auth-btn">Submit order</button>
         
        </form>
      </div>
    </div>
  );
}

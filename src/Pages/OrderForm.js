import React from "react";
// import { Link } from "react-router-dom";

export default function OrderForm() {
  return (
    <div className="Parcel">
      <div className="order">
        <h2 style={{ textAlign: "center", color: "white" }}>
            Send a parcel
        </h2>
        <form className="order-form">
          
          <label>Type of item</label>
          <input type="text" placeholder="item name" />
          <label>Weight</label>
          <input type="text" placeholder="weight" />
          <label>Destination</label>
          <input type="text" placeholder="where to be delivered" />
          <label>Pickup Location</label>
          <input type="text" placeholder="Where is the parcel" />
          <label>confirm Password</label>
          <input type="text" placeholder="reapeat password" />
          <button className="auth-btn">Submit order</button>
         
        </form>
      </div>
    </div>
  );
}

import axios from "axios";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";

export default function OrderForm() {
  const [parcelname, setparcelname] = useState("") 
  const [weight, setweight] = useState("")
  const [userLocation, setuserLocation] = useState("")
  const [destination, setdestination] = useState("")

  let history = useHistory();

  const handleSubmit = async(e) => {
    e.preventDefault()
    const parcel = {
      parcelname: parcelname,
      weight: weight,
      destination: destination,
      userLocation: userLocation
    } 
    axios
      .post("http://localhost:8090/api/v1/parcels", parcel)
      .then((res)=>{
        console.log(res.data)
        setparcelname("")
        setweight("")
        setdestination("")
        setuserLocation("")
        
      })
      .catch(err=>console.log(err))

  }

  return (
    <div className="Parcel">
      <div className="order">
        <h2 style={{ textAlign: "center", color: "white" }}>
            Send a parcel
        </h2>
        <form className="order-form" onSubmit={handleSubmit}>
          
          <label>Name of item</label>
          <input type="text" placeholder="item name" value={parcelname} onChange={(e)=>setparcelname(e.target.value)}/>
          <label>Weight(in kgs)</label>
          <input type="text" placeholder="weight" value={weight} onChange={(e)=>setweight(e.target.value)}/>
          <label>Destination</label>
          <input type="text" placeholder="where to be delivered" value={destination} onChange={(e)=>setdestination(e.target.value)}/>
          <label>userLocation Location</label>
          <input type="text" placeholder="Where is the parcel" value={userLocation} onChange={(e)=>setuserLocation(e.target.value)}/>
          
          <button className="auth-btn" type="submit" onClick={()=>history.push("/submitted")}>Submit order</button>
         
        </form>
      </div>
    </div>
  );
}

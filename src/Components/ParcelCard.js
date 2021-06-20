import React from "react";
import "./Main.css";

function ParcelCard({ name, destination, currentLocation, image }) {
  return (
    <div className="parcel">
      <div className="parcel-card">
        <img src={image} alt="A parcel" />
        <p>{name}</p>
        <p>Destination: {destination}</p>
        <p>current location:{currentLocation}</p>
      </div>
    </div>
  );
}

export default ParcelCard;
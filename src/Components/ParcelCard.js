import React from "react";
import "./Main.css";

function ParcelCard({ parcelname, destination, userLocation, status}) {
  return (
    <div className="parcel">
      <div className="parcel-card">
        {/* <img src={image} alt="A parcel" /> */}
        <p>{parcelname}</p>
        <p>Destination: {destination}</p>
        <p>current location:{userLocation}</p>
        <p>Status: </p>
      </div>
    </div>
  );
}

export default ParcelCard;
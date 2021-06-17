import React from "react";
import "../App.css";
import truck from "../Images/truck.svg";

function Home() {
  return (
    <div className="home">
      <div className="home-sect">
        <img src={truck} alt="truck transporting parcels" />
        <div className="intro">
          <p className="heading">Deliver with us</p>
          <p className="text">Every item delivered to it's destination.<br /> Trust the process.</p>
          <button>Get started</button>
        </div>
      </div>
    </div>
  );
}

export default Home;

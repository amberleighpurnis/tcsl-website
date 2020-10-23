import React from "react";
import "../../Teams.css";
import bdlogo from "./Images/bdlogo.png";

export default function Baddog() {
  return (
    <div className="baddog">
      <img src={bdlogo} alt="bad dog logo" />
      <h1>Bad Dog</h1>
      <br />
      <h2>Captians: NAME & NAME </h2>
      <p> Team Statistics:</p>
    </div>
  );
}

import React from "react";
import "../../Teams.css";
import cbarlogo from "./Images/cbarlogo.png";

export default function Comedybar() {
  return (
    <div className="cbar">
      <img src={cbarlogo} alt="comedy bar logo" />
      <h1>Comedy Bar</h1>
      <br />
      <h2>Captains: Gary Rideout & Jen Fitzgerald </h2>
      <p> Team Statistics:</p>
      <footer>
        This website was coded by Amber Purnis and is
        <a
          href="https://github.com/amberleighpurnis/tcsl"
          target="_blank"
          rel="noopener noreferrer"
        >
          {" "}
          open-sourced on GitHub
        </a>
      </footer>
    </div>
  );
}

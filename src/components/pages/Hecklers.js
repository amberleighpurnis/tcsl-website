import React from "react";
import "../../Teams.css";
import hlogo from "./Images/hlogo.png";

export default function Hecklers() {
  return (
    <div className="hecklers">
      <img src={hlogo} alt="Hecklers logo" />
      <h1>Hecklers</h1>
      <br />
      <h2>Captians: Micheal Wong & Justin Wong </h2>
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

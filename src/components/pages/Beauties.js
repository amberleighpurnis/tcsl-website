import React from "react";
import "../../Teams.css";
import blogo from "./Images/blogo.png";

export default function Beauties() {
  return (
    <div className="beauties">
      <img src={blogo} alt="beauties" />
      <h1>THE BEAUTIES</h1>
      <br />
      <h2>Captains: Amber Purnis & Scott Beaumeester</h2>
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

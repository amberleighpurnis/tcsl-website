import React from "react";
import "../../Teams.css";
import babhlogo from "./Images/babhlogo.png";

export default function Beavis() {
  return (
    <div className="beavis">
      <img src={babhlogo} alt="beavis and buntheads logo" />
      <h1>Beavis & Buntheads</h1>
      <br />
      <h2>Captains: Freddie Rivas & Lexa Graham </h2>
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

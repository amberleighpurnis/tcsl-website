import React from "react";
import "../../Teams.css";
import pthingslogo from "./Images/pthingslogo.png";

export default function PringsThings() {
  return (
    <div className="pthings">
      <img src={pthingslogo} alt="placeholder logo" />
      <h1>Pring's Things</h1>
      <br />
      <h2>Captians: Darryl Pring & Kyra Williams </h2>
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

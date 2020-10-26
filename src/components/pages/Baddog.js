import React from "react";
import "../../Teams.css";
import bdlogo from "./Images/bdlogo.png";

export default function Baddog() {
  return (
    <div className="baddog">
      <img src={bdlogo} alt="bad dog logo" />
      <h1>Bad Dog</h1>
      <br />
      <h2>Captians: Laura Salvas & Chris Besler </h2>
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

import React from "react";
import "../../Teams.css";
import orphanslogo from "./Images/orphanslogo.png";

export default function Orphans() {
  return (
    <div className="orphans">
      <img src={orphanslogo} alt="orphans logo" />
      <h1>The Orphans</h1>
      <br />
      <h2>Captians: Virginia Woodall & Dan Rosen </h2>
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

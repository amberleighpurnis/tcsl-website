import React from "react";
import "../../Teams.css";
import placeholder from "./Images/placeholder.png";

export default function Jokebox() {
  return (
    <div className="jokebox">
      <img src={placeholder} alt="placeholder logo" />
      <h1>Jokebox</h1>
      <br />
      <h2>Captians: Deanna Palazzo Dalzell & James Dalzell </h2>
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

import React from "react";
import "../../Teams.css";
import sloclapslogo from "./Images/sloclapslogo.png";

export default function SloClaps() {
  return (
    <div className="sloclaps">
      <img src={sloclapslogo} alt="Slo Claps logo" />
      <h1>Slo Claps</h1>
      <br />
      <h2>Captians: Kyle Scott & Karen Hainstock </h2>
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

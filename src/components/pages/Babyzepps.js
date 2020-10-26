import React from "react";
import "../../Teams.css";
import bzlogo from "./Images/bzlogo.png";

export default function Babyzepps() {
  return (
    <div className="babyzepps">
      <img src={bzlogo} alt="baby zepps logo" />
      <h1>Baby Zepps</h1>
      <br />
      <h2>Captains: Dan Galea & Helder Brum</h2>
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

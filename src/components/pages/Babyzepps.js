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
      <br />
      <div>
        <iframe
          src="https://docs.google.com/spreadsheets/d/e/2PACX-1vTC88WoXfs5aB9JTpYlPS2zTMlaDthUlqyF2VypqWPYJkueEmDtGeFFNDYYnfqRqb7ICTQBzVvbFQuE/pubhtml?gid=189768612&fvid=1961323144&amp;single=true&amp;widget=false&amp;headers=false&amp;chrome=false"
          title="Zepps-Stats"
          width="1000px"
          height="800px"
        />
      </div>
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

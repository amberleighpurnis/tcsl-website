import React from "react";
import logo from "./logo.png";
import "../../App.css";

export default function Home() {
  return (
    <div className="home">
      <header>TORONTO COMEDY SOFTBALL LEAGUE</header>
      <body>
        <p>
          <img src={logo} alt="logo" id="main-logo" />
        </p>
        <p className="body">
          The Toronto Comedy Softball League (TCSL) is comprised of 10 teams
          filled with players from the comedy and creative community. The season
          runs from early May to late September. Games run every Saturday
          starting from 10:00 and the last game starting at 16:00. If you are
          interested in joining one of our teams please visit our{" "}
          <a
            href="https://www.facebook.com/groups/405723566219203/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Facebook page
          </a>{" "}
          and answer the required questions and a member of our executive team
          will get back to you.
        </p>
      </body>
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

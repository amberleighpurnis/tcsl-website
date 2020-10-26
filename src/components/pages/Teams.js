import React from "react";
import { Link } from "react-router-dom";
import "../../App.css";
import bzlogo from "./Images/bzlogo.png";
import cbarlogo from "./Images/cbarlogo.png";
import bdlogo from "./Images/bdlogo.png";
import blogo from "./Images/blogo.png";
import babhlogo from "./Images/babhlogo.png";
import hlogo from "./Images/hlogo.png";
import pthingslogo from "./Images/pthingslogo.png";
import sloclapslogo from "./Images/sloclapslogo.png";
import orphanslogo from "./Images/orphanslogo.png";
import placeholder from "./Images/placeholder.png";

export default function Teams(props) {
  return (
    <div className="teams">
      <h1>Teams</h1>
      <p className="description">
        This league is comprised of two divisions: 416 and 647. In each
        division, teams play each other twice throughout the regular season and
        once against each team in the second division. Playoff spots are based
        off of standings in the regular season, please see rules for points
        system. Each team will have a game in the playoffs, 1st place teams go
        straight to second week of playoffs.
      </p>
      <h3 className="division">416 DIVISION</h3>
      <div className="team-name">
        <ul>
          <Link to="/teams/beauties" className="team-link">
            <img src={blogo} alt="beauties" className="team-logo" />
          </Link>
          <li>The Beauties</li>
        </ul>
        <ul>
          <Link to="/teams/comedy-bar" className="team-link">
            <img src={cbarlogo} alt="comedy bar logo" className="team-logo" />
          </Link>
          <li>Comedy Bar</li>
        </ul>
        <ul>
          <Link to="/teams/jokebox" className="team-link">
            <img
              src={placeholder}
              alt="placeholder logo"
              className="team-logo"
            />
          </Link>
          <li>Joke Box</li>
        </ul>
        <ul>
          <Link to="/teams/hecklers" className="team-link">
            <img src={hlogo} alt="Hecklers logo" className="team-logo" />
          </Link>
          <li>The Hecklers</li>
        </ul>
        <ul>
          <Link to="/teams/pringsthings" className="team-link">
            <img
              src={pthingslogo}
              alt="placeholder logo"
              className="team-logo"
            />{" "}
          </Link>
          <li>Pring's Things</li>
        </ul>
      </div>

      <h3 className="division">647 DIVISION</h3>
      <div className="team-name">
        <ul>
          <Link to="/teams/baby-zepps" className="team-link">
            <img src={bzlogo} alt="baby zepps logo" className="team-logo" />
          </Link>
          <li>Baby Zepps</li>
        </ul>
        <ul>
          <Link to="/teams/bad-dog" className="team-link">
            <img src={bdlogo} alt="bad dog logo" className="team-logo" />
          </Link>
          <li>Bad Dog</li>
        </ul>
        <ul>
          <Link to="/teams/beavis-and-buntheads" className="team-link">
            <img
              src={babhlogo}
              alt="beavis and buntheads logo"
              className="team-logo"
            />
          </Link>
          <li>Beavis & Buntheads</li>
        </ul>
        <ul>
          <Link to="/teams/orphans" className="team-link">
            <img src={orphanslogo} alt="orphans logo" className="team-logo" />
          </Link>
          <li>The Orphans</li>
        </ul>
        <ul>
          <Link to="/teams/sloclaps" className="team-link">
            <img
              src={sloclapslogo}
              alt="Slo Claps logo"
              className="team-logo"
            />
          </Link>
          <li>Slo Claps</li>
        </ul>
      </div>
    </div>
  );
}

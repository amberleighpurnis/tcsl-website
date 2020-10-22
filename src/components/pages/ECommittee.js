import React from "react";
import "../../App.css";

export default function ECommittee() {
  return (
    <div className="e-committee">
      <div className="container">
        <h1>Executive Committee 2021</h1>
        <div className="row">
          <div className="column-3">
            <ul className="general-managers">
              {" "}
              <h4> General Managers:</h4>
              <li>
                <i class="fas fa-baseball-ball" /> {""}
                <strong>Baby Zepps:</strong>
                <ol> Dan G. & Helder B. </ol>{" "}
              </li>
              <li>
                <i class="fas fa-baseball-ball" /> {""}{" "}
                <strong>Bad Dog:</strong>
                <ol> Laura S. & Chris B.</ol>
              </li>
              <li>
                {" "}
                <i class="fas fa-baseball-ball" /> {""}
                <strong>The Beauties:</strong>
                <ol>Amber P. & Scott B. </ol>
              </li>
              <li>
                <i class="fas fa-baseball-ball" /> {""}
                <strong>Beavis and Buntheads:</strong>
                <ol> Freddie R. & Captain</ol>
              </li>
              <li>
                <i class="fas fa-baseball-ball" /> {""}
                <strong>Comedy Bar:</strong>
                <ol>Gary R. & Jen F. </ol>
              </li>
              <li>
                <i class="fas fa-baseball-ball" /> {""}
                <strong>Hecklers:</strong>
                <ol>Micheal W. & Justin W.</ol>
              </li>
              <li>
                <i class="fas fa-baseball-ball" /> {""}
                <strong>Jokebox:</strong>
                <ol>Deanna D. & James D.</ol>
              </li>
              <li>
                <i class="fas fa-baseball-ball" /> {""}
                <strong>The Orphans:</strong>
                <ol>Virginia W. & Dan R.</ol>
              </li>
              <li>
                <i class="fas fa-baseball-ball" /> {""}
                <strong>Pring's Things:</strong>
                <ol>Darryl P. & Allana M.</ol>
              </li>
              <li>
                <i class="fas fa-baseball-ball" /> {""}
                <strong>Slo Claps:</strong>
                <ol>Kyle S. & Karen H.</ol>
              </li>
            </ul>
          </div>

          <div className="column-3">
            <h4>Elected Committee:</h4>
            <ul>
              {" "}
              <li>
                <i class="fas fa-baseball-ball" /> {""}{" "}
                <strong>Treasurer:</strong> Andrew H.
              </li>
              <br />
              <li>
                <i class="fas fa-baseball-ball" /> {""}{" "}
                <strong>Head ScoreKeeper: </strong>TBD
              </li>
              <br />
              <li>
                <i class="fas fa-baseball-ball" /> {""}{" "}
                <strong>Social Committee: </strong>Arleigh C.
              </li>
              <br />
              <li>
                <i class="fas fa-baseball-ball" /> {""}{" "}
                <strong>Equipment Head:</strong> TBD
              </li>
              <br />
              <li>
                <i class="fas fa-baseball-ball" /> {""}{" "}
                <strong>Media/Tech Team: </strong>Jim K., Allana M. and Amber P.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

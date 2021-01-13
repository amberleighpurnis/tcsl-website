import React from "react";
import "../../App.css";

export default function Schedule() {
  return (
    <div className="schedule">
      <h1>Schedule 2021</h1>
      <div className="spreadsheet">
        <iframe
          src="https://docs.google.com/spreadsheets/d/e/2PACX-1vRLF_4eiB4w52YCmPwBppp78fE643HVHktcKlLzvmj4TxN2bBQrS9JGt4io-Asi6GDUwQQ99iKOjXVt/pubhtml?gid=0&amp;single=true&amp;widget=false&amp;headers=false&amp;chrome=false"
          title="schedule"
          width="869px"
          height="910px"
          className="tcsl-schedule"
        />
      </div>
    </div>
  );
}

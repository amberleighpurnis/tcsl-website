import React from "react";
import Navbar from "./components/Navbar";
import "./App.css";
import Home from "./components/pages/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Teams from "./components/pages/Teams";
import Babyzepps from "./components/pages/Babyzepps";
import Baddog from "./components/pages/Baddog";
import Beauties from "./components/pages/Beauties";
import Beavis from "./components/pages/Beavis";
import Comedybar from "./components/pages/Comedybar";
import Hecklers from "./components/pages/Hecklers";
import Jokebox from "./components/pages/Jokebox";
import PringsThings from "./components/pages/PringsThings";
import Orphans from "./components/pages/Orphans";
import SloClaps from "./components/pages/SloClaps";
import Rules from "./components/pages/Rules";
import Schedule from "./components/pages/Schedule";
import Stats from "./components/pages/Stats";
import ECommittee from "./components/pages/ECommittee";
import Photos from "./components/pages/Photos";

export default function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/teams" exact component={Teams} />
          <Route path="/teams/baby-zepps" component={Babyzepps} />
          <Route path="/teams/bad-dog" component={Baddog} />
          <Route path="/teams/beauties" component={Beauties} />
          <Route path="/teams/beavis-and-buntheads" component={Beavis} />
          <Route path="/teams/comedy-bar" component={Comedybar} />
          <Route path="/teams/hecklers" component={Hecklers} />
          <Route path="/teams/jokebox" component={Jokebox} />
          <Route path="/teams/pringsthings" component={PringsThings} />
          <Route path="/teams/orphans" component={Orphans} />
          <Route path="/teams/sloclaps" component={SloClaps} />
          <Route path="/rules" component={Rules} />
          <Route path="/schedule" component={Schedule} />
          <Route path="/stats" component={Stats} />
          <Route path="/ec" component={ECommittee} />
          <Route path="/photos" component={Photos} />
        </Switch>
      </Router>
    </>
  );
}

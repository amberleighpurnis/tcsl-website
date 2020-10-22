import React from "react";
import Navbar from "./components/Navbar";
import "./App.css";
import Home from "./components/pages/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Teams from "./components/pages/Teams";
import Rules from "./components/pages/Rules";
import Schedule from "./components/pages/Schedule";
import Stats from "./components/pages/Stats";
import ECommittee from "./components/pages/ECommittee";
import Photos from "./components/pages/Photos";

export default function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/teams" component={Teams} />
        <Route path="/rules" component={Rules} />
        <Route path="/schedule" component={Schedule} />
        <Route path="/stats" component={Stats} />
        <Route path="/ec" component={ECommittee} />
        <Route path="/photos" component={Photos} />
      </Switch>
    </Router>
  );
}

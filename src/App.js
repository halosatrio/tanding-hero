import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from "./pages/Home";
import Tanding from "./pages/Tanding";
import About from "./pages/About";

import "./style.scss";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/tanding" exact component={Tanding} />
        <Route path="/about" exact component={About} />
      </Switch>
    </Router>
  );
}

export default App;

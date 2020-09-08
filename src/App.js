import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Tanding from "./pages/Tanding";
import About from "./pages/About";

import "./style.scss";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Tanding} />
        <Route path="/about" exact component={About} />
      </Switch>
    </Router>
  );
}

export default App;

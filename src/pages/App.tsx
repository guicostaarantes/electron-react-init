import React from "react";
import { Switch, Route } from "react-router-dom";
import Router from "../utils/router/router";

import Home from "./Home";
import About from "./About";
import NotFound from "./NotFound";

// HINT: add your pages here. Check react-router docs if you have questions.
export default function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/about">
          <About />
        </Route>
        <Route exact path="*">
          <NotFound />
        </Route>
      </Switch>
    </Router>
  );
}

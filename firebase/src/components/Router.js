import React from "react";
import { HashRouter, Route, Switch } from "react-router-dom";
import Home from "./Home";
import FBAuth from "./Auth/FBAuth";
import Database from "./DB/Database";

const Router = () => {
  return (
    <HashRouter>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/auth">
          <FBAuth />
        </Route>
        <Route exact path="/database">
          <Database />
        </Route>
      </Switch>
    </HashRouter>
  );
};

export default Router;

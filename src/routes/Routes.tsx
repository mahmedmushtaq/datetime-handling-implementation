import React from "react";
import RoutesWithLayout from "./RoutesWithLayout";

import { BrowserRouter, Switch } from "react-router-dom";

import { Home } from "../views";

function Routes() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <RoutesWithLayout path={"/"} component={Home} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default Routes;

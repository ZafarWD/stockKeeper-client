import React from "react";
import { Switch, Route, Router, Redirect } from "react-router-dom";

import Navbar from "./components/common/Navbar";
import PlywoodsMain from "./components/plywoods/PlywoodsMain";
import BoardsMain from "./components/boards/BoardsMain";
import DoorsMain from "./components/doors/DoorsMain";
import history from "./history";

const App = () => {
  return (
    <Router history={history}>
      <React.Fragment>
        <Navbar />
        <Switch>
          <Route path="/plywoods" component={PlywoodsMain} />
          <Route path="/boards" component={BoardsMain} />
          <Route path="/doors" component={DoorsMain} />
          <Redirect from="/" to="/plywoods" />
        </Switch>
      </React.Fragment>
    </Router>
  );
};

export default App;

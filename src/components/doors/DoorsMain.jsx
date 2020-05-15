import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import DoorsShow from "./DoorsShow";
import DoorsCreate from "./DoorsCreate";
import DoorsEdit from "./DoorsEdit";
import DoorsDelete from "./DoorsDelete";

const DoorsMain = (props) => {
  return (
    <Switch>
      <Route path="/doors/show" component={DoorsShow} />
      <Route path="/doors/create" component={DoorsCreate} />
      <Route path="/doors/edit/:id" component={DoorsEdit} />
      <Route path="/doors/delete/:id" component={DoorsDelete} />
      <Redirect from="/doors" to="/doors/show" />
    </Switch>
  );
};

export default DoorsMain;

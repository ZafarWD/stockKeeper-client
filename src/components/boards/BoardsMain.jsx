import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import BoardsShow from "./BoardsShow";
import BoardsCreate from "./BoardsCreate";
import BoardsEdit from "./BoardsEdit";
import BoardsDelete from "./BoardsDelete";

const BoardsMain = () => {
  return (
    <Switch>
      <Route path="/boards/show" component={BoardsShow} />
      <Route path="/boards/create" component={BoardsCreate} />
      <Route path="/boards/edit/:id" component={BoardsEdit} />
      <Route path="/boards/delete/:id" component={BoardsDelete} />
      <Redirect from="/boards" to="/boards/show" />
    </Switch>
  );
};

export default BoardsMain;

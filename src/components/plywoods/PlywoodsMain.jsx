import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import PlywoodsShow from "./PlywoodsShow";
import PlywoodsCreate from "./PlywoodsCreate";
import PlywoodsEdit from "./PlywoodsEdit";
import PlywoodsDelete from "./PlywoodsDelete";

const PlywoodsMain = () => {
  return (
    <Switch>
      <Route path="/plywoods/show" component={PlywoodsShow} />
      <Route path="/plywoods/create" component={PlywoodsCreate} />
      <Route path="/plywoods/edit/:id" exact component={PlywoodsEdit} />
      <Route path="/plywoods/delete/:id" exact component={PlywoodsDelete} />
      <Redirect from="/plywoods" to="plywoods/show" />
    </Switch>
  );
};

export default PlywoodsMain;

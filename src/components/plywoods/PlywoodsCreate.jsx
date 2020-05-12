import React from "react";
import { connect } from "react-redux";

import { createPlywood } from "../../actions";
import measurements from "./measurements";
import mmsArray from "./plywoodsMms";
import CreateForm from "../common/CreateForm";

const PlywoodsCreate = ({ createPlywood }) => {
  return (
    <div className="container mt-5">
      <h1 className="my-5">Create new plywood stock!</h1>
      <CreateForm
        measurements={measurements}
        mmsArray={mmsArray}
        onSubmit={createPlywood}
      />
    </div>
  );
};

export default connect(null, { createPlywood })(PlywoodsCreate);

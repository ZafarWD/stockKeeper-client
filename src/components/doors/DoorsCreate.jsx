import React from "react";
import { connect } from "react-redux";

import { createDoor } from "../../actions";
import measurements from "./measurements";
import mmsArray from "./doorsMms";
import CreateForm from "../common/CreateForm";

const DoorsCreate = ({ createDoor }) => {
  return (
    <div className="container mt-5">
      <h1 className="my-5">Create new doors stock!</h1>
      <CreateForm
        measurements={measurements}
        mmsArray={mmsArray}
        onSubmit={createDoor}
      />
    </div>
  );
};

export default connect(null, { createDoor })(DoorsCreate);

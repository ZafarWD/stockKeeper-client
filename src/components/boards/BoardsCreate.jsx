import React from "react";
import { connect } from "react-redux";

import { createBoard } from "../../actions";
import measurements from "./measurements";
import mmsArray from "./boardsMms";
import CreateForm from "../common/CreateForm";

const BoardsCreate = ({ createBoard }) => {
  return (
    <div className="container mt-5">
      <h1 className="my-5">Create new boards stock!</h1>
      <CreateForm
        measurements={measurements}
        mmsArray={mmsArray}
        onSubmit={createBoard}
      />
    </div>
  );
};

export default connect(null, { createBoard })(BoardsCreate);

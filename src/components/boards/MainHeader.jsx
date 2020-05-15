import React from "react";
import { connect } from "react-redux";

import { boardMeasurementSelect, boardMmSelect } from "../../actions";
import Dropdown from "../../components/common/Dropdown";
import mmsArray from "./boardsMms";
import measurementsArray from "./measurements";
import CreateButton from "../common/CreateButton";

const MainHeader = ({ boardMeasurementSelect, boardMmSelect }) => {
  return (
    <div className="row my-5">
      <div className="col-3 text-center">
        <h1>BOARDS</h1>
      </div>
      <div className="col-3 text-center">
        <Dropdown
          className="success"
          label="Measurements"
          array={measurementsArray}
          handleClick={boardMeasurementSelect}
        />
      </div>
      <div className="col-3 text-center">
        <Dropdown
          className="dark"
          array={mmsArray}
          label="mms"
          handleClick={boardMmSelect}
        />
      </div>
      <div className="col-3 text-center">
        <CreateButton label="New Company" path="/boards/create" />
      </div>
    </div>
  );
};

export default connect(null, {
  boardMeasurementSelect,
  boardMmSelect,
})(MainHeader);

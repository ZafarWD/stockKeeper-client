import React from "react";
import { connect } from "react-redux";

import Dropdown from "../../components/common/Dropdown";
import measurements from "./measurements";
import mmsArray from "./doorsMms";
import { doorMeasurementSelect, doorMmSelect } from "../../actions";
import CreateButton from "../common/CreateButton";
import DividedDropdown from "../common/DividedDropdown";

const MainHeader = ({ doorMmSelect, doorMeasurementSelect }) => {
  return (
    <div className="row my-5">
      <div className="col-3 text-center">
        <h1>DOORS</h1>
      </div>
      <div className="col-3 text-center">
        <DividedDropdown
          label="Measurements"
          array={measurements}
          className="success"
          handleClick={doorMeasurementSelect}
        />
      </div>
      <div className="col-3 text-center">
        <Dropdown
          label="mms"
          array={mmsArray}
          className="secondary"
          handleClick={doorMmSelect}
        />
      </div>
      <div className="col-3 text-center">
        <CreateButton path="/doors/create" label="New Company" />
      </div>
    </div>
  );
};

export default connect(null, { doorMeasurementSelect, doorMmSelect })(
  MainHeader
);

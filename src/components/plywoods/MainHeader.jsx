import React from "react";
import { connect } from "react-redux";

import Dropdown from "../../components/common/Dropdown";
import { plyMeasurementSelect, plyMmSelect } from "../../actions";
import measurementsArray from "./measurements";
import mmArray from "./plywoodsMms";
import CreateButton from "../common/CreateButton";

const MainHeader = ({ plyMeasurementSelect, plyMmSelect }) => {
  return (
    <div className="row my-5">
      <div className="col-3 text-center">
        <h1>PLYWOODS</h1>
      </div>
      <div className="col-3 text-center">
        <Dropdown
          label="Measurements"
          array={measurementsArray}
          handleClick={plyMeasurementSelect}
          className="success"
        />
      </div>
      <div className="col-3 text-center">
        <Dropdown
          label="mms"
          array={mmArray}
          handleClick={plyMmSelect}
          className="dark"
        />
      </div>
      <div className="col-3 text-center">
        <CreateButton label="New Company" path="/plywoods/create" />
      </div>
    </div>
  );
};

export default connect(null, { plyMeasurementSelect, plyMmSelect })(MainHeader);

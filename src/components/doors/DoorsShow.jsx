import React, { useEffect } from "react";
import { connect } from "react-redux";

import MainHeader from "../doors/MainHeader";
import TableHeader from "../common/TableHeader";
import { fetchDoors } from "../../actions";
import mapItemsToquery from "../../utils/mapItemsToquery";
import TableContent from "../common/TableContent";

const DoorsShow = ({
  fetchDoors,
  doors,
  selectedDoorMeasurement,
  selectedDoorMm,
}) => {
  useEffect(() => {
    fetchDoors();
  }, [fetchDoors]);

  const renderDoors = (array, selectedMeasurement, selectedMm) => {
    let toRender = mapItemsToquery(array, selectedMeasurement, "measurement");
    toRender = mapItemsToquery(toRender, selectedMm, "mm");
    if (!toRender.length)
      return <div className="text-danger text-center">Nothing matches...</div>;
    else return <TableContent array={toRender} type="doors" />;
  };

  return (
    <div className="container">
      <MainHeader />
      <TableHeader />
      {renderDoors(doors, selectedDoorMeasurement, selectedDoorMm)}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    doors: Object.values(state.doors),
    selectedDoorMeasurement: state.doorQuery,
    selectedDoorMm: state.doorMmQuery,
  };
};

export default connect(mapStateToProps, { fetchDoors })(DoorsShow);

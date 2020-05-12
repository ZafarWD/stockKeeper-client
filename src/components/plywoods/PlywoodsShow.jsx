import React, { useEffect } from "react";
import { connect } from "react-redux";

import { fetchPlywoods } from "../../actions";
import TableHeader from "../common/TableHeader";
import MainHeader from "./MainHeader";
import mapItemsToQuery from "../../utils/mapItemsToquery";
import TableContent from "../common/TableContent";

const PlywoodsShow = ({
  fetchPlywoods,
  plywoods,
  selectedPlyMeasurement,
  selectedPlyMM,
}) => {
  useEffect(() => {
    fetchPlywoods();
  }, [fetchPlywoods]);

  const renderPlywoods = (plywoods, selectedPlyMeasurement, selectedPlyMM) => {
    let toRender = mapItemsToQuery(
      plywoods,
      selectedPlyMeasurement,
      "measurement"
    );
    toRender = mapItemsToQuery(toRender, selectedPlyMM, "mm");
    if (!toRender.length)
      return <div className="text-center"> Nothing matches! :(</div>;
    else {
      return <TableContent array={toRender} type="plywoods" />;
    }
  };

  return (
    <div className="container">
      <MainHeader />
      <TableHeader />
      {renderPlywoods(plywoods, selectedPlyMeasurement, selectedPlyMM)}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    plywoods: Object.values(state.plywoods),
    selectedPlyMeasurement: state.plyQuery,
    selectedPlyMM: state.plyMmQuery,
  };
};

export default connect(mapStateToProps, { fetchPlywoods })(PlywoodsShow);

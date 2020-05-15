import React, { useEffect } from "react";
import { connect } from "react-redux";

import { fetchBoards } from "../../actions";
import TableHeader from "../common/TableHeader";
import TableContent from "../common/TableContent";
import MainHeader from "../boards/MainHeader";
import mapItemsToQuery from "../../utils/mapItemsToquery";

const BoardsShow = ({
  fetchBoards,
  boards,
  selectedBoardMm,
  selectedBoardMeasurement,
}) => {
  useEffect(() => {
    fetchBoards();
  }, [fetchBoards]);

  const renderBoards = (array, selectedMeasurement, selectedMm) => {
    let toRender = mapItemsToQuery(array, selectedMeasurement, "measurement");
    toRender = mapItemsToQuery(toRender, selectedMm, "mm");
    if (!toRender.length)
      return <div className="text-center text-danger">Nothing matches...</div>;
    else return <TableContent array={toRender} type="boards" />;
  };

  return (
    <div className="container">
      <MainHeader />
      <TableHeader />
      {renderBoards(boards, selectedBoardMeasurement, selectedBoardMm)}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    boards: Object.values(state.boards),
    selectedBoardMeasurement: state.boardQuery,
    selectedBoardMm: state.boardMmQuery,
  };
};

export default connect(mapStateToProps, { fetchBoards })(BoardsShow);

import React, { useEffect } from "react";
import { connect } from "react-redux";

import EditForm from "../common/EditForm";
import { updateBoard, fetchBoard } from "../../actions";

const BoardsEdit = ({ match, fetchBoard, updateBoard, item }) => {
  const { id } = match.params;

  useEffect(() => {
    fetchBoard(id);
  }, [fetchBoard, id]);

  const renderHeading = () => {
    if (item)
      return <h3 className="text-center">Current Stock: {item.stock}</h3>;
    else return null;
  };

  return (
    <div className="container">
      <h1 className="my-5">Update Stock here...</h1>
      {renderHeading()}
      <EditForm
        initialValues={item && item}
        onSubmit={updateBoard}
        id={match.params.id}
      />
    </div>
  );
};

const mapStateToProps = (state, ownProps) => {
  return { item: state.boards[ownProps.match.params.id] };
};

export default connect(mapStateToProps, {
  fetchBoard,
  updateBoard,
})(BoardsEdit);

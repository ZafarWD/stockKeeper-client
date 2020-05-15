import React, { useEffect } from "react";
import { connect } from "react-redux";

import Modal from "../common/Modal";
import history from "../../history";
import { deleteBoard, fetchBoard } from "../../actions";

const BoardsDelete = (props) => {
  const { fetchBoard } = props;
  const { id } = props.match.params;
  useEffect(() => {
    fetchBoard(id);
  }, [fetchBoard, id]);

  const renderActions = () => {
    return (
      <React.Fragment>
        <button
          className="btn btn-danger"
          onClick={() => props.deleteBoard(props.match.params.id)}
        >
          Delete
        </button>
        <button
          className="btn btn-secondary"
          onClick={() => history.push("/boards")}
        >
          Cancel
        </button>
      </React.Fragment>
    );
  };

  const renderBody = (item) => {
    const message = "Are you sure you want to delete this item";
    if (item)
      return `${message} with Company: ${item.company} and stock: ${item.stock}`;
    else return `${message}`;
  };

  return (
    <Modal
      title="Delete Board?"
      body={renderBody(props.item)}
      actions={renderActions()}
      onDismiss={() => history.push("/boards")}
    />
  );
};

const mapStateToProps = (state, ownProps) => {
  return { item: state.boards[ownProps.match.params.id] };
};

export default connect(mapStateToProps, { deleteBoard, fetchBoard })(
  BoardsDelete
);

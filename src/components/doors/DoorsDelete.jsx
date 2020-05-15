import React, { useEffect } from "react";
import { connect } from "react-redux";

import Modal from "../common/Modal";
import history from "../../history";
import { fetchDoor, deleteDoor } from "../../actions";

const DoorsDelete = ({ match, fetchDoor, deleteDoor, item }) => {
  const { id } = match.params;
  useEffect(() => {
    fetchDoor(id);
  }, [fetchDoor, id]);

  const renderBody = (item) => {
    const message = "Are you sure you want to delete this item";
    if (item)
      return `${message} with Company: ${item.company} and stock: ${item.stock}`;
    else return `${message}?`;
  };

  const renderActions = () => {
    return (
      <React.Fragment>
        <button className="btn btn-danger" onClick={() => deleteDoor(id)}>
          Delete
        </button>
        <button
          className="btn btn-secondary"
          onClick={() => history.replace("/doors")}
        >
          Cancel
        </button>
      </React.Fragment>
    );
  };

  return (
    <Modal
      title="Delete Door?"
      body={renderBody(item)}
      actions={renderActions()}
      onDismiss={() => history.push("/doors")}
    />
  );
};

const mapStateToProps = (state, ownProps) => {
  return { item: state.doors[ownProps.match.params.id] };
};

export default connect(mapStateToProps, { fetchDoor, deleteDoor })(DoorsDelete);

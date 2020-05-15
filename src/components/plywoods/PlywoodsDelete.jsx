import React, { useEffect } from "react";
import { connect } from "react-redux";

import { fetchPlywood, deletePlywood } from "../../actions";
import Modal from "../common/Modal";
import history from "../../history";

const PlywoodsDelete = (props) => {
  const { fetchPlywood } = props;
  const { id } = props.match.params;

  useEffect(() => {
    fetchPlywood(id);
  }, [id, fetchPlywood]);

  const renderActions = () => {
    return (
      <React.Fragment>
        <button
          onClick={() => props.deletePlywood(props.match.params.id)}
          className="btn btn-danger mx-2"
        >
          Delete
        </button>

        <button
          onClick={() => history.replace("/")}
          className="btn btn-secondary mx-2"
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
    else return `${message}?`;
  };

  return (
    <Modal
      title="Delete Plywood?"
      body={renderBody(props.item)}
      actions={renderActions()}
      onDismiss={() => history.push("/")}
    />
  );
};

const mapStateToProps = (state, ownProps) => {
  return { item: state.plywoods[ownProps.match.params.id] };
};

export default connect(mapStateToProps, { fetchPlywood, deletePlywood })(
  PlywoodsDelete
);

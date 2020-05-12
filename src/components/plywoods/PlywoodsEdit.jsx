import React, { useEffect } from "react";
import { connect } from "react-redux";

import { fetchPlywood, updatePlywood } from "../../actions";
import EditForm from "../common/EditForm";

const PlywoodsEdit = (props) => {
  const { id } = props.match.params;
  const { fetchPlywood } = props;

  useEffect(() => {
    fetchPlywood(id);
  }, [id, fetchPlywood]);

  const renderHeading = () => {
    if (props.item)
      return <h3 className="text-center">Current Stock: {props.item.stock}</h3>;
    else return null;
  };

  return (
    <div className="container">
      <h1 className="my-5">Update Stock here...</h1>
      {renderHeading()}
      <EditForm
        initialValues={props.item && props.item}
        onSubmit={props.updatePlywood}
        id={props.match.params.id}
      />
    </div>
  );
};

const mapStateToProps = (state, ownProps) => {
  return { item: state.plywoods[ownProps.match.params.id] };
};

export default connect(mapStateToProps, {
  fetchPlywood,
  updatePlywood,
})(PlywoodsEdit);

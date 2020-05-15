import React, { useEffect } from "react";
import { connect } from "react-redux";

import { fetchDoor, updateDoor } from "../../actions";
import EditForm from "../common/EditForm";

const DoorsEdit = ({ fetchDoor, match, item, updateDoor }) => {
  const { id } = match.params;
  console.log(id);

  useEffect(() => {
    fetchDoor(id);
  }, [fetchDoor, id]);

  const renderHeading = () => {
    if (item)
      return <h1 className="text-center">Current Stock: {item.stock}</h1>;
    else return null;
  };

  return (
    <div className="container">
      <h1 className="my-5">Update Stock here...</h1>
      {renderHeading()}
      <EditForm initialValues={item} onSubmit={updateDoor} id={id} />
    </div>
  );
};

const mapStateToProps = (state, ownProps) => {
  return { item: state.doors[ownProps.match.params.id] };
};

export default connect(mapStateToProps, { fetchDoor, updateDoor })(DoorsEdit);

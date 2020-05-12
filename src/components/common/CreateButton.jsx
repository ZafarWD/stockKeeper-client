import React from "react";
import { Link } from "react-router-dom";

const CreateButton = ({ label, path }) => {
  return (
    <React.Fragment>
      <Link className="btn btn-lg btn-warning" to={path}>
        {label}
      </Link>
    </React.Fragment>
  );
};

export default CreateButton;

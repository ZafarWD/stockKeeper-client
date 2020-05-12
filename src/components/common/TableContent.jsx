import React from "react";
import { Link } from "react-router-dom";

const TableContent = ({ array, type }) => {
  return (
    <React.Fragment>
      {array.map((p, i) => (
        <div className="row my-4" key={i}>
          <div className="col-1"></div>
          <div className="col-1">{i + 1}</div>
          <div className="col-1 text-center">{p.measurement}</div>
          <div className="col-2 text-center">{p.mm}</div>
          <div className="col-3 text-center">{p.company}</div>
          <div className="col-1 text-center">{p.stock}</div>
          <div className="col-3 text-center">
            <Link to={`/${type}/edit/${p.id}`} className="btn btn-primary mx-2">
              Edit
            </Link>
            <Link
              to={`/${type}/delete/${p.id}`}
              className="btn btn-danger mx-2"
            >
              Delete
            </Link>
          </div>
        </div>
      ))}
      ;
    </React.Fragment>
  );
};

export default TableContent;

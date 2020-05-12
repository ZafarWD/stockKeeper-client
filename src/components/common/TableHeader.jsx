import React from "react";

const CommonHeader = () => {
  return (
    <React.Fragment>
      <hr />
      <div className="row">
        <div className="col-1"></div>
        <div className="col-1">
          <b>Sl No.</b>
        </div>
        <div className="col-1 text-center">
          <b>Measurement</b>
        </div>
        <div className="col-2 text-center">
          <b>mm</b>
        </div>
        <div className="col-3 text-center">
          <b>Company</b>
        </div>
        <div className="col-1 text-center">
          <b>Stock</b>
        </div>
        <div className="col-3 text-center">
          <b>Actions</b>
        </div>
      </div>
      <hr />
    </React.Fragment>
  );
};

export default CommonHeader;

import React from "react";

import { Navbar } from "reactstrap";
import { Link } from "react-router-dom";

const NavbarRe = (props) => {
  return (
    <React.Fragment>
      <Navbar color="light" light>
        <Link to="/doors" className="ml-5">
          <h2 className="text-primary">Doors</h2>
        </Link>
        <Link to="/plywoods">
          <h2 className="text-primary">Plywoods</h2>
        </Link>
        <Link to="/boards" className="mr-5">
          <h2 className="text-primary">Boards </h2>
        </Link>
      </Navbar>
    </React.Fragment>
  );
};

export default NavbarRe;

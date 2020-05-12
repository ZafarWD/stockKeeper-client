import React, { useState } from "react";
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";

const DropdownRe = ({ array, handleClick, label, className }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggle = () => setDropdownOpen((prevState) => !prevState);
  return (
    <React.Fragment>
      <Dropdown isOpen={dropdownOpen} toggle={toggle}>
        <DropdownToggle className={`btn btn-lg btn-${className}`} caret>
          {label}
        </DropdownToggle>
        <DropdownMenu>
          {array.map((m, i) => (
            <DropdownItem onClick={() => handleClick(m)} key={i}>
              {m === "" ? "All" : m}
            </DropdownItem>
          ))}
        </DropdownMenu>
      </Dropdown>
    </React.Fragment>
  );
};

export default DropdownRe;

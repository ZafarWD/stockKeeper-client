import React, { useState } from "react";
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";

const DividedDropdown = ({ array, handleClick, label, className }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggle = () => setDropdownOpen((prevState) => !prevState);
  return (
    <Dropdown isOpen={dropdownOpen} toggle={toggle}>
      <DropdownToggle className={`btn btn-lg btn-${className}`} caret>
        {label}
      </DropdownToggle>
      <DropdownMenu>
        <div className="row">
          {array.map((m, i) => (
            <DropdownItem
              className="col-4"
              onClick={() => handleClick(m)}
              key={i}
            >
              {m === "" ? "All" : m}
            </DropdownItem>
          ))}
        </div>
      </DropdownMenu>
    </Dropdown>
  );
};

export default DividedDropdown;

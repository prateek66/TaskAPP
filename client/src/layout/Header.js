//TODO: DONE set NavbarBrand to go to home page and export Header

import React from "react";
import { Navbar, NavbarBrand, NavbarText } from "reactstrap";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <Navbar color="info" light>
      <NavbarBrand className="text-white">
       App
      </NavbarBrand>
      <NavbarText className="text-white float-right">
       To-Do web application
      </NavbarText>
    </Navbar>
  );
};

export default Header;

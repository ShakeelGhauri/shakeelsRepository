import React from "react";
import { NavLink } from "react-router-dom";

function Header() {
  const activeStyle = {
    color: "orange",
  };
  return (
    <nav>
      <NavLink activeStyle={activeStyle} to="/">
        Home
      </NavLink>{" "}
      |{" "}
      <NavLink activeStyle={activeStyle} to="About">
        About
      </NavLink>{" "}
      |{" "}
      <NavLink activeStyle={activeStyle} to="Courses">
        Courses
      </NavLink>
    </nav>
  );
}

export default Header;

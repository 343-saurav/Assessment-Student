import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <>
      <div className="nav">
        <h1>StudentApp</h1>
        <ul className="nav-s">
          <li>
            <NavLink
              to="/addstudent"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active" : ""
              }
           >
              AddStudent
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/showstudent"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active" : ""
              }
            >
              ShowStudent
            </NavLink>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Header;

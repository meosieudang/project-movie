import React from "react";
import { NavLink } from "react-router-dom";

function NavItemAdmin() {
  return (
    <>
      <li className="nav-item">
        <NavLink
          exact
          activeClassName="active"
          to="/admin/movie"
          className="nav-link"
        >
          Manage Movie List
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink
          exact
          activeClassName="active"
          to="/admin/user"
          className="nav-link"
        >
          Manage User List
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink
          exact
          activeClassName="active"
          to="/admin/sticket"
          className="nav-link"
        >
          Manage Sticket List
        </NavLink>
      </li>
    </>
  );
}

export default NavItemAdmin;

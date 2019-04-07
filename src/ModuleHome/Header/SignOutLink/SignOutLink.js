import React from "react";
import { Link } from "react-router-dom";

function SignOutLink() {
  return (
    <>
      <li className="nav-item">
        <Link to="/signin" className="nav-link">
          Sign in
        </Link>
      </li>
    </>
  );
}

export default SignOutLink;

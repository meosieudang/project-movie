import React from "react";
import "./Sidenav.scss";
import { connect } from "react-redux";
import SignInLink from "../SignInLink/SignInLink";
import SignOutLink from "../SignOutLink/SignOutLink";

function Sidenav(props) {
  const { auth } = props;
  const links = auth.user ? (
    <SignInLink profile={auth.user} />
  ) : (
    <SignOutLink />
  );
  return (
    <div className="sidenav">
      <ul>{links}</ul>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    auth: state.auth
  };
};

export default connect(
  mapStateToProps,
  null
)(Sidenav);

/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from "react";
import "./Navbar.scss";
import { Link } from "react-router-dom";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import SignInLink from "../SignInLink/SignInLink";
import SignOutLink from "../SignOutLink/SignOutLink";
import { connect } from "react-redux";
import NavItem from "./NavItem";
import NavItemAdmin from "./NavItemAdmin";

class Navbar extends Component {
  state = { right: false, anchorEl: null };

  toggleDrawer = (side, open) => () => {
    this.setState({
      [side]: open
    });
  };

  render() {
    const { auth, history } = this.props;
    const links = auth.user ? (
      <SignInLink profile={auth.user} history={history} />
    ) : (
      <SignOutLink />
    );

    const navItemLink =
      auth.user !== null && auth.user.MaLoaiNguoiDung === "QuanTri" ? (
        <NavItemAdmin />
      ) : (
        <NavItem />
      );
    return (
      <nav className="navbar px-3 px-md-5 fixed-top shadow navbar__container">
        <Link to="/" className="navbar-brand mr-0">
          <i class="fa fa-fort-awesome" />
        </Link>

        <ul className="navbar__menu d-none d-md-flex mb-0 list-unstyled">
          {navItemLink}
        </ul>

        <ul className="navbar__links d-md-flex mb-0 list-unstyled">{links}</ul>

        <div className="navbar__toggle d-block d-md-none">
          <a onClick={this.toggleDrawer("right", true)}>
            <i className="fa fa-align-justify" />
          </a>

          <SwipeableDrawer
            anchor="right"
            open={this.state.right}
            onClose={this.toggleDrawer("right", false)}
            onOpen={this.toggleDrawer("right", true)}
          >
            <div
              tabIndex={0}
              role="button"
              onClick={this.toggleDrawer("right", false)}
              onKeyDown={this.toggleDrawer("right", false)}
              className="navbar__toggle__menu"
            >
              <ul className="list-unstyled">{navItemLink}</ul>
            </div>
          </SwipeableDrawer>
        </div>
      </nav>
    );
  }
}

const mapStateToProps = state => {
  return {
    auth: state.auth
  };
};

export default connect(
  mapStateToProps,
  null
)(Navbar);

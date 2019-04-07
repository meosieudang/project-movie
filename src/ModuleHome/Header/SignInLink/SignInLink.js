/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { connect } from "react-redux";
import { signOut } from "../../../store/actions/index";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import { Link } from "react-router-dom";

class SignInLink extends React.Component {
  state = { anchorEl: null };

  handleClick = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  signOut = () => {
    this.props.signOut();
    this.props.history.push("/");
  };
  render() {
    const { anchorEl } = this.state;
    const { profile } = this.props;
    const linkAdmin =
      profile.MaLoaiNguoiDung === "QuanTri" ? (
        <>
          <Link
            to="/admin"
            onClick={this.handleClose}
            style={{ textDecoration: "none" }}
          >
            <MenuItem>Admin Page</MenuItem>
          </Link>
          <Link
            to="/"
            onClick={this.handleClose}
            style={{ textDecoration: "none" }}
          >
            <MenuItem>Home Page</MenuItem>
          </Link>
          <Link
            to="/admin/movie"
            onClick={this.handleClose}
            style={{ textDecoration: "none" }}
          >
            <MenuItem>Manage Movie List</MenuItem>
          </Link>
          <Link
            to="/admin/user"
            onClick={this.handleClose}
            style={{ textDecoration: "none" }}
          >
            <MenuItem>Manage User List</MenuItem>
          </Link>
          <Link
            to="/admin/sticket"
            onClick={this.handleClose}
            style={{ textDecoration: "none" }}
          >
            <MenuItem>Manage Sticket List</MenuItem>
          </Link>
        </>
      ) : null;

    return (
      <>
        <a onClick={this.handleClick} className="navbar__link__user">
          <i className="fa fa-user-circle-o" />
        </a>
        <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={this.handleClose}
        >
          <MenuItem onClick={this.handleClose}>Hi, {profile.HoTen}</MenuItem>
          {linkAdmin}
          <Link
            to={`/historybook/${profile.TaiKhoan}`}
            onClick={this.handleClose}
            style={{ textDecoration: "none" }}
          >
            <MenuItem>My Sticket</MenuItem>
          </Link>
          <MenuItem onClick={this.signOut}>Logout</MenuItem>
        </Menu>
      </>
    );
  }
}
export default connect(
  null,
  { signOut }
)(SignInLink);

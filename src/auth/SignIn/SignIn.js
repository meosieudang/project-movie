import React, { Component } from "react";
import { TextField, Button } from "@material-ui/core";
import "./SignIn.scss";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { signInRequest } from "../../store/actions/index";
import Validator from "validator";

class SignIn extends Component {
  state = {
    username: "",
    password: "",
    usernameErr: "",
    passwordErr: ""
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  validate = value => {
    const err = {};
    if (Validator.isEmpty(value.username))
      err.usernameErr = "No empty this field bro !!";
    if (Validator.isEmpty(value.password))
      err.passwordErr = "No empty this field bro !!";
    this.setState({
      usernameErr: err.usernameErr,
      passwordErr: err.passwordErr
    });
    return err;
  };

  onSubmit = e => {
    e.preventDefault();
    const err = this.validate(this.state);
    if (Object.keys(err).length === 0) {
      const user = {
        username: this.state.username,
        password: this.state.password
      };
      this.props.signInRequest(user);

      this.setState({
        username: "",
        password: "",
        usernameErr: "",
        passwordErr: ""
      });
    }
  };

  componentDidUpdate() {
    const { auth } = this.props;
    if (auth.user) {
      this.props.handleClickLogin();
    }
  }

  render() {
    const { auth } = this.props;
    const { username, password, usernameErr, passwordErr } = this.state;
    if (auth.user && auth.user.MaLoaiNguoiDung === "KhachHang")
      return <Redirect to="/" />;
    if (auth.user && auth.user.MaLoaiNguoiDung === "QuanTri")
      return <Redirect to="/admin/user" />;
    return (
      <>
        <div className="signin container text-center">
          <h1 className="display-4">Sign In</h1>
          <form onSubmit={this.onSubmit}>
            <p className="text-danger mb-0">{usernameErr}</p>
            <TextField
              error={usernameErr ? true : false}
              autoFocus
              label="Username"
              name="username"
              value={username}
              onChange={this.handleChange}
              margin="normal"
              className="signin__input mt-0"
            />
            <br />
            <br />
            <p className="text-danger mb-0">{usernameErr}</p>
            <TextField
              error={passwordErr ? true : false}
              label="Password"
              name="password"
              value={password}
              onChange={this.handleChange}
              margin="normal"
              className="signin__input mt-0"
            />
            <br />
            <br />
            <Button
              className="mr-md-5 mr-2"
              variant="contained"
              color="primary"
              type="submit"
            >
              Sign In
            </Button>
            <Link to="/signup">
              <Button variant="contained" color="primary">
                Sign Up
              </Button>
            </Link>

            <div className="text-danger mt-3 center">
              {auth.err ? <p>{auth.err}</p> : null}
            </div>
          </form>
        </div>
      </>
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
  { signInRequest }
)(SignIn);

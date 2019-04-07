import React, { Component } from "react";
import "./SignUp.scss";
import { TextField, Button } from "@material-ui/core";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { signUpRequest } from "../../store/actions/index";
import Validator from "validator";

class SignUp extends Component {
  state = {
    username: "",
    password: "",
    name: "",
    email: "",
    phone: "",
    confirmPassword: "",
    usernameErr: "",
    passwordErr: "",
    nameErr: "",
    emailErr: "",
    phoneErr: "",
    confirmPasswordErr: ""
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  validate = value => {
    const err = {};
    if (Validator.isEmpty(value.name))
      err.nameErr = "Please enter your name bro";
    else if (!Validator.isAlpha(value.name))
      err.nameErr = "No number your text bro !!";
    if (!Validator.isEmail(value.email)) err.emailErr = "Invalid email bro";
    if (!Validator.isNumeric(value.phone)) err.phoneErr = "Only number bro !!";
    if (Validator.isEmpty(value.username))
      err.usernameErr = "no empty this field bro !!";
    if (Validator.isEmpty(value.password))
      err.passwordErr = "no empty this field bro !!";

    if (Validator.isEmpty(value.confirmPassword))
      err.confirmPasswordErr = "no empty this field bro !!";
    else if (value.confirmPassword !== value.password)
      err.confirmPasswordErr = "Password mismatched";

    this.setState({
      usernameErr: err.usernameErr,
      passwordErr: err.passwordErr,
      nameErr: err.nameErr,
      emailErr: err.emailErr,
      phoneErr: err.phoneErr,
      confirmPasswordErr: err.confirmPasswordErr
    });

    return err;
  };

  onSubmit = e => {
    e.preventDefault();
    const err = this.validate(this.state);
    if (Object.keys(err).length === 0) {
      const newUser = {
        TaiKhoan: this.state.username,
        MatKhau: this.state.password,
        Email: this.state.email,
        SoDT: this.state.phone,
        MaNhom: "GP07",
        MaLoaiNguoiDung: "KhachHang",
        HoTen: this.state.name
      };

      this.props.signUpRequest(newUser);
    } else {
      console.log("err");
    }
  };

  render() {
    const { auth } = this.props;
    if (auth.user) return <Redirect to="/" />;
    const {
      username,
      password,
      name,
      email,
      phone,
      usernameErr,
      passwordErr,
      nameErr,
      emailErr,
      phoneErr,
      confirmPassword,
      confirmPasswordErr
    } = this.state;
    return (
      <div className="signup container text-center py-4">
        <h1 className="display-4">Sign Up</h1>
        <form onSubmit={this.onSubmit}>
          <div className="d-flex justify-content-around mb-2">
            <div>
              <span className="text-danger">{nameErr}</span>
              <br />
              <TextField
                error={nameErr ? true : false}
                autoFocus
                label="Name"
                name="name"
                value={name}
                onChange={this.handleChange}
                margin="normal"
                className="mt-0"
              />
            </div>

            <div>
              <span className="text-danger">{emailErr}</span>
              <br />
              <TextField
                error={emailErr ? true : false}
                label="Email"
                name="email"
                value={email}
                onChange={this.handleChange}
                margin="normal"
                className="mt-0"
              />
            </div>
          </div>

          <div className="d-flex justify-content-around mb-2">
            <div>
              <span className="text-danger">{phoneErr}</span>
              <br />
              <TextField
                error={phoneErr ? true : false}
                label="Phone"
                name="phone"
                value={phone}
                onChange={this.handleChange}
                margin="normal"
                className="mt-0"
              />
            </div>

            <div>
              <span className="text-danger">{usernameErr}</span>
              <br />
              <TextField
                error={usernameErr ? true : false}
                label="Username"
                name="username"
                value={username}
                onChange={this.handleChange}
                margin="normal"
                className="mt-0"
              />
            </div>
          </div>

          <div className="d-flex justify-content-around">
            <div>
              <span className="text-danger">{passwordErr}</span>
              <br />
              <TextField
                error={passwordErr ? true : false}
                label="Password"
                name="password"
                value={password}
                onChange={this.handleChange}
                margin="normal"
                className="mt-0"
                type="password"
              />
            </div>

            <div>
              <span className="text-danger">{confirmPasswordErr}</span>
              <br />
              <TextField
                error={confirmPasswordErr ? true : false}
                label="Confirm Password"
                name="confirmPassword"
                value={confirmPassword}
                onChange={this.handleChange}
                margin="normal"
                className="mt-0"
                type="password"
              />
            </div>
          </div>

          <br />
          <br />
          <Button
            className="mr-3"
            variant="contained"
            color="primary"
            type="submit"
          >
            Sign Up
          </Button>
          <Link to="/signin">
            <Button variant="contained" color="primary">
              Sign In
            </Button>
          </Link>
          <div className="text-danger mt-3 center">
            {auth.errSignUp ? <p>{auth.errSignUp}</p> : null}
          </div>
        </form>
      </div>
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
  { signUpRequest }
)(SignUp);

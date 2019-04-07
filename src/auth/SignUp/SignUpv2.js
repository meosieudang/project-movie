import React, { Component, Fragment } from "react";
import { Button, Typography, Grid } from "@material-ui/core";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { signUpRequest } from "../../store/actions/index";
import { validate } from "./Validation";
import { StyledPaper } from "../../ulti/StyledComponents/StyledPaper";
import { StyledTextField } from "../../ulti/StyledComponents/StyledTextFeild";

class SignUpv2 extends Component {
  state = {
    username: "",
    password: "",
    name: "",
    email: "",
    phone: "",
    confirmPassword: "",
    errors: {}
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();
    const check = validate(this.state);
    if (check && Object.keys(check).length !== 0) {
      this.setState({
        errors: { ...check }
      });
    } else {
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
    }
  };

  render() {
    const { auth } = this.props;
    const { errors } = this.state;
    if (auth.user) return <Redirect to="/" />;

    return (
      <Fragment>
        <form onSubmit={this.onSubmit}>
          <StyledPaper>
            <Typography variant="display3" align="center">
              Sign Up
            </Typography>
            <Grid container spacing={16}>
              <Grid item xs={12} md={6}>
                <StyledTextField
                  bongpro
                  label="Name"
                  onChange={this.handleChange}
                  name="name"
                  error={errors.name ? true : false}
                  helperText={errors.name ? errors.name : null}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <StyledTextField
                  label="Email"
                  onChange={this.handleChange}
                  name="email"
                  error={errors.email ? true : false}
                  helperText={errors.email ? errors.email : null}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <StyledTextField
                  bongpro
                  label="Phone"
                  onChange={this.handleChange}
                  name="phone"
                  error={errors.phoneEmpty ? true : errors.phone ? true : false}
                  helperText={
                    errors.phoneEmpty
                      ? errors.phoneEmpty
                      : errors.phone
                      ? errors.phone
                      : null
                  }
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <StyledTextField
                  label="Username"
                  onChange={this.handleChange}
                  name="username"
                  error={errors.username ? true : false}
                  helperText={errors.username ? errors.username : null}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <StyledTextField
                  bongpro
                  type="password"
                  label="Password"
                  onChange={this.handleChange}
                  name="password"
                  error={errors.password ? true : false}
                  helperText={errors.password ? errors.password : null}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <StyledTextField
                  type="password"
                  label="Re-Password"
                  onChange={this.handleChange}
                  name="confirmPassword"
                  error={
                    errors.confirmPassword ? true : errors.match ? true : false
                  }
                  helperText={
                    errors.confirmPassword
                      ? errors.confirmPassword
                      : errors.match
                      ? errors.match
                      : null
                  }
                />
              </Grid>
              <Grid
                container
                spacing={16}
                justify="center"
                style={{ marginTop: 10 }}
              >
                <Grid item>
                  <Button variant="contained" color="primary" type="submit">
                    Sign Up
                  </Button>
                </Grid>
                <Grid item>
                  <Link to="/signin">
                    <Button variant="contained" color="primary">
                      Sign In
                    </Button>
                  </Link>
                </Grid>
              </Grid>
            </Grid>
            <div className="text-danger mt-3 center">
              {auth.errSignUp ? <p>{auth.errSignUp}</p> : null}
            </div>
          </StyledPaper>
        </form>
      </Fragment>
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
)(SignUpv2);

import React, { Component, Fragment } from "react";
import { Grid, Button, Typography } from "@material-ui/core";
import { StyledTextField } from "../../ulti/StyledComponents/StyledTextFeild";
import { StyledPaper } from "../../ulti/StyledComponents/StyledPaper";
import { Link, Redirect } from "react-router-dom";
import { validateSignIn } from "./ValidationSignIn";
import { connect } from "react-redux";
import { signInRequest } from "../../store/actions/index";

class SignInv2 extends Component {
  state = {
    username: "",
    password: "",
    errors: {}
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();
    const check = validateSignIn(this.state);
    if (check && Object.keys(check).length !== 0) {
      this.setState({
        errors: { ...check }
      });
    } else {
      const user = {
        username: this.state.username,
        password: this.state.password
      };
      this.props.signInRequest(user);
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
    const { errors } = this.state;
    if (auth.user && auth.user.MaLoaiNguoiDung === "KhachHang")
      return <Redirect to="/" />;
    if (auth.user && auth.user.MaLoaiNguoiDung === "QuanTri")
      return <Redirect to="/admin/user" />;
    return (
      <Fragment>
        <form onSubmit={this.onSubmit}>
          <StyledPaper>
            <Typography variant="display3" align="center">
              Sign In
            </Typography>
            <Grid container spacing={16}>
              <Grid item xs={12}>
                <StyledTextField
                  autoFocus
                  bongpro
                  label="Username"
                  onChange={this.handleChange}
                  name="username"
                  error={errors.username ? true : false}
                  helperText={errors.username ? errors.username : null}
                />
              </Grid>
              <Grid item xs={12}>
                <StyledTextField
                  type="password"
                  label="Password"
                  onChange={this.handleChange}
                  name="password"
                  error={errors.password ? true : false}
                  helperText={errors.password ? errors.password : null}
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
                    Sign In
                  </Button>
                </Grid>
                <Grid item>
                  <Link to="/signup">
                    <Button variant="contained" color="primary">
                      Sign Up
                    </Button>
                  </Link>
                </Grid>
              </Grid>
            </Grid>
            <div className="text-danger mt-3 center">
              {auth.err ? <p>{auth.err}</p> : null}
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
  { signInRequest }
)(SignInv2);

import React, { Component } from "react";
import "./ActionPageUser.scss";
import { Link, Redirect } from "react-router-dom";
import Validate from "validator";
import ReactDOM from "react-dom";
import {
  TextField,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  OutlinedInput
} from "@material-ui/core";
import { connect } from "react-redux";
import {
  createUserRequest,
  getUser
} from "../../../store/actions/Admin/user/user";

class CreateUser extends Component {
  state = {
    username: "",
    password: "",
    email: "",
    phone: "",
    groupId: "",
    auth: "",
    name: ""
  };

  componentWillMount() {
    const { userEdit } = this.props;
    if (this.props.userEdit) {
      this.setState({
        username: userEdit.TaiKhoan,
        password: userEdit.MatKhau,
        email: userEdit.Email,
        phone: userEdit.SoDT,
        groupId: userEdit.MaNhom,
        auth: userEdit.MaLoaiNguoiDung,
        name: userEdit.HoTen,
        labelWidth: 0
      });
    } else {
      this.props.history.push("/admin/user");
    }
    // else {
    //   this.setState({
    //     username: "",
    //     password: "",
    //     email: "",
    //     phone: "",
    //     groupId: "",
    //     auth: "",
    //     name: "",
    //     labelWidth: 0
    //   });
    // }
  }

  componentDidMount() {
    this.setState({
      labelWidth: ReactDOM.findDOMNode(this.InputLabelRef).offsetWidth
    });
  }

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();
    const {
      username,
      password,
      email,
      phone,
      groupId,
      auth,
      name
    } = this.state;

    const newUser = {
      TaiKhoan: username,
      MatKhau: password,
      Email: email,
      SoDT: phone,
      MaNhom: groupId,
      MaLoaiNguoiDung: auth,
      HoTen: name
    };

    if (this.props.userEdit) {
      console.log("edit");
    } else {
      console.log("add");
      this.props.createUserRequest(newUser);
    }
  };

  render() {
    const {
      username,
      password,
      email,
      phone,
      groupId,
      auth,
      name
    } = this.state;
    const GROUP_ID = ["GP01", "GP02", "GP03", "GP04", "GP05", "GP06", "GP07"];
    const GROUP_AUTH = [
      { name: "Khách Hàng", value: "KhachHang" },
      { name: "Quản Trị", value: "QuanTri" }
    ];

    if (this.props.createUser) return <Redirect to="/admin/user" />;
    // if (!this.props.userEdit) return <Redirect to="/admin/user" />;

    const listGroupId = GROUP_ID.map(item => (
      <MenuItem value={item}>{item}</MenuItem>
    ));

    const listGroupAuth = GROUP_AUTH.map(item => (
      <MenuItem value={item.value}>{item.name}</MenuItem>
    ));

    return (
      <div className="createUser col-md-6 mx-auto mt-5 pt-5">
        <h1 className="display-4 text-center mb-5">Create New User</h1>
        <form className="col-12 mx-auto create__form" onSubmit={this.onSubmit}>
          <div className="chip">
            {/* {Validate.isEmpty(
              username && password && phone && groupId && auth && name && email
            ) ? (
              <ChipError value="You need to fill all of field" />
            ) : null}
            {!Validate.isEmail(email) ? (
              <ChipError value="Email invalid" />
            ) : null}
            {!Validate.isNumeric(phone) ? (
              <ChipError value="Phone invalid" />
            ) : null}
            {!Validate.isAlpha(name) ? (
              <ChipError value="Name invalid" />
            ) : null}
            {this.props.messageErr ? (
              <ChipError value={this.props.messageErr} />
            ) : null} */}
          </div>

          <div className="d-flex justify-content-center">
            <TextField
              required
              error={Validate.isEmpty(username) ? true : false}
              autoFocus
              label="Username..."
              variant="outlined"
              className="mr-md-3"
              onChange={this.onChange}
              name="username"
              value={username}
            />
            <TextField
              error={Validate.isEmpty(password) ? true : false}
              required
              label="Password..."
              variant="outlined"
              onChange={this.onChange}
              name="password"
              value={password}
            />
          </div>
          <br />
          <div className="d-flex justify-content-center ">
            <TextField
              error={!Validate.isEmail(email) ? true : false}
              required
              label="Email..."
              variant="outlined"
              className="mr-md-3"
              onChange={this.onChange}
              name="email"
              value={email}
            />
            <TextField
              error={!Validate.isNumeric(phone) ? true : false}
              required
              label="Phone..."
              variant="outlined"
              onChange={this.onChange}
              name="phone"
              value={phone}
            />
          </div>
          <br />
          <div className="d-flex justify-content-center w-50 mx-auto">
            <FormControl
              error={Validate.isEmpty(groupId) ? true : false}
              variant="outlined"
              className="mr-md-3 w-50"
            >
              <InputLabel
                ref={ref => {
                  this.InputLabelRef = ref;
                }}
                htmlFor="outlined-age-simple"
                style={{ zIndex: 1, backgroundColor: "white" }}
              >
                Group ID
              </InputLabel>
              <Select
                name="groupId"
                value={groupId}
                onChange={this.onChange}
                input={
                  <OutlinedInput
                    labelWidth={this.state.labelWidth}
                    name="age"
                    id="outlined-age-simple"
                  />
                }
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                {listGroupId}
              </Select>
            </FormControl>

            <FormControl
              error={Validate.isEmpty(auth) ? true : false}
              variant="outlined"
              className="mr-md-3 w-50"
            >
              <InputLabel
                ref={ref => {
                  this.InputLabelRef = ref;
                }}
                htmlFor="outlined-age-simple"
                style={{ zIndex: 1, backgroundColor: "white" }}
              >
                Group Auth
              </InputLabel>
              <Select
                name="auth"
                value={auth}
                onChange={this.onChange}
                input={
                  <OutlinedInput
                    labelWidth={this.state.labelWidth}
                    name="age"
                    id="outlined-age-simple"
                  />
                }
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                {listGroupAuth}
              </Select>
            </FormControl>
          </div>
          <br />
          <div className="w-50 mx-auto">
            <TextField
              error={!Validate.isAlpha(name) ? true : false}
              required
              label="Name..."
              variant="outlined"
              onChange={this.onChange}
              name="name"
              value={name}
            />
          </div>
          <br />
          <div className="d-flex justify-content-center mx-auto">
            <Button
              variant="contained"
              color="primary"
              className="mr-3"
              type="submit"
              disabled={
                Validate.isEmpty(
                  username &&
                    password &&
                    phone &&
                    groupId &&
                    auth &&
                    name &&
                    email
                )
                  ? true
                  : !Validate.isEmail(email)
                  ? true
                  : !Validate.isAlpha(name)
                  ? true
                  : !Validate.isNumeric(phone)
                  ? true
                  : false
              }
            >
              Submit
            </Button>
            <Button variant="contained" color="inherit" className="mr-3">
              <Link to="/admin/user" style={{ textDecoration: "none" }}>
                Back
              </Link>
            </Button>
          </div>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    createUser: state.user.createUser,
    userEdit: state.user.userEdit
  };
};

export default connect(
  mapStateToProps,
  { createUserRequest, getUser }
)(CreateUser);

import React from "react";
import "./DialogActionPage.scss";
import {
  Dialog,
  DialogContent,
  TextField,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  OutlinedInput,
  Slide,
  AppBar,
  Toolbar,
  Typography,
  IconButton
} from "@material-ui/core";
import { connect } from "react-redux";
import {
  createUserRequest,
  getUser,
  editUserRequest
} from "../../../store/actions/Admin/user/user";
import Validate from "validator";
import CloseIcon from "@material-ui/icons/Close";
import ChipError from "./ChipError";

function Transition(props) {
  return <Slide direction="up" {...props} />;
}

class DialogActionPage extends React.Component {
  state = {
    username: "",
    password: "",
    email: "",
    phone: "",
    groupId: "",
    auth: "",
    name: "",
    labelWidth: 0,
    isDisabled: false
  };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  componentWillReceiveProps(nextprops) {
    const { userEdit } = nextprops;
    if (nextprops && nextprops.userEdit !== null) {
      this.setState({
        username: userEdit.TaiKhoan,
        password: userEdit.MatKhau,
        email: userEdit.Email,
        phone: userEdit.SoDT,
        groupId: userEdit.MaNhom,
        auth: userEdit.MaLoaiNguoiDung,
        name: userEdit.HoTen,
        labelWidth: 0,
        isDisabled: true
      });
    } else {
      this.setState({
        username: "",
        password: "",
        email: "",
        phone: "",
        groupId: "",
        auth: "",
        name: "",
        labelWidth: 0,
        isDisabled: false
      });
    }
  }

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
      this.props.editUserRequest(newUser);
    } else {
      console.log("add");
      this.props.createUserRequest(newUser);
    }
    this.props.handleClose();
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

    const listGroupId = GROUP_ID.map((item, index) => (
      <MenuItem value={item} key={index}>
        {item}
      </MenuItem>
    ));

    const listGroupAuth = this.props.getAuth.map((item, index) => (
      <MenuItem value={item.MaLoaiNguoiDung} key={index}>
        {item.TenLoai}
      </MenuItem>
    ));
    return (
      <>
        <Dialog
          fullScreen
          TransitionComponent={Transition}
          open={this.props.open}
          onClose={this.props.handleClose}
          aria-labelledby="form-dialog-title"
        >
          <AppBar className={this.props.userEdit ? "bg-warning" : "bg-success"}>
            <Toolbar>
              <IconButton
                color="inherit"
                onClick={this.props.handleClose}
                aria-label="Close"
              >
                <CloseIcon />
              </IconButton>
              <Typography variant="h6" color="inherit">
                {this.props.userEdit ? "Edit User" : "Add New User"}
              </Typography>
            </Toolbar>
          </AppBar>

          <DialogContent className="mt-5 pt-5">
            <form
              className="col-12 mx-auto create__form"
              onSubmit={this.onSubmit}
            >
              <div className="chip">
                {Validate.isEmpty(
                  username &&
                    password &&
                    phone &&
                    groupId &&
                    auth &&
                    name &&
                    email
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
                ) : null}
              </div>
              <div className="d-block d-md-flex justify-content-center w-50 m-auto create__form__input">
                <TextField
                  required
                  error={Validate.isEmpty(username) ? true : false}
                  autoFocus
                  label="Username..."
                  variant="outlined"
                  className="mr-md-3 mb-3 form__input"
                  onChange={this.onChange}
                  name="username"
                  value={username}
                  disabled={this.state.isDisabled ? true : false}
                />
                <TextField
                  error={Validate.isEmpty(password) ? true : false}
                  required
                  label="Password..."
                  variant="outlined"
                  onChange={this.onChange}
                  name="password"
                  value={password}
                  className="form__input"
                />
              </div>
              <br />
              <div className="d-block d-md-flex justify-content-center w-50 m-auto create__form__input">
                <TextField
                  error={!Validate.isEmail(email) ? true : false}
                  required
                  label="Email..."
                  variant="outlined"
                  className="mr-md-3 mb-3 form__input"
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
                  className="form__input"
                />
              </div>
              <br />
              <div className="d-block d-md-flex justify-content-center w-50 m-auto create__form__input">
                <FormControl
                  error={Validate.isEmpty(groupId) ? true : false}
                  variant="outlined"
                  className="w-50 mr-3 form__input mb-3"
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
                  className="w-50 form__input"
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
              <div className="w-25 mx-auto create__form__input">
                <TextField
                  error={!Validate.isAlpha(name) ? true : false}
                  required
                  label="Name..."
                  variant="outlined"
                  onChange={this.onChange}
                  name="name"
                  value={name}
                  className="form__input"
                />
              </div>
              <br />
              <div className="d-block d-md-flex justify-content-center w-75 m-auto pl-4 pl-md-0">
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
                <Button
                  variant="contained"
                  color="inherit"
                  className="mr-3"
                  onClick={this.props.handleClose}
                >
                  Back
                </Button>
              </div>
            </form>
          </DialogContent>
        </Dialog>
      </>
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
  { createUserRequest, getUser, editUserRequest }
)(DialogActionPage);

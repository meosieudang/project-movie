import React, { Component } from "react";
import {
  Dialog,
  DialogContent,
  TextField,
  Button,
  Slide,
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Grid,
  FormControlLabel,
  Radio,
  RadioGroup
} from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import { connect } from "react-redux";
import {
  createUserRequest,
  editUserRequest
} from "../../../store/actions/Admin/user/user";
import { StyledPaper } from "../../../ulti/StyledComponents/StyledPaper";
import styled from "styled-components";
import { validate } from "../Validation/ValidationModal";

function Transition(props) {
  return <Slide direction="up" {...props} />;
}

const StyledTextFeildOutLine = styled(props => (
  <TextField
    InputProps={{
      classes: {
        root: "root",
        focused: "focused",
        notchedOutline: "notchedOutline"
      }
    }}
    InputLabelProps={{
      classes: {
        root: "rootLabel",
        focused: "focused"
      }
    }}
    variant="outlined"
    fullWidth
    {...props}
  />
))`
  .root.focused {
    .notchedOutline {
      border-color: #20c997;
    }
  }
  .rootLabel.focused {
    color: #20c997;
  }
`;

class ModalActionPagev2 extends Component {
  state = {
    username: "",
    password: "",
    email: "",
    phone: "",
    groupId: "GP07",
    auth: "KhachHang",
    name: "",
    msg: null,
    errors: {}
  };

  componentWillReceiveProps(nextProps) {
    const { userEdit } = nextProps;
    if (nextProps && nextProps.userEdit) {
      this.setState({
        username: userEdit.TaiKhoan,
        password: userEdit.MatKhau,
        email: userEdit.Email,
        phone: userEdit.SoDT,
        groupId: userEdit.MaNhom,
        auth: userEdit.MaLoaiNguoiDung,
        name: userEdit.HoTen
      });
    } else {
      this.setState({
        username: "",
        password: "",
        email: "",
        phone: "",
        groupId: "GP07",
        auth: "KhachHang",
        name: "",
        errors: {}
      });
    }
  }

  componentDidUpdate(prevProps) {
    const { msgError, isAuthenticated } = this.props;
    if (msgError !== prevProps.msgError) {
      if (msgError) {
        this.setState({
          msg: msgError
        });
      } else {
        this.setState({
          msg: null
        });
      }
    }
    if (this.props.open) {
      if (isAuthenticated) {
        this.props.handleClose();
      }
    }
  }

  onChange = e => {
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
        MaNhom: this.state.groupId,
        MaLoaiNguoiDung: this.state.auth,
        HoTen: this.state.name
      };

      if (this.props.userEdit) {
        //edit
        this.props.editUserRequest(newUser);
        this.props.handleClose();
      } else {
        //add
        this.props.createUserRequest(newUser);
      }
    }
  };

  render() {
    const { getAuth, userEdit, msgError } = this.props;
    const { errors } = this.state;
    return (
      <Dialog
        fullScreen
        open={this.props.open}
        onClose={this.handleClose}
        TransitionComponent={Transition}
      >
        <AppBar>
          <Toolbar>
            <IconButton
              color="inherit"
              onClick={this.props.handleClose}
              aria-label="Close"
            >
              <CloseIcon />
            </IconButton>
            <Typography variant="h6" color="inherit" style={{ flexGrow: 1 }}>
              {userEdit ? "Edit User" : "Add New User"}
            </Typography>
            <Button color="inherit" type="submit">
              save
            </Button>
          </Toolbar>
        </AppBar>

        <DialogContent>
          <StyledPaper style={{ marginTop: "12vh" }}>
            <Typography
              variant="display3"
              align="center"
              style={{ marginBottom: "2rem" }}
            >
              {userEdit ? "Edit User" : "Add New User"}
            </Typography>

            <Typography
              variant="subtitle2"
              color="error"
              align="center"
              className="mb-3"
            >
              {msgError ? msgError : null}
            </Typography>

            <form onSubmit={this.onSubmit}>
              <Grid container spacing={8}>
                <Grid item xs={12} md={6}>
                  <StyledTextFeildOutLine
                    label="Name"
                    name="name"
                    value={this.state.name}
                    onChange={this.onChange}
                    error={errors.name ? true : false}
                    helperText={errors.name ? errors.name : null}
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <StyledTextFeildOutLine
                    label="Email"
                    onChange={this.onChange}
                    name="email"
                    value={this.state.email}
                    error={errors.email ? true : false}
                    helperText={errors.email ? errors.email : null}
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <StyledTextFeildOutLine
                    label="Phone Number"
                    onChange={this.onChange}
                    name="phone"
                    value={this.state.phone}
                    error={
                      errors.phoneEmpty ? true : errors.phone ? true : false
                    }
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
                  <StyledTextFeildOutLine
                    label="Group"
                    value={this.state.groupId}
                    InputProps={{
                      readOnly: true
                    }}
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <StyledTextFeildOutLine
                    label="Username"
                    name="username"
                    value={this.state.username}
                    onChange={this.onChange}
                    disabled={userEdit ? true : false}
                    error={errors.username ? true : false}
                    helperText={errors.username ? errors.username : null}
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <StyledTextFeildOutLine
                    label="Password"
                    onChange={this.onChange}
                    name="password"
                    value={this.state.password}
                    error={errors.password ? true : false}
                    helperText={errors.password ? errors.password : null}
                  />
                </Grid>
                <Grid item xs={12} md={12}>
                  <RadioGroup
                    name="auth"
                    value={this.state.auth}
                    onChange={this.onChange}
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      flexDirection: "row"
                    }}
                  >
                    {getAuth.map(auth => (
                      <FormControlLabel
                        key={auth.MaLoaiNguoiDung}
                        value={auth.MaLoaiNguoiDung}
                        control={<Radio />}
                        label={auth.MaLoaiNguoiDung}
                      />
                    ))}
                  </RadioGroup>
                </Grid>
              </Grid>
              <Grid container justify="center" spacing={8}>
                <Grid item>
                  <Button variant="contained" type="submit">
                    Submit
                  </Button>
                </Grid>
                <Grid item>
                  <Button variant="contained" onClick={this.props.handleClose}>
                    Back
                  </Button>
                </Grid>
              </Grid>
            </form>
          </StyledPaper>
        </DialogContent>
      </Dialog>
    );
  }
}

const mapStateToProps = state => {
  return {
    createUser: state.user.createUser,
    userEdit: state.user.userEdit,
    msgError: state.user.messageErr,
    isAuthenticated: state.user.isAuthenticated
  };
};

export default connect(
  mapStateToProps,
  { createUserRequest, editUserRequest }
)(ModalActionPagev2);

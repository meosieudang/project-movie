import React, { Component } from "react";
import "./UserList.scss";
import { connect } from "react-redux";
import {
  getListUserRequest,
  closeDialog,
  getAuthRequest,
  searchUser
} from "../../../store/actions/Admin/user/user";
import { Button, TextField } from "@material-ui/core";
import DialogActionPage from "../Dialog/DialogActionPage";
// import Pagination from "./Pagination";
// import NavItemTodo from "./NavItemTodo";
import Spinner from "../../../ulti/Spinner/Spinner";
import { TITLES } from "../../../store/constant/constant";
import { Redirect } from "react-router-dom";

class UserList extends Component {
  state = {
    open: false,
    currentPage: 1,
    todosPerPage: 5,
    active: false,
    search: ""
  };

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false }, () => this.props.closeDialog());
  };

  handleClick = event => {
    this.setState({
      currentPage: Number(event.target.id)
    });
  };

  componentDidMount() {
    this.props.getListUserRequest();
    this.props.getAuthRequest();
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value }, () =>
      this.props.searchUser(this.state.search)
    );
  };
  render() {
    const { users, getAuth, search } = this.props;
    const data = JSON.parse(localStorage.getItem("user"));
    if (Object.keys(users).length === 0) return <Spinner />;
    if (!data) return <Redirect to="/" />;
    if (data && data.MaLoaiNguoiDung === "KhachHang")
      return <Redirect to="/" />;

    // const searchUser =
    //   Object.keys(search).length === 0 ? (
    //     <NavItemTodo
    //       arr={users}
    //       currentPage={this.state.currentPage}
    //       todosPerPage={this.state.todosPerPage}
    //       handleClickOpen={this.handleClickOpen}
    //     />
    //   ) : (
    //     <NavItemTodo
    //       arr={search}
    //       currentPage={this.state.currentPage}
    //       todosPerPage={this.state.todosPerPage}
    //       handleClickOpen={this.handleClickOpen}
    //     />
    //   );

    const listTitle = TITLES.map((title, index) => {
      return <th key={index}>{title}</th>;
    });

    return (
      <>
        <DialogActionPage
          open={this.state.open}
          handleClickOpen={this.handleClickOpen}
          handleClose={this.handleClose}
          getAuth={getAuth}
        />
        <div className="userlist">
          <div className="card border-primary mt-4">
            <img className="card-img-top" src="holder.js/100px180/" alt="" />
            <div className="card-body">
              <h4 className="card-title">List Username</h4>
              <Button
                variant="contained"
                className="my-3 btn__add"
                onClick={this.handleClickOpen}
              >
                Add New User
              </Button>
              <TextField
                className="ml-5 mr-3 w-50 search"
                label="Search for username..."
                name="search"
                value={this.state.search}
                onChange={this.handleChange}
              />

              <table className="table table-bordered text-center table-responsive table-striped p-4">
                <thead>
                  <tr>{listTitle}</tr>
                </thead>
                <tbody>{searchUser}</tbody>
              </table>
              {/* {Object.keys(search).length === 0 ? (
                <Pagination
                  arr={users}
                  currentPage={this.state.currentPage}
                  todosPerPage={this.state.todosPerPage}
                  handleClick={this.handleClick}
                />
              ) : (
                <Pagination
                  arr={search}
                  currentPage={this.state.currentPage}
                  todosPerPage={this.state.todosPerPage}
                  handleClick={this.handleClick}
                />
              )} */}
            </div>
          </div>
        </div>
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    users: state.user.users,
    getAuth: state.user.getAuth,
    search: state.user.search
  };
};

export default connect(
  mapStateToProps,
  { getListUserRequest, closeDialog, getAuthRequest, searchUser }
)(UserList);

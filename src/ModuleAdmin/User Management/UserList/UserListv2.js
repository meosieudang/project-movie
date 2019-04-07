import React, { Component, Fragment } from "react";
import {
  Grid,
  Paper,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Fab,
  Tooltip,
  TextField
} from "@material-ui/core";
// import NavItemTodo from "./NavItemTodo";
import Spinner from "../../../ulti/Spinner/Spinner";
import { TITLES } from "../../../store/constant/constant";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import {
  getListUserRequest,
  closeDialog,
  getAuthRequest,
  searchUser
} from "../../../store/actions/Admin/user/user";
import { PaginationRender, ItemRender } from "./Pagination";
import styled from "styled-components";

import AddIcon from "@material-ui/icons/Add";
import ModalActionPagev2 from "../Dialog/ModalActionPagev2";

const StyledDiv = styled(props => (
  <div classes={{ root: "root" }} {...props} />
))`
  overflow-x: auto;
`;

const StyledFab = styled(props => (
  <Fab size="large" classes={{ root: "root" }} {...props} />
))`
  &.root {
    position: fixed;
    bottom: 35px;
    right: 34px;
    z-index: 99;
    background: #20c997;

    &:focus {
      outline: none;
    }
  }
`;

class UserListv2 extends Component {
  state = {
    open: false,
    currentPage: 1,
    todosPerPage: 5,
    active: false,
    search: "",
    labelWidth: 0
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

    return (
      <Fragment>
        <ModalActionPagev2
          open={this.state.open}
          handleClickOpen={this.handleClickOpen}
          handleClose={this.handleClose}
          getAuth={getAuth}
        />
        <Tooltip title="Add New User">
          <StyledFab onClick={this.handleClickOpen}>
            <AddIcon style={{ color: "white" }} />
          </StyledFab>
        </Tooltip>

        <Grid container>
          <Grid item xs={12}>
            <Paper style={{ margin: "0 2%", marginTop: "25vh" }}>
              <TextField
                label="Search field"
                type="search"
                margin="normal"
                className="ml-3"
                name="search"
                onChange={this.handleChange}
              />
              <StyledDiv>
                <Table>
                  <TableHead>
                    <TableRow>
                      {TITLES.map((title, id) => (
                        <TableCell key={id}>{title}</TableCell>
                      ))}
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {Object.keys(search).length !== 0 ? (
                      <ItemRender
                        currentPage={this.state.currentPage}
                        todosPerPage={this.state.todosPerPage}
                        arr={search}
                        handleClickOpen={this.handleClickOpen}
                      />
                    ) : (
                      <ItemRender
                        currentPage={this.state.currentPage}
                        todosPerPage={this.state.todosPerPage}
                        arr={users}
                        handleClickOpen={this.handleClickOpen}
                      />
                    )}
                  </TableBody>
                </Table>
              </StyledDiv>
              <PaginationRender
                currentPage={this.state.currentPage}
                todosPerPage={this.state.todosPerPage}
                arr={users}
                handleClick={this.handleClick}
              />
            </Paper>
          </Grid>
        </Grid>
      </Fragment>
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
)(UserListv2);

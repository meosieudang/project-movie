import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Switch } from "react-router-dom";
import Navbar from "./ModuleHome/Header/Navbar/Navbar";
import Home from "./ModuleHome/Home/Home";
import Detail from "./ModuleHome/Detail/Detail";
import HistoryBookSticket from "./ModuleHome/HistoryBookSticket/HistoryBookSticket";
import BookSticker from "./ModuleHome/BookSticker/BookSticker";
import HomeAdmin from "./ModuleAdmin/HomeAdmin/HomeAdmin";
import Snackbars from "./ulti/Snackbars/Snackbars";
import MovieList from "./ModuleAdmin/Movie Management/MovieList/MovieList";
import SignUpv2 from "./auth/SignUp/SignUpv2";
import SignInv2 from "./auth/SignIn/SignInv2";
import UserListv2 from "./ModuleAdmin/User Management/UserList/UserListv2";

class App extends Component {
  state = {
    open: false,
    openLogin: false,
    openNewUser: false
  };

  handleClick = () => {
    this.setState({
      open: true
    });
  };
  handleClickLogin = () => {
    this.setState({
      openLogin: true
    });
  };

  handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    this.setState({ open: false, openLogin: false, openNewUser: false });
  };

  render() {
    return (
      <>
        <Route component={({ history }) => <Navbar history={history} />} />
        <Switch>
          <Route
            exact
            path="/"
            component={({ match, history }) => (
              <Home match={match} history={history} />
            )}
          />
          <Route
            path="/signin"
            component={({ history }) => (
              <SignInv2
                history={history}
                handleClickLogin={this.handleClickLogin}
              />
            )}
          />
          <Route path="/signup" component={SignUpv2} />
          <Route
            path="/detail/:id"
            component={({ match, history }) => (
              <Detail match={match} history={history} />
            )}
          />
          <Route
            path="/bookstick/:id"
            component={({ match, history }) => (
              <BookSticker
                match={match}
                history={history}
                handleClick={this.handleClick}
              />
            )}
          />
          <Route
            path="/historybook/:username"
            component={({ match, history }) => (
              <HistoryBookSticket match={match} history={history} />
            )}
          />

          {/* ADMIN PAGE */}

          <Route exact path="/admin" component={HomeAdmin} />
          <Route path="/admin/user" component={UserListv2} />
          <Route path="/admin/movie" component={MovieList} />
        </Switch>

        <Snackbars
          open={this.state.open}
          handleClose={this.handleClose}
          value="Book Success"
        />

        <Snackbars
          open={this.state.openLogin}
          handleClose={this.handleClose}
          value="Login Success"
        />
      </>
    );
  }
}

export default App;

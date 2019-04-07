import React, { Component } from "react";
import { Redirect } from "react-router-dom";
class HomeAdmin extends Component {
  render() {
    const data = JSON.parse(localStorage.getItem("user"));
    if (data !== null && data.MaLoaiNguoiDung !== "QuanTri")
      return <Redirect to="/" />;
    if (data === null) return <Redirect to="/" />;
    return <div>HomeAdmin</div>;
  }
}

export default HomeAdmin;

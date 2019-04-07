import React, { Component } from "react";
import "./HistoryBookSticket.scss";
import { connect } from "react-redux";
import { getHistoryBookRequest } from "../../store/actions/movie";
import moment from "moment";
import { Redirect } from "react-router-dom";

class HistoryBookSticket extends Component {
  componentDidMount() {
    const { match } = this.props;
    const username = match.params.username;
    this.props.getHistoryBookRequest(username);
  }
  render() {
    const { history } = this.props;
    const data = JSON.parse(localStorage.getItem("user"));

    if (data === null) return <Redirect to="/" />;
    const listHistory = history.map((item, index) => {
      return (
        <tr key={item.MaGhe}>
          <th scope="row">{index + 1}</th>
          <td>{item.MaGhe}</td>
          <td>{item.TenPhim}</td>
          <td>{item.GiaVe}</td>
          <td>{moment(item.NgayDat).format("HH:mm dddd DD/MM/YY")}</td>
          <td>{item.Rap}</td>
        </tr>
      );
    });

    return (
      <div className="container history ">
        <h1 className="display-4 text-center mb-5">History Booking</h1>
        <span className="text-danger">You have {history.length} sticker</span>
        <table className="table table-hover table-responsive mt-4">
          <thead>
            <tr className="text-center">
              <th scope="col">#</th>
              <th scope="col">ID Seat</th>
              <th scope="col">Name Movie</th>
              <th scope="col">Price</th>
              <th scope="col">Date Book</th>
              <th scope="col">Theater</th>
            </tr>
          </thead>
          <tbody>{listHistory}</tbody>
        </table>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    history: state.movie.historyBook
  };
};

export default connect(
  mapStateToProps,
  { getHistoryBookRequest }
)(HistoryBookSticket);

import React, { Component } from "react";
import "./BookSticker.scss";
import { connect } from "react-redux";
import {
  getDetailBookRequest,
  bookSticketRequest
} from "../../store/actions/bookstick";
import Seat from "./Seat/Seat";
import { Button, Paper } from "@material-ui/core";
import Alert from "./Alert";
import Spinner from "../../ulti/Spinner/Spinner";
import SelectPayment from "./SelectPayment";

class BookSticker extends Component {
  state = {
    open: false,
    timeout: 300,
    value: null
  };

  format(time) {
    let seconds = time % 60;
    let minutes = Math.floor(time / 60);
    minutes = minutes.toString().length === 1 ? "0" + minutes : minutes;
    seconds = seconds.toString().length === 1 ? "0" + seconds : seconds;
    return minutes + ":" + seconds;
  }

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  handleChange = e => {
    this.setState({
      value: e.target.value
    });
  };

  componentDidUpdate() {
    const data = JSON.parse(localStorage.getItem("user"));
    if (!data) {
      alert("Please login to perform this function ");
      this.props.history.push("/signin");
    } else {
      return data;
    }
  }

  componentDidMount() {
    const { match } = this.props;
    const id = match.params.id;
    this.props.getDetailBookRequest(id);
    window.scrollTo(0, 0);

    this.timer = setInterval(() => {
      const newCount = this.state.timeout - 1;
      this.setState({
        timeout: newCount >= 0 ? newCount : this.timeOut()
      });
    }, 1000);
  }

  timeOut = () => {
    if (this.state.timeout === 0) {
      alert("Time out! Please re-book sticket");
      this.props.history.goBack();
    }
  };

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  handleSubmit = e => {
    e.preventDefault();
    const { seat, id } = this.props;
    const data = JSON.parse(localStorage.getItem("user"));
    const newBook = {
      MaLichChieu: id,
      TaiKhoanNguoiDung: data.TaiKhoan,
      DanhSachVe: seat
    };
    this.setState(
      {
        open: false
      },
      () => this.props.handleClick(),
      setTimeout(() => this.props.history.push("/"), 0)
    );
    this.props.bookSticketRequest(newBook);
  };

  render() {
    const { bookstick, availableSeat, seat, reserved } = this.props;
    if (Object.keys(bookstick).length === 0) return <Spinner />;
    const price = bookstick.map(item => item.GiaVe);
    const listSeat = bookstick.map((seat, i) => <Seat key={i} seat={seat} />);
    const numSeat = seat.map(item => (
      <span key={item.MaGhe}>
        {item.MaGhe}
        {", "}
      </span>
    ));

    const total = seat.reduce((a, b) => {
      return a + b.GiaVe;
    }, 0);

    const tax = parseFloat((total * 0.1).toFixed(2));

    return (
      <div className="bookstick">
        <div className="container bookstick__container">
          <div className="row">
            <div className="col-md-7">
              <div className="mb-3 d-block d-md-flex justify-content-around">
                <span className="lead">
                  Time to hold the seat:{" "}
                  <strong className="text-danger">
                    {this.format(this.state.timeout)}
                  </strong>
                </span>
                <div className="mt-3 mt-md-0">
                  <span>Seat empty: </span>
                  <Button
                    className="mr-2"
                    variant="contained"
                    style={{ width: "30px", height: "30px" }}
                  />
                  <span>Seat placed: </span>
                  <Button
                    className="bg-dark"
                    variant="contained"
                    style={{ width: "30px", height: "30px" }}
                  />
                </div>
              </div>
              <Paper>
                <div className="bookstick__seat">{listSeat}</div>
              </Paper>
            </div>

            <div className="col-md-5">
              {/* <div className="bookstick__ticket shadow"> */}
              <Paper style={{ padding: "2rem", marginBottom: 20 }}>
                <h1>
                  Price: <strong> {price[0]} VND</strong>
                </h1>
                <p className="lead">Number Seat: {numSeat}</p>
                <p className="lead">Available Seat: {availableSeat}</p>
                <p className="lead text-capitalize">
                  number of seats booked: {reserved}
                </p>
                <p className="lead">Tax: {tax} VND</p>
                <p className="lead">Total: {total + tax} VND</p>

                <SelectPayment
                  value={this.state.value}
                  handleChange={this.handleChange}
                />

                <form onSubmit={this.handleSubmit}>
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={this.handleClickOpen}
                    disabled={
                      this.state.value !== null &&
                      Object.keys(seat).length !== 0
                        ? false
                        : true
                    }
                  >
                    Book Sticket
                  </Button>

                  <Alert
                    handleClose={this.handleClose}
                    open={this.state.open}
                    handleSubmit={this.handleSubmit}
                  />
                </form>
              </Paper>
            </div>
            {/* </div> */}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    bookstick: state.bookstick.bookSticker,
    availableSeat: state.bookstick.available,
    seat: state.bookstick.seat,
    reserved: state.bookstick.reserved,
    id: state.bookstick.id
  };
};

export default connect(
  mapStateToProps,
  { getDetailBookRequest, bookSticketRequest }
)(BookSticker);

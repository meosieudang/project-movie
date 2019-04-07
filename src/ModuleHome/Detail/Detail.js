/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from "react";
import "./Detail.scss";
import { connect } from "react-redux";
import { getMovieRequest } from "../../store/actions/movie";
import { AppBar, Tabs, Tab, Button, CircularProgress } from "@material-ui/core";
import moment from "moment";
import Information from "./Information/Information";
import { Link } from "react-router-dom";
import { TAB_MENU, SHOWTIME } from "../../store/constant/constant";
import Spinner from "../../ulti/Spinner/Spinner";
import Footer from "../Footer/Footer";

class Detail extends Component {
  state = {
    value: 0,
    valueTab: 0
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };
  handleChangeTab = (event, valueTab) => {
    this.setState({ valueTab });
  };

  componentDidMount() {
    const { match } = this.props;
    const id = match.params.id;
    this.props.getMovieRequest(id);
    window.scrollTo(0, 0);
  }

  render() {
    const { movie } = this.props;
    const { value, valueTab } = this.state;
    if (Object.keys(movie).length === 0) return <Spinner />;

    const dateTime =
      movie.LichChieu !== undefined
        ? movie.LichChieu.map((item, i) => (
            <Tab
              key={i}
              label={moment(item.NgayChieuGioChieu).format("dddd DD/MM")}
            />
          ))
        : null;

    const show =
      movie.LichChieu !== undefined
        ? movie.LichChieu.map(item => (
            <p key={item.MaLichChieu}>
              <Link
                to={`/bookstick/${item.MaLichChieu}`}
                className="detail__button"
              >
                <Button variant="contained" className="mr-3">
                  {moment(item.NgayChieuGioChieu).format("HH:mm")}
                </Button>
              </Link>
            </p>
          ))
        : null;

    const showTime = SHOWTIME.map((item, i) => {
      return (
        <div key={i}>
          {value === item && (
            <div
              className="d-flex ml-auto detail__showbook"
              style={{ width: "60%" }}
            >
              {show}
            </div>
          )}
        </div>
      );
    });

    const showTabMenu = TAB_MENU.map((item, i) => <Tab key={i} label={item} />);

    return (
      <>
        <div
          style={{
            position: "absolute",
            backgroundImage: `url(${movie.HinhAnh})`,
            height: "100vh",
            width: "100%",
            backgroundSize: "cover",
            filter: "blur(15px)",
            backgroundPosition: "center"
          }}
        />
        <div className="detail">
          <div className="container detail__info">
            <div className="row">
              <div className="col-md-8 d-flex align-items-center">
                <div className="detail__img mr-3">
                  <img alt="img" src={movie.HinhAnh} className="w-100 " />
                </div>
                <div className="detail__content">
                  <p className="lead">
                    {moment(movie.NgayKhoiChieu).format("ddd, DD/MM/YYYY")}
                  </p>
                  <h1 className="display-4">{movie.TenPhim}</h1>
                  <Button
                    href="#detail__menu"
                    variant="contained"
                    color="secondary"
                  >
                    Book Now
                  </Button>
                </div>
              </div>
              <div className="col-md-4 mt-5 mt-md-0 d-flex align-items-center justify-content-center">
                <div className="detail__rating">
                  <CircularProgress
                    variant="static"
                    value={100 - movie.DanhGia}
                  />
                  <p className="lead">{movie.DanhGia} người đánh giá</p>
                </div>
              </div>
            </div>

            <div className="detail__menu py-5" id="detail__menu">
              <Tabs
                value={value}
                onChange={this.handleChange}
                className="tabs__menu mb-4"
                scrollButtons="on"
                variant="scrollable"
              >
                {showTabMenu}
              </Tabs>

              {value === 0 && (
                <AppBar position="static" className="appbar">
                  <Tabs
                    textColor="primary"
                    value={valueTab}
                    onChange={this.handleChangeTab}
                    indicatorColor="primary"
                    variant="scrollable"
                    scrollButtons="on"
                    className="tabs"
                  >
                    {dateTime}
                  </Tabs>

                  {showTime}
                </AppBar>
              )}

              {value === 1 && <Information movie={movie} />}
            </div>
          </div>
        </div>
        <Footer />
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    movie: state.movie.movie
  };
};

export default connect(
  mapStateToProps,
  { getMovieRequest }
)(Detail);

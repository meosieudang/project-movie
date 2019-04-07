import React, { Component } from "react";
import "./ListMovie.scss";
import { Button } from "@material-ui/core";
import Slider from "react-slick";
import { Link } from "react-router-dom";

class ListMovie extends Component {
  render() {
    const { movies } = this.props;
    const settings = {
      autoplay: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 2,
      rows: 2,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            rows: 2
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
    const listMovie = movies.map(item => {
      return (
        <div className="listmovie__item mb-5" key={item.MaPhim}>
          <div className="listmovie__card mx-3">
            <img className="w-100" src={item.HinhAnh} alt="Cardimagecap" />

            <div className="overlay">
              <div className="play">
                <a href={item.Trailer} target={"_blank"}>
                  <i className="fa fa-play" aria-hidden="true" />
                </a>
              </div>
              <Link to={`/detail/${item.MaPhim}`}>
                <Button
                  className="listmovie__button"
                  variant="contained"
                  color="primary"
                >
                  Detail
                </Button>
              </Link>
            </div>

            <h5 className="lead">{item.TenPhim}</h5>
          </div>
        </div>
      );
    });

    return (
      <div className="listmovie mt-5">
        <div className="listmovie__button">
          <Button className="mr-md-5 mr-2" variant="text">
            <h3 className="lead m-0 text-danger">Now Showing</h3>
          </Button>
          <Button className="mr-md-5 mr-2" variant="text">
            <h3 className="lead m-0">Coming soon</h3>
          </Button>
        </div>

        <div className="listmovie__list py-5">
          <Slider {...settings} className="listmovie__slide">
            {listMovie}
          </Slider>
        </div>
      </div>
    );
  }
}

export default ListMovie;

import React, { Component } from "react";
import "./HomeApp.scss";
import { Button } from "@material-ui/core";
import Slider from "react-slick";
import { IMG_HOMEAPP } from "../../../store/constant/constant";

class HomeApp extends Component {
  render() {
    const settings = {
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true
    };

    const list = IMG_HOMEAPP.map((item, index) => (
      <div key={index} className="carousel__item">
        <img src={item} alt="1" className="w-100 img-fluid" />
      </div>
    ));

    return (
      <div className="homeapp mt-5">
        <div className="overlay" />
        <div className="homeapp__container">
          <div className="row">
            <div className="col-md-6">
              <div className="homeapp__content pt-5 pb-5">
                <h1>Ứng dụng tiện lợi dành cho người yêu điện ảnh</h1>
                <p>
                  Không chỉ đặt vé, bạn còn có thể bình luận phim, chấm điểm rạp
                  và đổi quà hấp dẫn.
                </p>
                <Button variant="contained" className="homeapp__content__btn">
                  App miễn phí - Tải về ngay!
                </Button>
                <p>Có hai phiên bản iOS & Android</p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="homeapp__mobile">
                <div className="homeapp__mobile__img w-50 m-auto">
                  <img
                    className="img-fluid w-100"
                    src={"https://robbiepearce.com/images/iphone-g.png"}
                    alt="phone"
                  />
                  <div className="homeapp__carousel">
                    <Slider {...settings}>{list}</Slider>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default HomeApp;

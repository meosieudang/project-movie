import React from "react";
import "./Footer.scss";

function Footer() {
  return (
    <div className="footer">
      <div className="footer__container">
        <div className="row">
          <div className="col-md-3">
            <div className="footer__1">
              <p>QUY DINH</p>
              <ul>
                <li>Thỏa thuận sử dụng</li>
                <li>Quy chế hoạt động</li>
                <li>Chính sách bảo mật</li>
                <li>Quyền lợi thành viên</li>
              </ul>
            </div>
          </div>
          <div className="col-md-3">
            <div className="footer__2">
              <p>ĐỐI TÁC</p>
            </div>
          </div>
          <div className="col-md-3">
            <div className="footer__3">
              <p>MOBILE APP</p>
              <ul>
                <li>
                  <i className="fa fa-android" aria-hidden="true" />
                </li>
              </ul>
              <ul>
                <li>
                  <i className="fa fa-apple" />
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md-3">
            <div className="footer__4">
              <p>SOCIAL</p>
              <ul>
                <li>
                  <i className="fa fa-facebook" aria-hidden="true" />
                </li>
              </ul>
              <ul>
                <li>
                  <i className="fa fa-instagram" aria-hidden="true" />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <hr className="w-50 footer__border" />
      <div className="footer__container pb-5">
        <div className="row">
          <div className="col-md-3 footer__apple">
            <i class="fa fa-fort-awesome" />
          </div>
          <div className="col-md-6">
            <p className="lead">Products by Hoang Thuan</p>
            <p className="lead">Phone: 0818181 319</p>
          </div>
          <div className="col-md-3">
            <img
              className="img-fuild w-100"
              src={
                "https://s3img.vcdn.vn/123phim/2018/09/9693e0dbb6ceb3b274afeb6aa09a911f.png"
              }
              alt="a"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;

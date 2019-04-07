import React from "react";
import "./Information.scss";
import moment from "moment";

function Information(props) {
  const { movie } = props;
  return (
    <div className="infor">
      <div className="row mt-5">
        <div className="col-md-6">
          <table className="w-100 infor__table">
            <tbody>
              <tr>
                <th scope="row">Opening day:</th>
                <td>{moment(movie.NgayKhoiChieu).format("DD/MM/YYYY")}</td>
              </tr>
              <tr>
                <th scope="row">Name Movie:</th>
                <td>{movie.TenPhim}</td>
              </tr>
              <tr>
                <th scope="row">Cast:</th>
                <td>{}</td>
              </tr>
              <tr>
                <th scope="row">Kind:</th>
                <td>{}</td>
              </tr>
              <tr>
                <th scope="row">Director:</th>
                <td>{}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="col-md-6 text-left">
          <p className="font-weight-bold">Content</p>
          <p className="lead">{movie.MoTa}</p>
        </div>
      </div>
    </div>
  );
}

export default Information;

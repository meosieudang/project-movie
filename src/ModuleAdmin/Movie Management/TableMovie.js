import React, { useState } from "react";
import {
  TableRow,
  TableCell,
  Typography,
  Link,
  IconButton
} from "@material-ui/core";
import moment from "moment";
import DeleteIcon from "@material-ui/icons/Delete";
import CreateIcon from "@material-ui/icons/Create";
import { connect } from "react-redux";
import {
  getMovieEdit,
  clearError,
  updateMovie
} from "../../store/actions/movie";

const TableMovie = ({ movie, getMovieEdit, handleClickOpen }) => {
  const getMovie = () => {
    getMovieEdit(movie);
    handleClickOpen();
  };
  return (
    <>
      <TableRow>
        <TableCell>
          <IconButton onClick={getMovie}>
            <CreateIcon className="text-warning" />
          </IconButton>

          <IconButton>
            <DeleteIcon className="text-danger" />
          </IconButton>
        </TableCell>
        <TableCell>{movie.MaPhim}</TableCell>
        <TableCell>{movie.TenPhim}</TableCell>
        <TableCell>
          <Typography
            style={{ width: 200 }}
            component={Link}
            href={movie.Trailer}
            target={"_blank"}
          >
            Trailer
          </Typography>
        </TableCell>
        <TableCell>
          <img src={movie.HinhAnh} alt="a" className="w-100" />
        </TableCell>
        <TableCell>
          <Typography style={{ width: 200 }}>{movie.MoTa}</Typography>
        </TableCell>
        <TableCell>{moment(movie.NgayKhoiChieu).format("DD/MM/YY")}</TableCell>
      </TableRow>
    </>
  );
};

export default connect(
  null,
  { getMovieEdit, clearError, updateMovie }
)(TableMovie);

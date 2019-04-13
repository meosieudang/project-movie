import React, { useEffect, useState } from "react";
import {
  Paper,
  Grid,
  Typography,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody
} from "@material-ui/core";
import { connect } from "react-redux";
import {
  getListMovieRequest,
  getMovieEdit,
  clearError,
  updateMovie
} from "../../store/actions/movie";
import TableMovie from "./TableMovie";
import DialogEdit from "./DialogEdit";

const MovieManagement = ({
  movies,
  getListMovieRequest,
  getMovieEdit,
  clearError,
  movieEdit,
  updateMovie
}) => {
  useEffect(() => {
    getListMovieRequest();
  }, []);

  const [open, setOpen] = useState(false);
  const handleClickOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const closeModal = () => {
    clearError();
    handleClose();
  };
  return (
    <Paper style={{ padding: "0 2%", paddingTop: "20vh" }}>
      <DialogEdit
        open={open}
        closeModal={closeModal}
        movieEdit={movieEdit}
        updateMovie={updateMovie}
      />
      <Typography align="center" variant="display2" paragraph>
        Manage Movie List
      </Typography>
      <Grid container justify="center">
        <Grid item xs={10} md={11}>
          <div style={{ overflowX: "auto" }}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Action</TableCell>
                  <TableCell>ID Movie</TableCell>
                  <TableCell>Name Movie</TableCell>
                  <TableCell>Trailer Movie</TableCell>
                  <TableCell>Image Movie</TableCell>
                  <TableCell>Description Movie</TableCell>
                  <TableCell>Release Date</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {Object.keys(movies).length > 0
                  ? movies.map(movie => (
                      <TableMovie
                        movie={movie}
                        key={movie.MaPhim}
                        handleClickOpen={handleClickOpen}
                      />
                    ))
                  : null}
              </TableBody>
            </Table>
          </div>
        </Grid>
      </Grid>
    </Paper>
  );
};

const mapStateToProps = state => ({
  movies: state.movie.movies,
  movieEdit: state.movie.movieEdit
});

export default connect(
  mapStateToProps,
  { getListMovieRequest, getMovieEdit, clearError, updateMovie }
)(MovieManagement);

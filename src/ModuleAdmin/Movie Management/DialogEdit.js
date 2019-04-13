import React, { Component } from "react";
import {
  Dialog,
  Slide,
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  TextField,
  DialogActions,
  Button,
  Paper,
  Grid
} from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
function Transition(props) {
  return <Slide direction="up" {...props} />;
}

class DialogEdit extends Component {
  state = {
    MaPhim: null,
    TenPhim: "",
    Trailer: "",
    HinhAnh: "",
    MoTa: "",
    MaNhom: "",
    NgayKhoiChieu: "",
    DanhGia: ""
  };

  componentWillReceiveProps(props) {
    const movieEdit = props.movieEdit;
    if (props && props.movieEdit) {
      this.setState({
        MaPhim: movieEdit.MaPhim,
        TenPhim: movieEdit.TenPhim,
        Trailer: movieEdit.Trailer,
        HinhAnh: movieEdit.HinhAnh,
        MoTa: movieEdit.MoTa,
        MaNhom: "GP07",
        NgayKhoiChieu: movieEdit.NgayKhoiChieu,
        DanhGia: movieEdit.DanhGia
      });
    }
  }

  handleChange = e => this.setState({ [e.target.name]: e.target.value });

  handleSubmit = e => {
    e.preventDefault();
    const newMovie = {
      MaPhim: this.state.MaPhim,
      TenPhim: this.state.TenPhim,
      Trailer: this.state.Trailer,
      HinhAnh: this.state.HinhAnh,
      MoTa: this.state.MoTa,
      MaNhom: this.state.MaNhom,
      NgayKhoiChieu: this.state.NgayKhoiChieu,
      DanhGia: this.state.DanhGia
    };
    if (this.props.movieEdit) {
      //edit
      this.props.updateMovie(newMovie);
    } else {
      //create
    }
    this.props.closeModal();
  };
  render() {
    return (
      <Dialog
        fullScreen
        open={this.props.open}
        onClose={this.props.closeModal}
        TransitionComponent={Transition}
      >
        <AppBar>
          <Toolbar>
            <IconButton
              color="inherit"
              onClick={this.props.closeModal}
              aria-label="Close"
            >
              <CloseIcon />
            </IconButton>
            <Typography variant="h6" color="inherit">
              {this.props.movieEdit ? "Edit Movie" : "Create Movie"}
            </Typography>
          </Toolbar>
        </AppBar>
        <Paper style={{ padding: "0 2%", paddingTop: "20vh", height: "100vh" }}>
          <Typography variant="h5" align="center" paragraph>
            {this.props.movieEdit ? "Edit Movie" : "Create Movie"}
          </Typography>
          <Grid container justify="center" spacing={24}>
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                label="Ma Phim"
                value={this.state.MaPhim}
                disabled
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                label="Ten Phim"
                onChange={this.handleChange}
                name="TenPhim"
                value={this.state.TenPhim}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                label="Trailer"
                onChange={this.handleChange}
                name="Trailer"
                value={this.state.Trailer}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                label="Hinh Anh"
                onChange={this.handleChange}
                name="HinhAnh"
                value={this.state.HinhAnh}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                label="Mo Ta"
                onChange={this.handleChange}
                name="MoTa"
                value={this.state.MoTa}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                label="Ma Nhom"
                value={this.state.MaNhom}
                disabled
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                label="Ngay Khoi Chieu"
                onChange={this.handleChange}
                name="NgayKhoiChieu"
                value={this.state.NgayKhoiChieu}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                label="Danh Gia"
                value={this.state.DanhGia}
                onChange={this.handleChange}
                name="DanhGia"
              />
            </Grid>
          </Grid>
          <DialogActions>
            <Button onClick={this.props.closeModal} color="primary">
              Cancel
            </Button>
            <form onSubmit={this.handleSubmit}>
              <Button type="submit" color="primary">
                OK
              </Button>
            </form>
          </DialogActions>
        </Paper>
      </Dialog>
    );
  }
}

export default DialogEdit;

import React, { Component } from "react";
import Select from "react-select";
import { Button, Grid } from "@material-ui/core";
import { StyledPaper } from "../../../ulti/StyledComponents/StyledPaper";
class BookStickerFormv2 extends Component {
  state = {
    selectedOption: null
  };

  handleChange = selectedOption => {
    this.setState({ selectedOption });
    // console.log(selectedOption);
  };

  detailMovie = e => {
    const value = this.state.selectedOption;
    this.props.history.push(`/detail/${value.id}`);
  };

  render() {
    const { movies } = this.props;
    const list = movies.map(item => ({
      value: item.TenPhim,
      label: item.TenPhim,
      id: item.MaPhim
    }));
    return (
      <StyledPaper style={{ marginTop: "2rem" }}>
        <Grid container spacing={16} justify="center" alignItems="center">
          <Grid item xs={12} md={8}>
            <Select
              value={this.stateselectedOption}
              onChange={this.handleChange}
              options={list}
              placeholder="Please choose your movie..."
              className="booksticker__select"
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <Button
              className="mr-md-5 mr-2"
              variant="contained"
              color="primary"
              disabled={this.state.selectedOption ? false : true}
              onClick={this.detailMovie}
            >
              Book Sticker
            </Button>
          </Grid>
        </Grid>
      </StyledPaper>
    );
  }
}

export default BookStickerFormv2;

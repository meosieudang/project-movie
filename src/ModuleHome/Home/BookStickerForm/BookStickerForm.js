import React, { Component } from "react";
import "./BookStickerForm.scss";
import Select from "react-select";
import { Button } from "@material-ui/core";

class BookStickerForm extends Component {
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
    const { selectedOption } = this.state;
    const { movies } = this.props;
    const list = movies.map(item => ({
      value: item.TenPhim,
      label: item.TenPhim,
      id: item.MaPhim
    }));
    return (
      <div className="booksticker py-3 my-3">
        <Select
          value={selectedOption}
          onChange={this.handleChange}
          options={list}
          placeholder="Please choose your movie..."
          className="booksticker__select"
        />
        <Button
          className="mr-md-5 mr-2"
          variant="contained"
          color="primary"
          disabled={selectedOption ? false : true}
          onClick={this.detailMovie}
        >
          Book Sticker
        </Button>
      </div>
    );
  }
}

export default BookStickerForm;

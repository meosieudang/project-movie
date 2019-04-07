import React, { Component } from "react";
import { Button } from "@material-ui/core";
import { connect } from "react-redux";
import { getItem } from "../../../store/actions/bookstick";

class Seat extends Component {
  state = {
    isSeat: false
  };

  onHandleClick = () => {
    this.setState(
      {
        isSeat: !this.state.isSeat
      },
      () => {
        this.props.getItem(this.props.seat, this.state.isSeat);
        // this.props.onHandleClick(this.props.seat, this.state.isSeat);
      }
    );
  };

  render() {
    const { seat } = this.props;
    const colorBook = this.state.isSeat ? "bg-danger " : "";
    const checkSeat = seat.DaDat ? " bg-dark" : "";
    return (
      <>
        <Button
          variant="contained"
          className={"m-2 " + colorBook + checkSeat}
          disabled={seat.DaDat ? true : false}
          onClick={this.onHandleClick}
        >
          {seat.TenGhe}
        </Button>
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    bookstick: state.bookstick
  };
};

export default connect(
  mapStateToProps,
  { getItem }
)(Seat);

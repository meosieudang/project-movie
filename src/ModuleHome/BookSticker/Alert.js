import React, { Component } from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Slide
} from "@material-ui/core";

function Transition(props) {
  return <Slide direction="up" {...props} />;
}

class Alert extends Component {
  render() {
    const { handleClose, open, handleSubmit } = this.props;
    return (
      <>
        <Dialog
          open={open}
          TransitionComponent={Transition}
          keepMounted
          onClose={handleClose}
          aria-labelledby="alert-dialog-slide-title"
          aria-describedby="alert-dialog-slide-description"
        >
          <DialogTitle id="alert-dialog-slide-title">
            {"Book Sticket"}
          </DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-slide-description">
              Are you sure you want to make a booking sticket ?
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleSubmit} color="primary">
              Agree
            </Button>
            <Button onClick={handleClose} color="primary">
              Disagree
            </Button>
          </DialogActions>
        </Dialog>
      </>
    );
  }
}

export default Alert;

import React from "react";
import "./Snackbars.scss";
import { Snackbar, IconButton } from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";

function Snackbars(props) {
  return (
    <Snackbar
      className="snackbars"
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "left"
      }}
      open={props.open}
      autoHideDuration={2500}
      onClose={props.handleClose}
      ContentProps={{
        "aria-describedby": "message-id"
      }}
      message={<span id="message-id">{props.value}</span>}
      action={[
        <IconButton
          key="close"
          aria-label="Close"
          color="inherit"
          onClick={props.handleClose}
        >
          <CloseIcon />
        </IconButton>
      ]}
    />
  );
}

export default Snackbars;

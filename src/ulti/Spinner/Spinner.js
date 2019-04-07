import React from "react";
import { CircularProgress } from "@material-ui/core";
import "./Spinner.scss";

function Spinner() {
  return (
    <div className="spinner">
      <CircularProgress />
      <br />
      <div>Please waitting...</div>
    </div>
  );
}

export default Spinner;

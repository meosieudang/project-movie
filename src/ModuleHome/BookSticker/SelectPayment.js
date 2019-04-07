import React from "react";
import {
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio
} from "@material-ui/core";

function SelectPayment({ value, handleChange }) {
  return (
    <FormControl component="fieldset">
      <FormLabel component="legend">Payments:</FormLabel>
      <RadioGroup
        aria-label="Payments"
        name="gender1"
        value={value}
        onChange={handleChange}
      >
        <FormControlLabel value="zalo" control={<Radio />} label="Zalo" />
        <FormControlLabel
          value="credit"
          control={<Radio />}
          label="Credit card"
        />
        <FormControlLabel value="atm" control={<Radio />} label="ATM card" />
      </RadioGroup>
    </FormControl>
  );
}

export default SelectPayment;

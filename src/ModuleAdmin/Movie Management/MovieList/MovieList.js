import React, { Component } from "react";
import "./MovieList.scss";
// import { withStyles } from "@material-ui/core/styles";
import { Grid, Button, FormControl } from "@material-ui/core";
import styled from "styled-components";

// import { styles } from "./style";

// const styles = theme => ({
//   root: {
//     marginTop: "25vh"
//   },
//   cssUnderline: {
//     "&:after": {
//       borderBottomColor: "gold"
//     }
//   },
//   cssLabel: {
//     "&$cssFocused": {
//       color: "gold"
//     }
//   },
//   cssFocused: {}
// });

const StyledButton = styled(Button)`
  background: linear-gradient(45deg, #fe6b8b 30%, #ff8e53 90%);
  border-radius: 3px;
  border: 0;
  color: white;
  height: 48px;
  padding: 0 30px;
  box-shadow: 0 3px 5px 2px rgba(255, 105, 135, 0.3);
`;

class MovieList extends Component {
  render() {
    const { classes } = this.props;
    console.log(classes);
    return (
      // <div className={classes.root}>
      <Grid container style={{ marginTop: "25vh" }}>
        <Grid item md={6} xs={12}>
          <FormControl>
            {/* <TextField
                fullWidth
                label="bong"
                InputProps={{ classes: { underline: classes.cssUnderline } }}
                InputLabelProps={{
                  classes: {
                    root: classes.cssLabel,
                    focused: classes.cssFocused
                  }
                }}
              /> */}
            <StyledButton>a</StyledButton>
          </FormControl>
        </Grid>
        <Grid item md={6} xs={12}>
          test2
        </Grid>
      </Grid>
      // </div>
    );
  }
}

export default MovieList;

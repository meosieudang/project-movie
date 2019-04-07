export const styles = theme => ({
  rootButton: {
    background: "pink",
    margin: " 0 2rem",
    "&:hover": {
      backgroundColor: "red"
    }
  },
  label: {
    color: "red"
  },
  rootInput: {
    // background: "black",
    // "&:hover": {
    //   background: "blue"
    // }
  },
  underline: {
    backgroundColor: "gray",
    "&:hover": { backgroundColor: "red" }
  },
  [theme.breakpoints.down("md")]: {
    backgroundColor: "blue",
    "&:hover": {
      backgroundColor: "gold"
    }
  }
});

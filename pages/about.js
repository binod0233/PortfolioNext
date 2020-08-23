import React from "react";
import { Typography, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  typedContainer: {
    position: "absolute",
    textAlign: "center",

    top: "45%",
    left: "50%",
    transform: "translate(-50%,-45%)",

    // zIndex: 1,
  },
}));
const about = () => {
  const classes = useStyles();
  return (
    <div>
      <Grid item xs={12} className={classes.typedContainer}>
        <Typography variant="h4">Webpage is under development</Typography>
        <br />
        <br />

        <Typography variant="h5">
          This will soon be updated to a working state
        </Typography>
      </Grid>
    </div>
  );
};

export default about;

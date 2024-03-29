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
const contact = () => {
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
 <br />
        <br /> <br />
        
        <br />
<Typography variant="h5">
         Email:binodsharma0233@gmail.com
        </Typography>
      </Grid>

    </div>
  );
};

export default contact;

import Typed from "react-typed";
import { Box, Typography, Grid, Avatar, CssBaseline } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    "& > *": {
      margin: theme.spacing(1),
    },
  },
  avatar: {
    justify: "center",
    width: theme.spacing(15),
    height: theme.spacing(15),
    margin: theme.spacing(1),
  },
  typedContainer: {
    position: "absolute",
    top: "45%",
    left: "50%",
    transform: "translate(-50%,-45%)",

    // zIndex: 1,
  },
}));

const Header = function () {
  const classes = useStyles();
  return (
    <div>
      <CssBaseline />
      <Grid
        container
        direction="column"
        justify="center"
        alignItems="center"
        className={classes.typedContainer}
      >
        <Grid item xs={3}>
          <Avatar
            alt="Binod Sharma"
            src="./avatar.png"
            className={classes.avatar}
          />
        </Grid>
        <br />
        <Grid item xs={3}>
          <Typography variant="h4">
            <Typed strings={["Binod Sharma"]} typeSpeed={40} loop />
          </Typography>
        </Grid>
        <br />
        <Grid item xs={3}>
          <Typography variant="h5">
            <Typed
              strings={["Web Design ", "Mern Stack", "Web Development"]}
              backSpeed={60}
              typeSpeed={50}
              loop
            />
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
};

export default Header;

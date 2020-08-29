import Typed from "react-typed";
import { Box, Typography, Grid, Avatar } from "@material-ui/core";
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
    margin: theme.spacing(2),
  },
  typedContainer: {
    position: "absolute",
    top: "45%",
    left: "50%",
    transform: "translate(-50%,-45%)",

    // zIndex: 1,
  },
  typed: {
    position: "absolute",
    top: "85%",
  },
  sectionDesktop: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex",
    },
  },
  sectionMobile: {
    display: "flex",
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
}));

const Header = function () {
  const classes = useStyles();
  return (
    <div>
      <Grid
        container
        direction="column"
        justify="center"
        alignItems="center"
        className={classes.typedContainer}
      >
        <Grid item xs={12}>
          <Avatar
            alt="Binod Sharma"
            src="./loggg.png"
            className={classes.avatar}
          />
        </Grid>
        <br />
        <Grid item xs={12}>
          <Typography variant="h4">
            <Typed strings={["Binod Sharma"]} typeSpeed={40} loop />
          </Typography>
        </Grid>
        <br />
        <Grid item xs={12}>
          <Typography variant="h5">
            <Typed
              strings={["Web Design ", "MERN Stack", "Web Development"]}
              backSpeed={60}
              typeSpeed={50}
              loop
            />
          </Typography>
        </Grid>
        <br />
        <br />
      </Grid>
      {/* <Grid
        container
        direction="row"
        justify="flex-start"
        alignItems="baseline"
        className={classes.typed}
        item
        xs={6}
      >
        <Typography variant="h3">
          The API documentation of the Typography React component. Learn more
          about the props and the CSS customization points. The API
          documentation of the Typography React component. Learn more about the
          props and the CSS customization points. The API documentation of the
          Typography React component. Learn more about the props and the CSS
          customization points.
        </Typography>
      </Grid> */}
    </div>
  );
};

export default Header;

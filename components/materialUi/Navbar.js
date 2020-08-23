import Link from "next/link";
import Box from "@material-ui/core/Box";
import { fade, makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import MenuIcon from "@material-ui/icons/Menu";
import PermIdentityIcon from "@material-ui/icons/PermIdentity";
import NotificationsIcon from "@material-ui/icons/Notifications";
import HomeIcon from "@material-ui/icons/Home";
import ContactsIcon from "@material-ui/icons/Contacts";

const useStyles = makeStyles((theme) => ({
  code: {
    background: "#1b2232",
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
  },

  inputRoot: {
    color: "inherit",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
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

import React from "react";

const Navbar = () => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <div>
      <Menu
        id={mobileMenuId}
        getContentAnchorEl={null}
        anchorEl={mobileMoreAnchorEl}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
        keepMounted
        open={isMobileMenuOpen}
        onClose={handleMobileMenuClose}
      >
        <MenuItem onClick={handleMenuClose}>
          <Link href="/" as="/">
            <a>
              <IconButton color="inherit">
                <HomeIcon />
                <Typography style={{ padding: "1rem" }}>Home</Typography>
              </IconButton>
            </a>
          </Link>
        </MenuItem>
        <MenuItem onClick={handleMenuClose}>
          <Link href="/about" as="/about">
            <a>
              <IconButton color="inherit">
                <PermIdentityIcon />
                <Typography style={{ padding: "1rem" }}>About</Typography>
              </IconButton>
            </a>
          </Link>
        </MenuItem>
        <MenuItem onClick={handleMenuClose}>
          <Link href="/contact" as="/contact">
            <a>
              <IconButton color="inherit">
                <ContactsIcon />
                <Typography style={{ padding: "1rem" }}>Contact</Typography>
              </IconButton>
            </a>
          </Link>
        </MenuItem>
      </Menu>
    </div>
  );
  return (
    <>
      <Box>
        <div className={classes.grow}>
          <AppBar position="fixed" className={classes.code}>
            <Toolbar>
              <Link href="/">
                <a>
                  <IconButton edge="start" color="inherit">
                    <Avatar alt="Binod" src="./logo.svg" />
                  </IconButton>
                </a>
              </Link>
              <Typography variant="h6">Portfolio</Typography>

              <div className={classes.grow} />
              <div className={classes.sectionDesktop}>
                <IconButton color="inherit">
                  <Link href="/" as="/">
                    <a>
                      <Typography className={classes.title} variant="h6" noWrap>
                        Home
                      </Typography>
                    </a>
                  </Link>
                </IconButton>
                <IconButton color="inherit">
                  <Link href="/about">
                    <a>
                      <Typography className={classes.title} variant="h6" noWrap>
                        About
                      </Typography>
                    </a>
                  </Link>
                </IconButton>
                <IconButton edge="end" color="inherit">
                  <Link href="/contact">
                    <a>
                      <Typography className={classes.title} variant="h6" noWrap>
                        Contact
                      </Typography>
                    </a>
                  </Link>
                </IconButton>
              </div>
              <div className={classes.sectionMobile}>
                <IconButton onClick={handleMobileMenuOpen} color="inherit">
                  <MenuIcon />
                </IconButton>
              </div>
            </Toolbar>
          </AppBar>

          {renderMobileMenu}
        </div>
      </Box>
    </>
  );
};

export default Navbar;

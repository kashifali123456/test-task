import React from "react";
import { Grid, Link } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import logoimg from "../../Assets/Images/logo.png";
import { Button } from "@material-ui/core";
import "./style.css";
const Navbar = () => {
  return (
    <div>
      <Grid
        container
        className="nav-bar"
        justifyContent="center"
        alignItems="center"
        spacing={3}
      >
        <Grid item md={3} xs={6}>
          <img src={logoimg} alt=" " className="logo" />
        </Grid>
        <Grid item md={2} xs={6}>
          <div className="search">
            <input placeholder="Search items collections" className="search" />
            <SearchIcon className="search-icon" />
          </div>
        </Grid>
        <Grid item md={4} xs={12} className="menu" justifyContent="center">
          <div className="menu-item">
            <Link id="link" to="home">
              Explore
            </Link>
            <Link id="link" to="home">
              My profile
            </Link>
            <Link id="link" to="home">
              Following
            </Link>
            <Link id="link" to="home">
              Market
            </Link>
            <Link id="link" to="home">
              How its work
            </Link>
            <Link id="link" to="home">
              Community
            </Link>
          </div>
        </Grid>
        <Grid item md={3} xs={12} className="btns" justifyContent="center">
          <Button id="btns" variant="contained" className="btn1">
            Create
          </Button>
          <Button id="btns" variant="contained" className="btn2">
            Sign In
          </Button>
        </Grid>
      </Grid>
    </div>
  );
};
export default Navbar;

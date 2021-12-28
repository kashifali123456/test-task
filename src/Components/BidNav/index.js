import React from "react";
import { Grid } from "@material-ui/core";
import { Link } from "react-router-dom";
const BidNav = () => {
  return (
    <Grid container>
      <Grid item xs={12} md={12}>
        <div className="menu-item">
          <Link id="link" to="home">
            Trending
          </Link>
          <Link id="link" to="home">
            Art
          </Link>
          <Link id="link" to="home">
            Top
          </Link>
          <Link id="link" to="home">
            Music
          </Link>
          <Link id="link" to="home">
            Domains
          </Link>
          <Link id="link" to="home">
            Trading Cards
          </Link>
          <Link id="link" to="home">
            Collectables
          </Link>
        </div>
      </Grid>
    </Grid>
  );
};

export default BidNav;

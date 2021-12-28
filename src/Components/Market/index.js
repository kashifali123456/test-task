import React from "react";
import Grid from "@material-ui/core/Grid";
// import "./style.css";
import Button from "@material-ui/core/Button";
import cotton from "../../Assets/Images/cotton4.jpg";
import { Container } from "@material-ui/core";
const Market = () => {
  return (
    <Container maxWidth="xl">
      <Grid container justifyContent="center" className="Hdr">
        <Grid
          container
          item
          xs={12}
          md={6}
          justifyContent="center"
          alignItems="center"
        >
          <Grid item xs={12} className="content">
            <h2>The easiest and most secure NFT marketpalce</h2>
            <p>
              Nifty Gateway is the premier marketplace for Nifties, which are
              digital items you can truly own. <br /> Digital Items have existed
              for a long time, but never like this.
            </p>
          </Grid>
        </Grid>
        <Grid
          container
          item
          xs={12}
          md={6}
          className="cotton"
          justifyContent="center"
        >
          <img src={cotton} alt="" />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Market;

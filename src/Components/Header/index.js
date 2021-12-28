import React from "react";
import Grid from "@material-ui/core/Grid";
import "./style.css";
import Button from "@material-ui/core/Button";
import cotton from "../../Assets/Images/cotton4.jpg";
import { Container } from "@material-ui/core";
const Header = () => {
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
            <h1>
              WELCOME TO THE <br /> <span>SiliconBets</span>
            </h1>
            <h3>The easiest and most secure NFT marketpalce </h3>
            <Button variant="contained" id="link3" className=" btn-primary">
              {" "}
              Explore
            </Button>
            <Button variant="contained" id="link3" className=" btn-secondary">
              {" "}
              Mint
            </Button>
          </Grid>
        </Grid>
        <Grid container item xs={12} md={6} className="cotton">
          <img src={cotton} alt="" />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Header;

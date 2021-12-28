import React from "react";
import Grid from "@material-ui/core/Grid";
// import "./style.css";
import Button from "@material-ui/core/Button";
import cotton from "../../Assets/Images/cotton4.jpg";
import { Container } from "@material-ui/core";
const BidHeader = () => {
  return (
    <>
      <Container maxWidth="xl">
        <Grid container justifyContent="center" className="Hdr">
          <Grid
            container
            item
            xs={12}
            md={6}
            justifyContent="center"
            alignItems="center"
          ></Grid>
          <Grid container item xs={12} md={6} className="cotton">
            <img src={cotton} alt="" />
          </Grid>

          <Grid item xs={12} md={6} className="content">
            <h1>
              WELCOME TO THE <br /> <span>SiliconBets</span>
            </h1>
            <h3>The easiest and most secure NFT marketpalce </h3>
            <Button variant="contained" id="link3" className=" btn-primary">
              {" "}
              Place a bid
            </Button>
            <Button variant="contained" id="link3" className=" btn-secondary">
              {" "}
              Buy Know
            </Button>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default BidHeader;

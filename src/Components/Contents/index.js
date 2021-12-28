import React from "react";
import { Grid, Button } from "@material-ui/core";
import "./style.css";
import { Container } from "@material-ui/core";
const Contents = () => {
  return (
    <Container maxWidth="xl">
      <Grid
        container
        justifyContent="center"
        alignItems="center"
        spacing={5}
        className="Cnt"
      >
        <Grid item xs={12} md={3}>
          <div className="future">
            <h2>Pioneering art market royalties</h2>
            <p>
              Artists receive continuous royalties for <br /> all secondary
              sales on their artworks forever
            </p>
          </div>
        </Grid>

        <Grid item xs={12} md={3}>
          <div className="future">
            <h2>Built for longevity</h2>
            <p>
              All transactions happen on-chain,
              <br />
              creating a tamper-proof record of each artworks
              <br /> history
            </p>
          </div>
        </Grid>

        <Grid item xs={12} md={3}>
          <div className="future">
            <h2>The future of art collecting</h2>
            <p>
              Browse and build your collection of <br />
              the worlds most cutting-edge digital art
            </p>
          </div>
        </Grid>
        <Grid item xs={12} md={3} className="future1">
          <Button variant="contained" color="primary">
            Load More
          </Button>
          <Grid />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Contents;

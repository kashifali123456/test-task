import React from "react";
import { Grid, Button } from "@material-ui/core";
import "./style.css";
import Card from "../Card";
import { data } from "../../Data";
import { Container } from "@material-ui/core";
const RatedCard = () => {
  return (
    <Container maxWidth="xl">
      <Grid container>
        <Grid item xs={12} className="card">
          <h2>Rated Nfts</h2>
          <Grid item xs={12} container item>
            {data.map((menuItem) => {
              return (
                <Grid className="card" item xs={12} sm={6} md={4} lg={3}>
                  <Card menuItem={menuItem} />
                </Grid>
              );
            })}
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

export default RatedCard;

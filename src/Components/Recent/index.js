import React from "react";
import { Grid, Button } from "@material-ui/core";
import "./style.css";
import Card from "../Card";
import { data } from "../../Data";
const Recent = () => {
  return;
  <Grid container>
    <Grid item xs={12} md={4}>
      <Grid item xs={12} container item className="card">
        {data.map((menuItem) => {
          return (
            <Grid className="card" item xs={12} sm={6} md={4} lg={3}>
              <Card menuItem={menuItem} />
            </Grid>
          );
        })}
      </Grid>
    </Grid>
  </Grid>;
};

export default Recent;

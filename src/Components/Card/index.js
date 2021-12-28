import React from "react";
import { Grid, Link } from "@material-ui/core";
// import "./style.css";
const Card = (props) => {
  const { title, img, link } = props.menuItem;
  return (
    <Grid container className="outer-container">
      <Grid item xs={12} lg={3}>
        <Grid items className="card-container">
          <img className="art" src={img} alt="" />
          <h3 className="artwork">{title}</h3>
        </Grid>
        <Link className="link2" href="">
          {link}
        </Link>
      </Grid>
    </Grid>
  );
};

export default Card;

import React from "react";
import { Grid, Link } from "@material-ui/core";
// import "./style.css";
const Card = (props) => {
  const { title, img, link } = props.menuItem;
  return (
    <Grid container className="outer-container">
      <Grid item lg={12}>
        <Grid items className="card-container">
          <img className="art" src={img} alt="" />
          <h3 className="artwork">{title}</h3>
        </Grid>
        <Grid item className="circle-picture">
          <Link className="link2" href="">
            {link}
          </Link>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Card;

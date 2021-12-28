import React from "react";

import Header from "../../Components/Header";
import Contents from "../../Components/Contents";
import { Grid } from "@material-ui/core";
import Recent from "../../Components/Recent";
import TopNft from "../../Components/Top-Nft";
import RatedCard from "../../Components/RatedCard";
import Market from "../../Components/Market";
const Home = () => {
  return (
    <Grid container>
      <Header />
      <Contents />
      <Recent />
      <TopNft />
      <RatedCard />
      <Market />
    </Grid>
  );
};

export default Home;

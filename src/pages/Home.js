import React, { Component } from "react";
import { Grid } from "@material-ui/core";
import axios from "axios";
import Scream from "../components/Scream";

export default class Home extends Component {
  state = { screams: null };
  componentDidMount() {
    axios
      .get("/screams")
      .then((res) => {
        // console.log(res.data);
        this.setState({
          screams: res.data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }
  render() {
    // console.log(this.state.screams);
    let screamData = this.state.screams ? (
      this.state.screams.map((scream, index) => (
        <Scream scream={scream} key={index} />
      ))
    ) : (
      <p>Loading...</p>
    );
    return (
      <div>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={8}>
            {screamData}
          </Grid>
          <Grid item xs={12} sm={4}>
            <p>Profile...</p>
          </Grid>
        </Grid>
      </div>
    );
  }
}

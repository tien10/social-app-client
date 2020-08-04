import React, { Component } from "react";
import { AppBar, Toolbar, Button } from "@material-ui/core";
import { Link } from "react-router-dom";

export default class Navbar extends Component {
  render() {
    return (
      <div>
        <AppBar>
          <Toolbar className="nav-container">
            <Button color="inherit" component={Link} to="/login">
              LOGIN
            </Button>
            <Button color="inherit" component={Link} to="/">
              HOME
            </Button>
            <Button color="inherit" component={Link} to="/signup">
              SIGNUP
            </Button>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

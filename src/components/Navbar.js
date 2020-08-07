import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import MyButton from "../util/MyButton";

import { AppBar, Toolbar, Button } from "@material-ui/core";

import { Home } from "@material-ui/icons";

class Navbar extends Component {
  render() {
    console.log(this.props);
    const { authenticated } = this.props;
    return (
      <div>
        <AppBar>
          <Toolbar className="nav-container">
            {authenticated ? (
              <Fragment>
                {/* <PostScream /> */}
                <Link to="/">
                  <MyButton tip="Home">
                    <Home />
                  </MyButton>
                </Link>
                {/* <Notifications /> */}
              </Fragment>
            ) : (
              <Fragment>
                <Button color="inherit" component={Link} to="/login">
                  LOGIN
                </Button>
                <Button color="inherit" component={Link} to="/">
                  HOME
                </Button>
                <Button color="inherit" component={Link} to="/signup">
                  SIGNUP
                </Button>
              </Fragment>
            )}
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

Navbar.propTypes = {
  authenticated: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => ({
  authenticated: state.user.authenticated,
});

export default connect(mapStateToProps)(Navbar);

import React, { Component } from "react";
import {
  withStyles,
  Grid,
  Typography,
  TextField,
  Button,
  CircularProgress,
} from "@material-ui/core";
import PropTypes from "prop-types";
import AppIcon from "../images/icon.png";
import { Link } from "react-router-dom";
// import AppIcon from "../images/3.svg";
// import AppIcon from "../images/ninja.png";
import { connect } from "react-redux";
import { signupUser } from "../redux/actions/userActions";
// const styles = {
//   form: {
//     textAlign: "center",
//   },
//   image: {
//     margin: "20px auto 20px auto",
//     // maxWidth: "64px",
//   },
//   pageTitle: { margin: "10px auto 10px auto" },
//   textField: { margin: "10px auto 10px auto" },
//   button: { marginTop: 20 },
//   progress: {
//     position: "absolute",
//   },
//   customError: {
//     color: "red",
//     fontSize: "0.8rem",
//     marginTop: 10,
//   },
// };

const styles = (theme) => ({ ...theme.spreadThis });
class Signup extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      confirmPassword: "",
      handle: "",
      errors: {},
    };
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.UI.errors) {
      this.setState({ errors: nextProps.UI.errors });
    }
  }
  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({
      loading: true,
    });
    // console.log(e.target);
    const newUserData = {
      email: this.state.email,
      password: this.state.password,
      confirmPassword: this.state.confirmPassword,
      handle: this.state.handle,
    };
    this.props.signupUser(newUserData, this.props.history);
    // axios
    //   .post("/signup", newUserData)
    //   .then((res) => {
    //     // console.log(res);
    //     // console.log(this.props.history.push);
    //     // this.props.history.push("/signup");
    //     localStorage.setItem("FBIdToken", `Bearer ${res.data.token}`);
    //     this.setState({
    //       loading: false,
    //     });
    //     this.props.history.push("/");
    //     // console.log(this.props.history.push);
    //     // this.props.history.go(-1);
    //   })
    //   .catch((err) => {
    //     console.log(err.response);
    //     this.setState({ loading: false, errors: err.response.data });
    //     // if (this.state.errors) {
    //     //   if (this.state.errors.data.error)
    //     //     if (this.state.errors.data.error === "auth/weak-password")
    //     //       alert("Password yeu!");
    //     // }
    //     // console.log(err);
    //     // alert("Dang ky that bai!");
    //   });
  };
  handleChange = (e) => {
    // console.log(e.target.value);
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  render() {
    // console.log(this.props);
    // console.log(this.state.loading);
    const {
      classes,
      UI: { loading },
    } = this.props;
    const { errors } = this.state;

    return (
      <div>
        <Grid container className={classes.form}>
          <Grid item sm></Grid>
          <Grid item sm>
            <img src={AppIcon} alt="AppIcon" className={classes.image} />
            <Typography variant="h2" className={classes.pageTitle}>
              Signup
            </Typography>
            <form noValidate onSubmit={this.handleSubmit}>
              <TextField
                id="email"
                name="email"
                type="email"
                label="Email"
                value={this.state.email}
                className={classes.textField}
                helperText={errors.email}
                error={errors.email ? true : false}
                onChange={this.handleChange}
                fullWidth
              />
              <TextField
                id="password"
                name="password"
                type="password"
                label="Password"
                value={this.state.password}
                className={classes.textField}
                helperText={errors.password}
                error={errors.password ? true : false}
                onChange={this.handleChange}
                fullWidth
              />
              <TextField
                id="confirmPassword"
                name="confirmPassword"
                type="password"
                label="Confirm Password"
                value={this.state.confirmPassword}
                className={classes.textField}
                helperText={errors.confirmPassword}
                error={errors.confirmPassword ? true : false}
                onChange={this.handleChange}
                fullWidth
              />
              <TextField
                id="handle"
                name="handle"
                type="text"
                label="Handle"
                value={this.state.handle}
                className={classes.textField}
                helperText={errors.handle}
                error={errors.handle ? true : false}
                onChange={this.handleChange}
                fullWidth
              />
              {errors.general && (
                <Typography variant="body2" className={classes.customError}>
                  {errors.general}
                </Typography>
              )}
              <Button
                type="submit"
                variant="contained"
                color="primary"
                className={classes.button}
                disabled={loading}
              >
                Signup
                {loading && (
                  <CircularProgress size={30} className={classes.progress} />
                )}
              </Button>
              <br />
              <small>
                Already have an account? Login <Link to="/login">here</Link>
              </small>
            </form>
          </Grid>
          <Grid item sm></Grid>
        </Grid>
      </div>
    );
  }
}
Signup.propTypes = {
  classes: PropTypes.object.isRequired,
  signupUser: PropTypes.func.isRequired,
  user: PropTypes.object.isRequired,
  UI: PropTypes.object.isRequired,
};

const mapStatetoProps = (state) => ({
  user: state.user,
  UI: state.UI,
});

const mapActionstoProps = {
  signupUser,
};

export default connect(
  mapStatetoProps,
  mapActionstoProps
)(withStyles(styles)(Signup));

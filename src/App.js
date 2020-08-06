import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core";
import themeFile from "./util/theme";
import jwtDecode from "jwt-decode";

// Redux
import { Provider } from "react-redux";
import store from "./redux/store";

// Pages
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

// Components
import Navbar from "./components/Navbar";
import AuthRoute from "./util/AuthRoute";

// const theme = createMuiTheme({
//   palette: {
//     primary: {
//       light: "#33c9dc",
//       main: "#00bcd4",
//       dark: "#008394",
//       contrastText: "#fff",
//     },
//     secondary: {
//       light: "#ff6333",
//       main: "#ff3d00",
//       dark: "#b22a00",
//       contrastText: "#fff",
//     },
//     typography: {
//       useNextVariants: true,
//     },
//   },
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
// });

const theme = createMuiTheme(themeFile);
const token = localStorage.FBIdToken;
let authenticated;
if (token) {
  const decodedToken = jwtDecode(token);
  console.log(decodedToken);
  console.log(Date.now());
  if (decodedToken.exp * 1000 < Date.now()) {
    window.location.href = "/login";
    authenticated = false;
  } else {
    authenticated = true;
  }
}

export default class App extends Component {
  render() {
    // console.log(token);
    return (
      <MuiThemeProvider theme={theme}>
        <Provider store={store}>
          <Router>
            <Navbar />
            <div className="container">
              <Switch>
                <Route exact path="/" component={Home} />
                {/* <Route exact path="/login" component={Login} />
                <Route exact path="/signup" component={Signup} /> */}
                <AuthRoute
                  exact
                  path="/login"
                  component={Login}
                  authenticated={authenticated}
                />
                <AuthRoute
                  exact
                  path="/signup"
                  component={Signup}
                  authenticated={authenticated}
                />
              </Switch>
            </div>
          </Router>
        </Provider>
      </MuiThemeProvider>
    );
  }
}

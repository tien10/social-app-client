import { SET_USER, SET_ERRORS, CLEAR_ERRORS, LOADING_UI } from "../types";
import axios from "axios";

export const loginUser = (userData, history) => (dispatch) => {
  dispatch({ type: LOADING_UI });
  axios
    .post("/login", userData)
    .then((res) => {
      // console.log(res);
      // console.log(this.props.history.push);
      // this.props.history.push("/signup");
      const FBIdToken = `Bearer ${res.data.token}`;
      localStorage.setItem("FBIdToken", FBIdToken);
      axios.defaults.headers.common["Authorization"] = FBIdToken;
      //   this.setState({
      //     loading: false,
      //   });
      dispatch(getUserData());
      dispatch({ type: CLEAR_ERRORS });
      history.push("/");
      // console.log(this.props.history.push);
      // this.props.history.go(-1);
    })
    .catch((err) => {
      //   this.setState({
      //     errors: err.response.data,
      //     loading: false,
      //   });
      dispatch({
        type: SET_ERRORS,
        payload: err.response.data,
      });
      // console.log(err);
      // alert("Dang nhap that bai!");
    });
};
export const signupUser = (newUserData, history) => (dispatch) => {
  dispatch({ type: LOADING_UI });
  axios
    .post("/signup", newUserData)
    .then((res) => {
      // console.log(res);
      // console.log(this.props.history.push);
      // this.props.history.push("/signup");
      const FBIdToken = `Bearer ${res.data.token}`;
      localStorage.setItem("FBIdToken", FBIdToken);
      axios.defaults.headers.common["Authorization"] = FBIdToken;
      //   this.setState({
      //     loading: false,
      //   });
      dispatch(getUserData());
      dispatch({ type: CLEAR_ERRORS });
      history.push("/");
      // console.log(this.props.history.push);
      // this.props.history.go(-1);
    })
    .catch((err) => {
      //   this.setState({
      //     errors: err.response.data,
      //     loading: false,
      //   });
      dispatch({
        type: SET_ERRORS,
        payload: err.response.data,
      });
      // console.log(err);
      // alert("Dang nhap that bai!");
    });
};

export const getUserData = () => (dispatch) => {
  //   dispatch({ type: LOADING_USER });
  axios
    .get("/user")
    .then((res) => {
      dispatch({
        type: SET_USER,
        payload: res.data,
      });
    })
    .catch((err) => console.log(err));
};

import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { Login, Signup, } from "../../containers";
import { connect } from "react-redux";
import AppRoutes from "./AppRoutes";
import AppActions from "../../store/Actions/AppActions";

class AuthRoutes extends React.Component {
  componentDidMount() {
    let user = localStorage.getItem("userInfo");
    if (user) {
      console.log("user", user);
      this.props.SaveUserState(JSON.parse(user));
    } else this.props.SaveUserState({});
  }
  render() {
    const { userInfo } = this.props.user;
    return (
      <div>
        <Routes>
          {!userInfo?.uid ? (
            <>
              <Route exact path="/login" element={<Login />} />
              <Route exact path="/signup" element={<Signup />} />
            </>
          ) : (
            <>
              <Route exact path="/" element={<AppRoutes user={userInfo} />} />
            </>
          )}
          <Route
            path="*"
            element={!userInfo?.uid ? <Navigate replace to="/login" /> : <Navigate replace to="/" />}
          />
        </Routes>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    user: state.AppReducer.user,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    SaveUserState: (user) => dispatch(AppActions.SaveUserState(user)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(AuthRoutes);

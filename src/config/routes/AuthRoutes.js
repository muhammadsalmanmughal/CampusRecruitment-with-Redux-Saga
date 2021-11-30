import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { Login, Signup } from "../../containers";
import StudentDashboard from "../../containers/StudentDashboard";
import { connect } from "react-redux";
import AppRoutes from "./AppRoutes";

class AuthRoutes extends React.Component {
  render() {
      // console.log("user",this.props?.user)
    return (
      <div>
        <Routes>
          {!this.props?.user?.userId ? (
            <>
              <Route exact path="/login" element={<Login />} />
              <Route exact path="/signup" element={<Signup />} />
              <Route path="*" element={<Login/>} />
              {/* <Route exact path="/signup" component={Signup}></Route> */}
            </>
          ) : (
            <>
              {/* <Route path="/" component={AuthRoutes} /> */}
              <Route exact path="/" element={<AppRoutes />} />
            </>
          )}
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

function mapDispatchToProps() {
  return {
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(AuthRoutes);

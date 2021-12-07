import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { Login, Signup, StudentDashboard } from "../../containers";
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
    const { userInfo={} } = this.props?.user;
    // console.log("userInfo AuthRoutes==>", this.props);
    return (
      <div>
        <Switch>
          {!userInfo?.uid ? (
            <Switch>
              <Route exact path="/login" component={Login} />
              <Route exact path="/signup" component={Signup} />
              <Route path="*" render={() => <Redirect to="/login" />} />
            </Switch>
          ) : (
            <Switch>
              <Route exact path="/" component={AppRoutes} />
              {/* <Route path="/" component={StudentDashboard} /> */}
              <Route path="*" render={() => <Redirect to="/" />} />
            </Switch>
          )}
        </Switch>
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

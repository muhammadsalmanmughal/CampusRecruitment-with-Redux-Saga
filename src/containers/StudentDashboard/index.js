import React, { Component } from "react";

import { Button } from "../../components";
import styles from "../Login/styles";
import { connect } from "react-redux";
import AppActions from "../../store/Actions/AppActions";


class StudentDashboard extends Component {
  constructor() {
    super();
  }
  logout = () => {
    const {Signout,history} = this.props;
    console.log('Props on logout function ====> ', Signout,history)
    Signout({history})
  };
  render() {
    console.log('Student Dashboard Props ======> ', this.props)
    return (
      <>
        <h1>Student Dashboard</h1>
        <Button
          value="Logout"
          onClick={() => this.logout()}
          style={styles.button}
        />
      </>
    );
  }
}

function mapStateToProps(state) {

}
function mapDispatchToProps(dispatch) {
  return {
    Signout: (payload) => dispatch(AppActions.Signout(payload )),
  };
}
export default connect(null, mapDispatchToProps) (StudentDashboard);

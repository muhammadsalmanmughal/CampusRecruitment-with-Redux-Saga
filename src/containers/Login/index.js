import React, { Component } from "react";
import { connect } from "react-redux";
import { TextInput, Button } from "../../components";
import AppActions from "../../store/Actions/AppActions";
import styles from "./styles";

class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: "firebase@gmail.com",
      pass: "firebase"
    };
  }

  login = () => {
    const { email, pass } = this.state;
    const { Signin } = this.props;
    Signin({ email, pass });
  };
 
  render() {
    console.log('Login Props =====> ', this.props);
    const { email, pass } = this.state;

    return (
      <div style={styles.container}>
        <h1>Login form</h1>
        <TextInput
          type="email"
          placeholder="Enter your Email"
          value={email}
          name="email"
          onChange={(e) => this.setState({ email: e.target.value })}
          style={styles.textInput}
        />
        <TextInput
          type="password"
          placeholder="Enter your Password"
          value={pass}
          name="pass"
          onChange={(e) => this.setState({ pass: e.target.value })}
          style={styles.textInput}
        />

        <Button
          value="Login"
          onClick={() => this.login()}
          style={styles.button}
        />
        <Button
          value="Logout"
          onClick={() => this.logout()}
          style={styles.button}
        />
      </div>
    );
  }
}

function mapStateToProps(state) {
  console.log("Login component State----->", state);
  return {
    user: state.AppReducer.user,
  };
}
function mapDispatchToProps(dispatch) {
  return {
    Signin: (payload) => dispatch(AppActions.Signin(payload)),
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(Login);

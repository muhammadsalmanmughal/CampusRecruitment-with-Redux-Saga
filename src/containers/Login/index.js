import React, { Component } from "react";
import { connect } from "react-redux";
import { getAuth, signOut } from "firebase/auth";
import { TextInput, Button } from "../../components";
import AppActions from "../../store/Actions/AppActions";
import styles from "./styles";

class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: "random@gmail.com",
      pass: "random",
      role: "student",
    };
  }

  login = () => {
    const { email, pass, role } = this.state;
    // const { email: userEmail } = JSON.parse(localStorage.getItem("userInfo"));
    // console.log("data from local storage----->", userEmail);

    // if (userEmail == email) {
    //   console.log("TRUE", "emai", userEmail);
    // } else {
    //   console.log("FALSE");
    // }
    const { Signin } = this.props;
    Signin({ email, pass, role });
  };
  logout = () => {
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        console.log("Sign out successfully");
      })
      .catch((error) => {
        // An error happened.
        console.log("Sign out catch error", error.message);
      });
  };

  render() {
    const { email, pass, role } = this.state;

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

        <select value={this.state.role} id="roles" name="role" style={styles.textInput} onChange={(e) => this.setState({role: e.target.value})}>
          <option value="student">Student</option>
          <option value="company">Company</option>
        </select>
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

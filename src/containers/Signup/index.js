import React, { Component } from "react";
import { TextInput, Button } from "../../components";
import { connect } from "react-redux";
import styles from "./styles";
import AppActions from "../../store/Actions/AppActions";

class Signup extends Component {
  constructor() {
    super();
    this.state = {
      role: "Student",
      name: "Random",
      email: "random@gmail.com",
      pass: "1234567",
      phone: "123456789009",
      institute: "random",
      cgpa: "2.2",
      address: "fasdfasdf",
      qualification:''
    };
    this.onChangeValue = this.onChangeValue.bind(this);
  }
  onChangeValue = (e) => {
    console.log("radio value--->", e.target.value);
    this.setState({
      qualification: e.target.value,
    });
  };

  showAlert = () => {
    const {
      role,
      name,
      email,
      pass,
      phone,
      institute,
      cgpa,
      qualification,
      address,
      
    } = this.state;

    const userObj = {
      role:'Student',
      name,
      email,
      pass,
      phone,
      institute,
      cgpa,
      qualification,
    };

    // localStorage.setItem("userInfo", JSON.stringify(userObj));

    this.setState({
      role: "Student",
      name: "",
      email: "",
      pass: "",
      phone: "",
      institute: "",
      cgpa: "",
      address: "",
    });

    this.props.SignUp({ email, pass, role, name, phone, institute, cgpa, qualification });
  };
  render() {
    const { role, name, email, pass, phone, institute, cgpa, address } =
      this.state;
    console.log(email, pass);

    return (
      <div style={styles.container}>
        <h1>Signup form</h1>

        <div>
          <p> Select Role:</p>
          <input
            type="radio"
            id="student"
            name="role"
            value="Student"
            onClick={() => this.setState({ role: "Student" })}
            defaultChecked
          />
          <label htmlFor="student">Student</label>
           
          <input
            type="radio"
            id="company"
            name="role"
            value="Company"
            onClick={() => this.setState({ role: "Company" })}
          />
          <label htmlFor="company">Company</label>
        </div>

        <TextInput
          type="text"
          placeholder="Enter your Name"
          value={name}
          name="stdname"
          onChange={(e) => this.setState({ name: e.target.value })}
          style={styles.textInput}
        />
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
        <TextInput
          type="text"
          placeholder="Enter your Phone Number"
          value={phone}
          name="phonenumber"
          onChange={(e) => this.setState({ phone: e.target.value })}
          style={styles.textInput}
        />
        {role == "Student" ? (
          <>
            <TextInput
              type="text"
              placeholder="Enter your Institute Name"
              value={institute}
              name="institute"
              onChange={(e) => this.setState({ institute: e.target.value })}
              style={styles.textInput}
            />
            <TextInput
              type="text"
              placeholder="Enter your CGPA"
              value={cgpa}
              name="cgpa"
              onChange={(e) => this.setState({ cgpa: e.target.value })}
              style={styles.textInput}
            />
            <div onChange={this.onChangeValue}>
              <p> Select Qualification:</p>
              <input
                type="radio"
                id="matric"
                name="qualification"
                value="Matric"
                // onChange={this.handleChange()}
              />
                <label htmlFor="matric">Matric</label>
               
              <input
                type="radio"
                id="intermediate"
                name="qualification"
                value="Intermediate"
                // onChange={this.handleChange()}
              />
                <label htmlFor="intermediate">Intermediate</label>
               
              <input
                type="radio"
                id="bacholors"
                name="qualification"
                value="bacholors"
                // onChange={this.handleChange()}
              />
                <label htmlFor="bacholors">Bacholors</label>
               
              <input
                type="radio"
                id="master"
                name="qualification"
                value="master"
                // onChange={this.handleChange()}
              />
                <label htmlFor="master">Master</label> 
            </div>
          </>
        ) : (
          <TextInput
            type="text"
            placeholder="Enter your Address"
            value={address}
            name="address"
            onChange={(e) => this.setState({ address: e.target.value })}
            style={styles.textInput}
          />
        )}
        <Button value="Signup" onClick={this.showAlert} style={styles.button} />
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
    SignUp: (payload) => dispatch(AppActions.SignUp(payload))
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(Signup);

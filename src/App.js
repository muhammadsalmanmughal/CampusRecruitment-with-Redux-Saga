import "./App.css";
import AuthRoutes from "./config/routes/AuthRoutes";
import { connect } from "react-redux";
import { Switch, Route, Navigate, Routes } from "react-router-dom";
import { Login, Signup, StudentDashboard } from "./containers";


function App(props) {
  // const userId = ''
  // const userId = localStorage.getItem("userInfo") ? JSON.parse(localStorage.getItem("userInfo")) : '';
  // console.log('APP ----> user ID', userId)
  return (
    <div className="App">
      {props.loader ? <div>Loading...</div> : null}
      <AuthRoutes/>
    </div>
  );
}

function mapDispatchToProps(dispatch) {
  return {};
}

function mapStateToProps(state) {
  return {
    loader: state.AppReducer.loader,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);

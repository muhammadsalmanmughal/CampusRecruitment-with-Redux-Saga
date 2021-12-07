import "./App.css";
import AuthRoutes from "./config/routes/AuthRoutes";
import { connect } from "react-redux";

function App(props) {
  console.log('Loader Props in APP ========> ',props)
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

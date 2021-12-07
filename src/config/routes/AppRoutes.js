import React from "react";
import { Switch, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import StudentDashboard from "../../containers/StudentDashboard";
import CompanyDashboard from "../../containers/CompanyDashboard";
const AppRoutes = (props) => {
  // const history=useNavigate()
  const appReducer = useSelector((store) => store.AppReducer);
  const { userInfo } = appReducer.user;
  console.log("App Route -------> ", props);
  return (
    <Switch>
      {userInfo.role == "Student" ? (
        <Route path="/" component={StudentDashboard} />
      ) : (
        <Route path="/" component={CompanyDashboard} />
      )}

    </Switch>
  );
};

export default AppRoutes;

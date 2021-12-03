import React from 'react'
import { Routes, Route, Navigate } from "react-router-dom";
import StudentDashboard  from '../../containers/StudentDashboard'
import CompanyDashboard from '../../containers/CompanyDashboard';

const AppRoutes = ({user}) => {
    return(
        <Routes>
            {user.role == 'Student'?
            <Route exact path="/" element={<StudentDashboard user={user}/>}/>
            :
            <Route exact path="/" element={<CompanyDashboard user={user}/>}/>
        }
        </Routes>
    )
}

export default AppRoutes
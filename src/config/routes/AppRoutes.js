import React from 'react'
import { Routes, Route, Navigate } from "react-router-dom";
import StudentDashboard  from '../../containers/StudentDashboard'
import CompanyDashboard from '../../containers/CompanyDashboard';

const AppRoutes = () => {
    const {userRole} = JSON.parse(localStorage.getItem('userInfo'))
    // console.log('localStorage role ------->', userRole)
    return(
        <Routes>
            {userRole == 'student'?
            <Route exact path="/" element={<StudentDashboard />}/>
            :
            <Route exact path="/" element={<CompanyDashboard />}/>
        }
        </Routes>
    )
}
export default AppRoutes
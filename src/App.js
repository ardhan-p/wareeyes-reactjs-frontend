import { HashRouter, Routes, Route, } from "react-router-dom";
import Login from './Pages/Login/Login';
import ForgetPassword from './Pages/ForgetPassword/ForgetPassword';
import ResetPassword from './Pages/ResetPassword/ResetPassword';
import ErrorPage from './Pages/ErrorPage/ErrorPage';
import Dashboard from './Pages/Dashboard/Dashboard';
import MonitorData from './Pages/MonitorData/MonitorData';
import Notifications from './Pages/Notifications/Notifications';
import Settings from './Pages/Settings/Settings';
import React, { useContext } from 'react'
import "./Style/dark.scss"
import { DarkModeContext } from './Context/darkModeContext';

function App() {
  const{darkMode} = useContext(DarkModeContext);

  return (
    <div className={darkMode ? "app dark" : "app"}>
    <HashRouter>
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/ForgetPassword" element={<ForgetPassword />} />
        <Route path="/ResetPassword" element={<ResetPassword />} />
        <Route path="/Dashboard" element={<Dashboard />} />
        <Route path="/MonitorData" element={<MonitorData />} />
        <Route path="/Notifications" element={<Notifications />} />
        <Route path="/Settings" element={<Settings />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </HashRouter>
   </div>
  );
}

export default App;

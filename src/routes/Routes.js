import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Dashboard from '../pages/Dashboard';
import StatePage from '../pages/StatePage';
import EmployeePage from '../pages/EmployeePage';  
import FleetPage from '../pages/FleetPage'; 
import CityPage from '../pages/CityPage';
// import Campus from '../pages/Campus';

const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<Dashboard />} />
    <Route path="/state" element={<StatePage />} />
    <Route path="/employee" element={<EmployeePage />} />  
    <Route path="/fleet" element={<FleetPage />} />  
    <Route path="/city" element={<CityPage />} /> 
    {/* <Route path="/campus" element={<Campus />} />  */}
  </Routes>
);

export default AppRoutes;

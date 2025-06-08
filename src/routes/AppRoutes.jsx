import React from 'react'
import { Routes, Route } from 'react-router-dom';
import SearchScore from '../pages/SearchScore/SearchScore';
import Report from '../pages/Report/Report';
import DashBoard from '../pages/DashBoard/DashBoard';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<DashBoard />} />
      <Route path="/search" element={<SearchScore />} />
      <Route path="/report" element={<Report />} />
      {/* <Route path="/settings" element={<Settings />} /> */}
    </Routes>
  )
}

export default AppRoutes
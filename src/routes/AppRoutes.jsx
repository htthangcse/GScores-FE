import React from 'react'
import { Routes, Route } from "react-router-dom";
import SearchScore from '../pages/searchScore/SearchScore';

const AppRoutes = () => {
  return (
    <Routes>
      {/* <Route path="/" element={<Dashboard />} /> */}
      <Route path="/search" element={<SearchScore />} />
      {/* <Route path="/reports" element={<Reports />} />
      <Route path="/settings" element={<Settings />} /> */}
    </Routes>
  )
}

export default AppRoutes
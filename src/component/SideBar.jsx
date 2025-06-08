import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  
  return (
    // <div className="w-64 bg-gradient-to-b from-yellow-300 via-green-400 to-teal-600 text-black shadow-md p-6">
    <div className="w-60 bg-blue-500 text-white shadow-md p-6">
      <h2 className="text-lg font-bold mb-8">Menu</h2>
      <ul className="space-y-6 text-[16px] font-normal">
        <li><Link to="/">Dashboard</Link></li>
        <li><Link to="/search" className="font-bold">Search Scores</Link></li>
        <li><Link to="/report">Reports</Link></li>
        <li><Link to="/settings">Settings</Link></li>
      </ul>
    </div>
  );
};

export default Sidebar;
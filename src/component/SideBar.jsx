// import React from "react";
// import { Link } from "react-router-dom";

// const Sidebar = () => {
  
//   return (
//     <div className="w-60 bg-blue-500 text-white shadow-md p-6">
//       <h2 className="text-lg font-bold mb-8">Menu</h2>
//       <ul className="space-y-6 text-[16px] font-normal">
//         <li><Link to="/">Dashboard</Link></li>
//         <li><Link to="/search" className="font-bold">Search Scores</Link></li>
//         <li><Link to="/report">Reports</Link></li>
//         <li><Link to="/settings">Settings</Link></li>
//       </ul>
//     </div>
//   );
// };

// export default Sidebar;


import React from "react";
import { Link, useLocation } from "react-router-dom";

const Sidebar = () => {
  const location = useLocation();

  return (
    <div className="w-60 bg-blue-600 text-white shadow-md p-6">
      <h2 className="text-lg font-bold mb-8">Menu</h2>
      <ul className="space-y-6 text-[16px] font-normal">
        <li>
          <Link
            to="/"
            className={`${location.pathname === "/" ? "font-bold" : ""}`}
          >
            Dashboard
          </Link>
        </li>
        <li>
          <Link
            to="/search"
            className={`${location.pathname === "/search" ? "font-bold" : ""}`}
          >
            Search Scores
          </Link>
        </li>
        <li>
          <Link
            to="/report"
            className={`${location.pathname === "/report" ? "font-bold" : ""}`}
          >
            Reports
          </Link>
        </li>
        <li>
          <Link
            to="/settings"
            className={`${location.pathname === "/settings" ? "font-bold" : ""}`}
          >
            Settings
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;

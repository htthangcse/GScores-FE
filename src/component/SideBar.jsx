import {
  LayoutDashboard,
  TextSearch,
  FileText,
  Settings,
} from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const menuItems = [
    { name: "Dashboard", path: "/", icon: <LayoutDashboard size={18} /> },
    { name: "Search Scores", path: "/search", icon: <TextSearch size={18} /> },
    { name: "Reports", path: "/report", icon: <FileText size={18} /> },
    { name: "Settings", path: "/settings", icon: <Settings size={18} /> },
  ];

const SideBar = () => {
  const location = useLocation();

  return (
    <div className="w-60 bg-white text-gray-800 p-6 shadow-lg min-h-screen">
      <h2 className="text-lg font-bold mb-10">Menu</h2>
      <ul className="space-y-6 text-sm">
        {menuItems.map((item) => (
          <li key={item.name}>
            <Link
              to={item.path}
              className={`flex items-center gap-3 ${
                location.pathname === item.path ? "font-semibold text-gray-900" : "text-gray-600"
              } hover:text-gray-900`}
            >
              {item.icon}
              <span>{item.name}</span>
              {item.badge && (
                <span className="ml-auto bg-gray-200 text-gray-800 text-xs px-2 py-0.5 rounded-full">
                  {item.badge}
                </span>
              )}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SideBar;

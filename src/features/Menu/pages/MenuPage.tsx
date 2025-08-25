import { useState } from "react";
import { Settings, LogOut, MoreVertical } from "lucide-react";
import { useNavigate } from "react-router-dom";
import MenuTree from "../components/MenuTree";

interface MenuPageProps {
  isCollapsed: boolean;
  setIsCollapsed: (value: boolean) => void;
  onLogout: () => void; // ✅ new prop
}

export default function MenuPage({ isCollapsed, setIsCollapsed, onLogout }: MenuPageProps) {
  const [isHovered, setIsHovered] = useState(false);
  const navigate = useNavigate();

  // Expand if sidebar is manually open OR hovered
  const expanded = !isCollapsed || isHovered;

  const handleLogout = () => {
    // ✅ Clear token
    localStorage.removeItem("token");

    // ✅ Notify App to update login state
    onLogout();

    // ✅ Redirect to login
    navigate("/");
  };

  return (
    <aside
      className={`bg-white shadow-xl flex flex-col fixed h-screen z-40 transition-all duration-300 ease-in-out
        ${expanded ? "w-64" : "w-16"}`}
      onMouseEnter={() => {
        if (isCollapsed) setIsHovered(true);
      }}
      onMouseLeave={() => {
        if (isCollapsed) setIsHovered(false);
      }}
    >
      {/* Logo/Header */}
      <div className="p-6 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold text-lg rounded-br-2xl flex items-center justify-between">
        {expanded && <span>Vidya UI</span>}
        <button
          onClick={() => setIsCollapsed(!isCollapsed)}
          className="p-1 rounded hover:bg-indigo-500 transition-colors"
          aria-label={expanded ? "Collapse menu" : "Expand menu"}
        >
          <MoreVertical size={20} />
        </button>
      </div>

      {/* Menu */}
      <nav className="flex-1 overflow-y-auto p-4">
        <MenuTree isCollapsed={!expanded} />
      </nav>

      {/* Footer Actions */}
      <div
        className={`p-4 border-t flex ${
          expanded ? "items-center justify-between" : "flex-col items-center space-y-3"
        }`}
      >
        <button
          className={`flex items-center text-gray-600 hover:text-blue-600 transition ${
            expanded ? "gap-2" : "justify-center"
          }`}
        >
          <Settings size={18} />
          {expanded && "Settings"}
        </button>
        <button
          onClick={handleLogout} // ✅ Logout handler
          className={`flex items-center text-red-500 hover:text-red-700 transition ${
            expanded ? "gap-2" : "justify-center"
          }`}
        >
          <LogOut size={18} />
          {expanded && "Logout"}
        </button>
      </div>
    </aside>
  );
}

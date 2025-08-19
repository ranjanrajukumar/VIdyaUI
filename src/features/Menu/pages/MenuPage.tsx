
import MenuTree from "../components/MenuTree";
import { Home, Settings, LogOut } from "lucide-react"; // beautiful icons

export default function MenuPage() {
  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-xl flex flex-col">
        {/* Logo/Header */}
        <div className="p-6 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold text-lg rounded-br-2xl">
          Vidya UI
        </div>

        {/* Menu */}
        <nav className="flex-1 overflow-y-auto p-4">
          <MenuTree />
        </nav>

        {/* Footer Actions */}
        <div className="p-4 border-t flex items-center justify-between">
          <button className="flex items-center gap-2 text-gray-600 hover:text-blue-600 transition">
            <Settings size={18} /> Settings
          </button>
          <button className="flex items-center gap-2 text-red-500 hover:text-red-700 transition">
            <LogOut size={18} /> Logout
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6">
        <h1 className="text-2xl font-bold text-gray-800 mb-4">Welcome 👋</h1>
        <p className="text-gray-600">
          Select a menu item from the sidebar to get started.
        </p>
      </main>
    </div>
  );
}

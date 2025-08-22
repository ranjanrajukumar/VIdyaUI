import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import LoginPage from "@/features/auth/pages/LoginPage";
import Home from "./features/auth/components/Home";
import MenuPage from "./features/Menu/pages/MenuPage";
import Header from "./features/Menu/pages/Header";
import Footer from "./features/Menu/pages/Footer";
import NotFound from "./pages/NotFound";

function App() {
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <Router>
      <div className="flex min-h-screen">
        {/* Sidebar */}
        <MenuPage isCollapsed={isCollapsed} setIsCollapsed={setIsCollapsed} />

        {/* Main content area */}
        <div
          className={`flex flex-col flex-1 transition-all duration-300 ${
            isCollapsed ? "ml-16" : "ml-64"
          }`}
        >
          {/* Header */}
          <header className="shadow">
            <Header />
          </header>

          {/* Routes Content */}
          <main className="flex-1 p-6">
            <Routes>
              <Route path="/" element={<LoginPage />} />
              <Route path="/home" element={<Home />} />
              <Route path="/menu" element={<div>Menu Content Goes Here</div>} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>

          {/* Footer */}
          <footer className="shadow">
            <Footer />
          </footer>
        </div>
      </div>
    </Router>
  );
}

export default App;
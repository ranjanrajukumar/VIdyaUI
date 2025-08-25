import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { useState, useEffect } from "react";
import LoginPage from "@/features/auth/pages/LoginPage";
import MenuPage from "./features/Menu/pages/MenuPage";
import Header from "./features/Menu/pages/Header";
import Footer from "./features/Menu/pages/Footer";
import NotFound from "./pages/NotFound";
import HomePage from "./components/HomePage";

function App() {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // ✅ check if token exists in localStorage when app loads
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) setIsLoggedIn(true);
  }, []);

  return (
    <Router>
      {isLoggedIn ? (
        // ✅ After login → Sidebar + Header + Footer + Routes
        <div className="flex min-h-screen">
          {/* Sidebar */}
          <MenuPage
            isCollapsed={isCollapsed}
            setIsCollapsed={setIsCollapsed}
            onLogout={() => {
              localStorage.removeItem("token");
              setIsLoggedIn(false);
            }}
          />

          {/* Main content */}
          <div
            className={`flex flex-col flex-1 transition-all duration-300 ${
              isCollapsed ? "ml-16" : "ml-64"
            }`}
          >
            {/* Header */}
            <header className="shadow">
              <Header />
            </header>

            {/* Routes */}
            <main className="flex-1 p-6">
              <Routes>
                <Route path="/home" element={<HomePage />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </main>

            {/* Footer */}
            <footer className="shadow">
              <Footer />
            </footer>
          </div>
        </div>
      ) : (
        // ✅ Before login → only Login Page
        <Routes>
          <Route
            path="/"
            element={<LoginPage onLoginSuccess={() => setIsLoggedIn(true)} />}
          />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      )}
    </Router>
  );
}

export default App;

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from '@/features/auth/pages/LoginPage';
import Home from './features/auth/components/Home';
import MenuPage from "./features/Menu/pages/MenuPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
          <Route path="/menu" element={<MenuPage />} />
        {/* <Route path="/home" element={<Home />} /> */}
        

      </Routes>
    </Router>
  );
}

export default App;

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from '@/features/auth/pages/LoginPage';
import Home from './features/auth/components/Home';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;

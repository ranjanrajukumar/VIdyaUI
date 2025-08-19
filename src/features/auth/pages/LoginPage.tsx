import { useState } from "react";
import LoginForm from "../components/LoginForm";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const loginImage =
  "https://images.unsplash.com/photo-1571260899304-425eee4c7efc?auto=format&fit=crop&w=800&q=80";

const LoginPage = () => {
  const [message, setMessage] = useState("");
  const [token, setToken] = useState("");
  const navigate = useNavigate();
  const handleLogin = async (
    UserName: string,
    Password: string
  ): Promise<void> => {
    try {
      const res = await axios.post(
        "https://ranjanrajukumar-001-site1.stempurl.com/api/User/login",
        {
          UserName,
          Password,
        }
      );
      console.log(res.data.token);
      setToken(res.data.token);
      navigate('/menu');
      setMessage("✅ Login successful!");
    } catch (error) {
      setMessage(
        `❌ Login failed: ${
          error instanceof Error ? error.message : "Unknown error"
        }`
      );
    }
  };

  return (
    <div className="flex flex-col md:flex-row min-h-screen">
      {/* Left full-height image on large screens only */}
      <div
        className="hidden md:block w-1/2 h-screen bg-cover bg-center"
        style={{ backgroundImage: `url(${loginImage})` }}
      ></div>
      {/* Right Login Form */}
      <div className="flex flex-col justify-center items-center w-full md:w-1/2 p-6 sm:p-10 bg-gray-100 relative">
        {/* Circle image for mobile */}
        <div className="md:hidden mb-6">
          <img
            src={loginImage}
            alt="School"
            className="w-24 h-24 rounded-full shadow-md object-cover border-4 border-white"
          />
        </div>
        {/* Login Card */}
        <div className="w-full max-w-md sm:max-w-lg bg-white rounded-2xl shadow-lg p-6 sm:p-8">
          <h1 className="text-center text-blue-700 font-extrabold text-3xl sm:text-4xl mb-2">
            Vidya ERP
          </h1>
          <p className="text-center text-gray-600 mb-6 text-sm sm:text-base">
            Login to access your dashboard
          </p>
          <LoginForm onLogin={handleLogin} />
          <p className="text-sm text-gray-500 mt-6 text-center">
            Forget Password?
            <a href="#" className="text-blue-600 hover:underline ml-1">
              Reset it
            </a>
          </p>
          {message && (
            <p className="mt-4 text-center text-sm text-gray-600">{message}</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default LoginPage;

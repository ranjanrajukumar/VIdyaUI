import { useState } from 'react';
//import LoginForm from '../components/LoginForm';
import { loginApi } from '../services/authService';
import LoginForm from '../components/LoginForm';

const LoginPage = () => {
  const [message, setMessage] = useState('');
  const [token, setToken] = useState('');

  const handleLogin = async (userId: string, password: string): Promise<void> => {
    try {
      const res = await loginApi(userId, password);
      localStorage.setItem('token', res.token);
      setToken(res.token);
      setMessage('✅ Login successful!');
    } catch (error) {
      setMessage(`❌ Login failed: ${error instanceof Error ? error.message : 'Unknown error'}`);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-6 rounded shadow w-96">
        <h2 className="text-2xl font-semibold text-center mb-4">Login</h2>
        <LoginForm onLogin={handleLogin} />
        <p className="mt-4 text-center text-sm text-gray-600">{message}</p>
      </div>
    </div>
  );
};

export default LoginPage;

import { useState } from 'react';

interface Props {
  onLogin: (userId: string, password: string) => void;
}

const LoginForm = ({ onLogin }: Props) => {
  const [userId, setUserId] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onLogin(userId, password);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="userId" className="block text-sm font-medium text-gray-700 mb-1">User ID</label>
        <input
          type="text"
          id="userId"
          value={userId}
          onChange={e => setUserId(e.target.value)}
          required
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          placeholder="Enter your user ID"
        />
      </div>

      <div>
        <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">Password</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          required
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          placeholder="Enter your password"
        />
      </div>

      <button
        type="submit"
        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-lg transition duration-300"
      >
        Login
      </button>
    </form>
  );
};

export default LoginForm;

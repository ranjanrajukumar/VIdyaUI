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
    <form onSubmit={handleSubmit} className="p-6 bg-white rounded shadow-md">
      <h2 className="text-lg font-bold mb-4">Login</h2>
      <input type="text" placeholder="User ID" value={userId} onChange={e => setUserId(e.target.value)} required className="w-full p-2 border mb-3" />
      <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} required className="w-full p-2 border mb-3" />
      <button type="submit" className="w-full bg-blue-600 text-white p-2 rounded">Login</button>
    </form>
  );
};

export default LoginForm;

// src/features/auth/services/authService.ts
export const loginApi = async (userId: string, password: string): Promise<{ token: string }> => {
try {
    const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/User/login`, {
    // const response = await fetch("https://localhost:7204/api/User/login", {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ userName: userId, password }),
  });

  if (!response.ok) {
    throw new Error('Login failed');
  }

  return await response.json();
} catch (error) {
    throw new Error(`Login failed: ${error instanceof Error ? error.message : 'Unknown error'}`);
}
};

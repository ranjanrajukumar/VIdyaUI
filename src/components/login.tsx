import React, { useState } from 'react';
import { FaEnvelope, FaLock, FaEye, FaEyeSlash } from 'react-icons/fa';

const LoginForm: React.FC = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="bg-gray-50 min-h-screen flex items-center justify-center p-4">
      <div className="bg-white rounded-xl shadow-2xl overflow-hidden w-full max-w-md animate-fade-in">
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-500 to-blue-600 p-6 text-center relative">
          <div className="absolute -top-10 -left-10 w-20 h-20 bg-blue-400 rounded-full opacity-20 animate-float" />
          <div
            className="absolute -bottom-5 -right-5 w-24 h-24 bg-blue-300 rounded-full opacity-20 animate-float"
            style={{ animationDelay: '0.5s' }}
          />
          <h2 className="text-2xl font-bold text-white relative z-10">Welcome Back</h2>
          <p className="text-blue-100 mt-1 relative z-10">Sign in to your account</p>
        </div>

        {/* Form */}
        <div className="p-8">
          {/* Google Sign In */}
          <button className="google-btn w-full flex items-center justify-center py-3 px-4 border border-gray-300 rounded-lg text-gray-700 font-medium hover:bg-gray-50 transition-all duration-300 mb-6">
            <img
              src="https://logowik.com/content/uploads/images/985_google_g_icon.jpg"
              alt="Google"
              className="h-8 w-10 mr-3"
            />
            Continue with Google
          </button>

          {/* Divider */}
          <div className="flex items-center my-6">
            <div className="flex-grow border-t border-gray-300" />
            <span className="mx-4 text-gray-500 text-sm">OR</span>
            <div className="flex-grow border-t border-gray-300" />
          </div>

          {/* Email/Password Form */}
          <form className="space-y-5">
            {/* Email Field */}
            <div className="input-field bg-gray-50 border border-gray-300 rounded-lg transition-all duration-300">
              <label htmlFor="email" className="block text-xs text-gray-500 px-4 pt-3">
                Email Address
              </label>
              <div className="flex items-center px-4 pb-2">
                <FaEnvelope className="text-gray-400 mr-2" />
                <input
                  type="email"
                  id="email"
                  className="w-full py-2 outline-none bg-transparent"
                  placeholder="you@example.com"
                />
              </div>
            </div>

            {/* Password Field */}
            <div className="input-field bg-gray-50 border border-gray-300 rounded-lg transition-all duration-300">
              <label htmlFor="password" className="block text-xs text-gray-500 px-4 pt-3">
                Password
              </label>
              <div className="flex items-center px-4 pb-2">
                <FaLock className="text-gray-400 mr-2" />
                <input
                  type={showPassword ? 'text' : 'password'}
                  id="password"
                  className="w-full py-2 outline-none bg-transparent"
                  placeholder="••••••••"
                />
                <button
                  type="button"
                  className="text-gray-400 hover:text-blue-500"
                  onClick={() => setShowPassword((prev) => !prev)}
                >
                  {showPassword ? <FaEye /> : <FaEyeSlash />}
                </button>
              </div>
            </div>

            {/* Remember & Forgot */}
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="remember"
                  className="h-4 w-4 text-blue-600 rounded border-gray-300 focus:ring-blue-500"
                />
                <label htmlFor="remember" className="ml-2 text-sm text-gray-600">
                  Remember me
                </label>
              </div>
              <a href="#" className="text-sm text-blue-600 hover:text-blue-800 hover:underline">
                Forgot password?
              </a>
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-4 rounded-lg font-medium transition-all duration-300 transform hover:scale-[1.02] shadow-md"
            >
              Sign In
            </button>
          </form>

          {/* Signup */}
          <div className="mt-6 text-center">
            <p className="text-gray-600">
              Don&apos;t have an account?{' '}
              <a href="#" className="text-blue-600 hover:text-blue-800 font-medium hover:underline">
                Sign up
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;

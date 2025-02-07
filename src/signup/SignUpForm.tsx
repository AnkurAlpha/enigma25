import React from 'react';
import { useNavigate } from 'react-router-dom';
import InputField from './InputField';

const SignUpForm = () => {
  const navigate = useNavigate();
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Add signup logic here
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="w-full">
        <InputField
          label="Username"
          type="text"
          placeholder="Choose a username"
          required
        />
        <InputField
          label="Email"
          type="email"
          placeholder="Enter your email"
          required
        />
        <InputField
          label="Password"
          type="password"
          placeholder="Choose a password"
          required
        />
        <InputField
          label="Confirm Password"
          type="password"
          placeholder="Confirm your password"
          required
        />
        <button
          type="submit"
          className="w-full py-3 px-4 mt-4 bg-transparent text-[#1cd41c] border-2 border-[#1cd41c] rounded-lg 
                   font-medium tracking-wider uppercase transition-all duration-300
                   hover:transform hover:-translate-y-1 hover:bg-[#1cd41c] hover:text-white
                   hover:shadow-[0_0_8px_2px_rgba(28,212,28,0.8),0_0_16px_4px_rgba(28,212,28,0.6)]
                   focus:outline-none focus:ring-2 focus:ring-[#1cd41c] focus:ring-opacity-50"
        >
          Create Account
        </button>
      </form>
      <button
        type="button"
        onClick={() => navigate('/login')}
        className="mt-6 px-6 py-2 bg-transparent text-gray-400 border-2 border-gray-400 rounded-lg
                 font-medium tracking-wider uppercase transition-all duration-300
                 hover:transform hover:-translate-y-1 hover:bg-gray-400 hover:text-white
                 hover:shadow-[0_0_8px_2px_rgba(156,156,156,0.8)]
                 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-opacity-50"
      >
        Back to Login
      </button>
    </>
  );
};

export default SignUpForm;

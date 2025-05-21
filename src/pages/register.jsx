import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Register() {
  const [form, setForm] = useState({
    username: '',
    email: '',
    password: '',
  });

  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');
    // Example validation
    if (!form.username || !form.email || !form.password) {
      setError('All fields are required.');
      return;
    }
    // TODO: Add API call here
    setSuccess('Registration successful!');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="w-full max-w-md bg-white rounded-xl shadow-md p-8">
        <h2 className="mb-8 text-2xl font-bold text-gray-800 text-center tracking-wide">Register</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-6">
            <label className="block text-gray-700 font-medium mb-2">
              Username:
              <input
                type="text"
                name="username"
                value={form.username}
                onChange={handleChange}
                className="mt-2 w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-200"
              />
            </label>
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 font-medium mb-2">
              Email:
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                className="mt-2 w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-200"
              />
            </label>
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 font-medium mb-2">
              Password:
              <input
                type="password"
                name="password"
                value={form.password}
                onChange={handleChange}
                className="mt-2 w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-200"
              />
            </label>
          </div>
          {error && <div className="mb-4 text-red-600 text-sm">{error}</div>}
          {success && <div className="mb-4 text-green-600 text-sm">{success}</div>}
          <button
            type="submit"
            className="w-full py-2 px-4 bg-blue-600 text-white font-semibold rounded hover:bg-blue-700 transition"
          >
            Register
          </button>
        </form>
        <div className="mt-6 text-center">
          <span className="text-gray-600 text-sm">Already have an account? </span>
          <Link to="/login" className="text-blue-600 hover:underline text-sm font-medium">
            Login here
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Register;
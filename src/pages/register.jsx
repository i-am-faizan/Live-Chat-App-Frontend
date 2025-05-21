import React, { useState } from 'react';

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
    <div style={{ maxWidth: 400, margin: '40px auto', padding: 24, border: '1px solid #ccc', borderRadius: 8 }}>
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: 12 }}>
          <label>
            Username:
            <input
              type="text"
              name="username"
              value={form.username}
              onChange={handleChange}
              style={{ width: '100%', padding: 8, marginTop: 4 }}
            />
          </label>
        </div>
        <div style={{ marginBottom: 12 }}>
          <label>
            Email:
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              style={{ width: '100%', padding: 8, marginTop: 4 }}
            />
          </label>
        </div>
        <div style={{ marginBottom: 12 }}>
          <label>
            Password:
            <input
              type="password"
              name="password"
              value={form.password}
              onChange={handleChange}
              style={{ width: '100%', padding: 8, marginTop: 4 }}
            />
          </label>
        </div>
        {error && <div style={{ color: 'red', marginBottom: 12 }}>{error}</div>}
        {success && <div style={{ color: 'green', marginBottom: 12 }}>{success}</div>}
        <button type="submit" style={{ padding: '8px 16px' }}>Register</button>
      </form>
    </div>
  );
}

export default Register;
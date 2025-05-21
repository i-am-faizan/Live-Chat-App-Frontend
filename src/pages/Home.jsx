import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Home() {
  const [active, setActive] = useState('');
  const navigate = useNavigate();

  const linkStyle = (isActive) => ({
    marginRight: 16,
    textDecoration: 'none',
    color: isActive ? '#1976d2' : '#333',
    fontWeight: 500,
    padding: '6px 12px',
    borderRadius: 4,
    background: isActive ? '#e3f2fd' : 'transparent',
    transition: 'background 0.2s, color 0.2s',
    cursor: 'pointer'
  });

  return (
    <div className="min-h-screen bg-gray-50">
      <nav style={{
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'center',
        padding: '16px 32px',
        background: '#f5f5f5',
        borderBottom: '1px solid #ddd',
        marginBottom: 32
      }}>
        <a
          href="/login"
          style={linkStyle(active === 'login')}
          onMouseEnter={() => setActive('login')}
          onMouseLeave={() => setActive('')}
        >
          Logout
        </a>
        <a
          href="/getUsers"
          style={{ ...linkStyle(active === 'getUsers'), marginRight: 0 }}
          onMouseEnter={() => setActive('getUsers')}
          onMouseLeave={() => setActive('')}
        >
          Get Users
        </a>
      </nav>
      {/* If new not run then we can use this listing */}
        {/* <div>
        <h2 className="mb-4 text-xl font-semibold text-gray-800">Session List</h2>
        <ul className="list-none p-0">
          <li
            className="py-2 px-4 border-b border-gray-200 cursor-pointer text-blue-600 hover:bg-blue-50 rounded transition"
            onClick={() => {navigate('/getUsers')}}
          >
            Session 1
          </li>
          <li
            className="py-2 px-4 border-b border-gray-200 cursor-pointer text-blue-600 hover:bg-blue-50 rounded transition"
            onClick={() => {navigate('/getUsers')}}
          >
            Session 2
          </li>
          <li
            className="py-2 px-4 border-b border-gray-200 cursor-pointer text-blue-600 hover:bg-blue-50 rounded transition"
            onClick={() => {navigate('/getUsers')}}
          >
            Session 3
          </li>
        </ul>
      </div>  */}
      {/* New Listing with perfect Css  */}
     <div className="max-w-md mx-auto bg-white rounded-xl shadow-md p-8">
        <h2 className="mb-8 text-2xl font-bold text-gray-800 text-center tracking-wide">Session List</h2>
        <ul className="space-y-6">
          {['Session 1', 'Session 2', 'Session 3'].map((session, idx) => (
            <li
              key={session}
              className="flex items-center px-8 py-6 border border-gray-200 rounded-lg bg-gray-100 hover:bg-blue-50 hover:border-blue-400 transition cursor-pointer shadow "
              style={{ minHeight: 72 }}
              onClick={() => navigate('/getUsers')}
            >
              <span className=" text-lg font-semibold text-gray-700 tracking-wide cursor-pointer">{session}</span>
            </li>
          ))}
        </ul>
      </div>

    </div>
  )
}

export default Home
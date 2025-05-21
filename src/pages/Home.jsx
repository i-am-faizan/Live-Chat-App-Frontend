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
    <div>
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
     <div>
        <h2 style={{ marginBottom: 16 }}>Session List</h2>
        <ul style={{ listStyle: 'none', padding: 0 }}>
          <li
            style={{ padding: '8px 0', borderBottom: '1px solid #eee', cursor: 'pointer', color: '#1976d2' }}
            onClick={() => {navigate('/getUsers')}}
          >
            Session 1
          </li>
          <li
            style={{ padding: '8px 0', borderBottom: '1px solid #eee', cursor: 'pointer', color: '#1976d2' }}
              onClick={() => {navigate('/getUsers')}}
          >
            Session 2
          </li>
          <li
            style={{ padding: '8px 0', borderBottom: '1px solid #eee', cursor: 'pointer', color: '#1976d2' }}
           onClick={() => {navigate('/getUsers')}}
          >
            Session 3
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Home
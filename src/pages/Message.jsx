import React, { useState, useRef, useEffect } from 'react';

function Message() {
  const [messages, setMessages] = useState([
    { from: 'me', text: 'Hi there!' },
    { from: 'other', text: 'Hello! How are you?' },
    { from: 'me', text: 'I am good, thanks!' }
  ]);
  const [input, setInput] = useState('');
  const messagesEndRef = useRef(null);

  // Set the other user's name here
  const otherUsername = "John Doe";

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSend = (e) => {
    e.preventDefault();
    if (input.trim() === '') return;
    setMessages([...messages, { from: 'me', text: input }]);
    setInput('');
  };

  return (
    <div style={{
      maxWidth: 400,
      margin: '40px auto',
      border: '1px solid #ccc',
      borderRadius: 8,
      display: 'flex',
      flexDirection: 'column',
      height: 500,
      background: '#f8f9fa'
    }}>
      {/* Chat header with other user's name */}
      <div style={{
        padding: '14px 20px',
        borderBottom: '1px solid #e0e0e0',
        background: '#075e54',
        color: '#fff',
        borderTopLeftRadius: 8,
        borderTopRightRadius: 8,
        fontWeight: 600,
        fontSize: 18,
        letterSpacing: 0.5
      }}>
        {otherUsername}
      </div>
      <div style={{
        flex: 1,
        overflowY: 'auto',
        padding: 16,
        display: 'flex',
        flexDirection: 'column',
        gap: 8
      }}>
        {messages.map((msg, idx) => (
          <div
            key={idx}
            style={{
              alignSelf: msg.from === 'me' ? 'flex-end' : 'flex-start',
              background: msg.from === 'me' ? '#dcf8c6' : '#fff',
              color: '#222',
              padding: '8px 14px',
              borderRadius: 18,
              maxWidth: '75%',
              boxShadow: '0 1px 2px rgba(0,0,0,0.05)'
            }}
          >
            {msg.text}
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>
      <form
        onSubmit={handleSend}
        style={{
          display: 'flex',
          borderTop: '1px solid #eee',
          padding: 8,
          background: '#fff'
        }}
      >
        <input
          type="text"
          value={input}
          onChange={e => setInput(e.target.value)}
          placeholder="Type a message"
          style={{
            flex: 1,
            border: 'none',
            outline: 'none',
            padding: 10,
            borderRadius: 20,
            background: '#f0f0f0',
            marginRight: 8
          }}
        />
        <button
          type="submit"
          style={{
            background: '#25d366',
            color: '#fff',
            border: 'none',
            borderRadius: 20,
            padding: '0 18px',
            fontWeight: 600,
            cursor: 'pointer'
          }}
        >
          Send
        </button>
      </form>
    </div>
  );
}

export default Message; 
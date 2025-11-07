import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Navbar({ user, onLogout }) {
  const navigate = useNavigate();

  const handleLogout = () => {
    onLogout();
    navigate('/');
  };

  return (
    <nav className="navbar">
      <Link to="/" className="navbar-logo">
        🎨 Virtual Art Gallery
      </Link>
      <ul className="navbar-links">
        <li>
          <Link to="/">🖼️ Gallery</Link>
        </li>
        <li>
          <Link to="/announcements">📢 Announcements</Link>
        </li>
        {user ? (
          <>
            <li>
              <Link to="/profile">👤 Profile</Link>
            </li>
            <li>
              <button onClick={handleLogout}>🚪 Logout</button>
            </li>
            <li>
              <span>👋 Welcome, {user.name}!</span>
            </li>
          </>
        ) : (
          <>
            <li>
              <Link to="/login">🔐 Login</Link>
            </li>
            <li>
              <Link to="/signup">✨ Signup</Link>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
}

export default Navbar;


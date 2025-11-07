import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Announcements() {
  const [announcements, setAnnouncements] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/announcements')
      .then(response => setAnnouncements(response.data))
      .catch(error => console.error("Error fetching announcements:", error));
  }, []);

  return (
    <div className="announcements-container">
      <h2>📢 Announcements</h2>
      {announcements.length === 0 ? (
        <div style={{
          textAlign: 'center',
          padding: '60px 20px',
          background: 'linear-gradient(135deg, rgba(102, 126, 234, 0.1) 0%, rgba(118, 75, 162, 0.1) 100%)',
          borderRadius: '20px',
          color: '#666',
          fontSize: '1.2rem'
        }}>
          <p>📭 No announcements at this time.</p>
          <p style={{ marginTop: '10px', fontSize: '1rem', color: '#999' }}>Check back later for updates!</p>
        </div>
      ) : (
        announcements.map(announcement => (
          <div key={announcement.id} className="announcement-card">
            <h3>{announcement.title}</h3>
            <p>{announcement.content}</p>
            <small>Posted on: {new Date(announcement.date).toLocaleDateString()}</small>
          </div>
        ))
      )}
    </div>
  );
}

export default Announcements;


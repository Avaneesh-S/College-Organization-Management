import React from 'react';
import './ProfilePage.css';

function ProfilePage() {
  return (
    <div className="profile-container">
      <header>
        <h1>John Doe</h1>
        <button>Edit Profile</button>
      </header>
      <div className="profile-content">
        <div className="profile-pic">
          <img src="https://i.imgur.com/9V7mTir.jpg" alt="Profile Picture" />
        </div>
        <div className="profile-info">
          <h2>John Doe</h2>
          <p>Student</p>
          <p>University of ABC</p>
          <div className="contact">
            <p><strong>Email:</strong> johndoe@gmail.com</p>
            <p><strong>Phone:</strong> 123-456-7890</p>
            <p><strong>Address:</strong> 123 Main Street, Anytown, USA</p>
          </div>
          <div className="education">
            <h3>Education</h3>
            <ul>
              <li>Bachelor of Science in Computer Science, University of ABC</li>
              <li>Master of Business Administration, University of XYZ</li>
            </ul>
          </div>
          <div className="skills">
            <h3>Skills</h3>
            <ul>
              <li>HTML</li>
              <li>CSS</li>
              <li>JavaScript</li>
              <li>React</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfilePage;


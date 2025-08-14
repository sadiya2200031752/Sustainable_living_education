import React from 'react';
import '../index.css';

function Features() {
  return (
    <div className="features">
      <h2>Our Features</h2>
      <div className="feature-grid">  {/* this is important */}
        <div className="feature">
          <h3>Learn Sustainability ♻️</h3>
          <p>Interactive lessons and resources.</p>
        </div>
        <div className="feature">
          <h3>Track Progress 🌱</h3>
          <p>See how much impact you’ve made.</p>
        </div>
        <div className="feature">
          <h3>Eco Resources 📚</h3>
          <p>Access eco-friendly guides and materials.</p>
        </div>
        <div className="feature">
          <h3>Digital Study and Challenges 🏅</h3>
          <p>Participate in exciting eco challenges.</p>
        </div>
      </div>
    </div>
  );
}

export default Features;

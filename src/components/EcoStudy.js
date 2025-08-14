// src/components/EcoStudy.js
import React, { useState, useEffect } from 'react';

const QUIZ_QUESTIONS = [
  {
    q: 'Which is the best option to reduce paper use?',
    options: ['Keep printing everything', 'Switch to digital notes', 'Use more sticky notes'],
    correct: 1
  },
  {
    q: 'What is a low-energy study light option?',
    options: ['Incandescent bulb', 'LED desk lamp', 'Leaving lights on all day'],
    correct: 1
  },
  {
    q: 'Which helps reduce plastic waste at study desk?',
    options: ['Single-use bottle', 'Reusable bottle', 'Plastic straws'],
    correct: 1
  }
];

function EcoStudy() {
  // Challenges state (persisted)
  const initialChallenges = [
    { id: 1, text: 'No printing for 7 days', done: false },
    { id: 2, text: 'Use natural light for study sessions', done: false },
    { id: 3, text: 'Use a reusable water bottle', done: false }
  ];

  const [challenges, setChallenges] = useState(() => {
    try {
      const stored = localStorage.getItem('ecoChallenges');
      return stored ? JSON.parse(stored) : initialChallenges;
    } catch {
      return initialChallenges;
    }
  });

  useEffect(() => {
    localStorage.setItem('ecoChallenges', JSON.stringify(challenges));
  }, [challenges]);

  const toggleChallenge = (id) => {
    setChallenges(prev => prev.map(c => c.id === id ? { ...c, done: !c.done } : c));
  };

  // Quiz state
  const [quizStarted, setQuizStarted] = useState(false);
  const [qIndex, setQIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);

  const answer = (i) => {
    if (i === QUIZ_QUESTIONS[qIndex].correct) setScore(s => s + 1);
    if (qIndex + 1 < QUIZ_QUESTIONS.length) setQIndex(qIndex + 1);
    else setFinished(true);
  };

  const restartQuiz = () => {
    setQIndex(0);
    setScore(0);
    setFinished(false);
    setQuizStarted(false);
  };

  const cards = [
    {
      title: 'Practical Tips',
      desc: 'Simple daily habits: go paperless, use LED lamps, reuse stationery.',
      link: '#practical-tips'
    },
    {
      title: 'DIY Projects',
      desc: 'Make a recycled cardboard desk organiser & plantable pencil holders.',
      link: '#diy'
    },
    {
      title: 'Weekly Challenge',
      desc: 'Small tasks that improve your eco-score — mark done when completed.',
      link: '#challenges'
    },
    {
      title: 'Resources',
      desc: 'Guides, apps and external links to learn more.',
      link: '#resources'
    }
  ];

  return (
    <div>
      {/* Banner */}
      <section className="eco-banner">
        <div className="eco-banner-content">
          <h1>Eco-Friendly Study</h1>
          <p>Small changes make big impact — learn sustainable study habits.</p>
        </div>
      </section>

      {/* Main container */}
      <div className="eco-container">
        {/* Card grid */}
        <div className="card-grid" aria-label="eco cards">
          {cards.map((c, i) => (
            <div key={i} className="eco-card">
              <h3>{c.title}</h3>
              <p>{c.desc}</p>
              <a className="card-btn" href={c.link}>
                {c.link === '#practical-tips'
                  ? 'Read tips'
                  : c.link === '#diy'
                  ? 'See project'
                  : c.link === '#challenges'
                  ? 'Start challenge'
                  : 'Open resources'}
              </a>
            </div>
          ))}
        </div>

        {/* Practical tips section */}
        <section id="practical-tips" className="section practical-tips">
          <h2>Practical Tips</h2>
          <ul className="tips-list">
            <li>Switch to digital notes and e-books when possible.</li>
            <li>Choose LED lamps and switch off devices when not in use.</li>
            <li>Use refillable pens and recycled notebooks.</li>
          </ul>
        </section>

        {/* DIY Projects */}
        <section id="diy" className="section diy-projects">
          <h2>DIY Eco Projects</h2>
          <ol>
            <li>Desk organizer from cardboard boxes — decorate and reuse.</li>
            <li>Plantable bookmarks (paper with embedded seeds).</li>
            <li>Reuse jars as pen holders and small planters.</li>
          </ol>
        </section>

        

        {/* Small quiz */}
        <section className="section quiz-section quiz-area" aria-label="eco quiz">
          <h2>Quick Eco Quiz</h2>
          {!quizStarted ? (
            <div className="quiz-card start-card">
              <p>Test your eco-knowledge and learn fun facts along the way!</p>
              <button className="card-btn" onClick={() => setQuizStarted(true)}>
                Play Quiz
              </button>
            </div>
          ) : !finished ? (
            <div className="quiz-card">
              <p className="quiz-q">{QUIZ_QUESTIONS[qIndex].q}</p>
              <div className="quiz-options">
                {QUIZ_QUESTIONS[qIndex].options.map((opt, idx) => (
                  <button key={idx} className="quiz-opt" onClick={() => answer(idx)}>
                    {opt}
                  </button>
                ))}
              </div>
              <p className="quiz-progress">
                Question {qIndex + 1} of {QUIZ_QUESTIONS.length}
              </p>
            </div>
          ) : (
            <div className="quiz-result">
              <p>Your score: {score} / {QUIZ_QUESTIONS.length}</p>
              <button className="card-btn" onClick={restartQuiz}>
                Restart Quiz
              </button>
            </div>
          )}
        </section>
        {/* Challenges */}
        <section id="challenges" className="section weekly-challenges">
          <h2>Weekly Challenges</h2>
          <ul className="challenge-list">
            {challenges.map(c => (
              <li key={c.id} className={`challenge-item ${c.done ? 'done' : ''}`}>
                <label>
                  <input
                    type="checkbox"
                    checked={c.done}
                    onChange={() => toggleChallenge(c.id)}
                  />
                  <span className="challenge-text">{c.text}</span>
                </label>
              </li>
            ))}
          </ul>
        </section>

        {/* Resources */}
        <section id="resources" className="section other-resources">
          <h2>Resources & Links</h2>
          <ul className="resource-list">
            <li>
              <a href="https://www.un.org/sustainabledevelopment/" target="_blank" rel="noopener noreferrer">
                UN — Sustainable Development
              </a>
            </li>
            <li>
              <a href="https://www.worldwildlife.org/" target="_blank" rel="noopener noreferrer">
                World Wildlife Fund
              </a>
            </li>
            <li>
              <a href="https://www.epa.gov/recycle" target="_blank" rel="noopener noreferrer">
                EPA — Recycling Basics
              </a>
            </li>
            <li>
              <a
                href="https://www.energy.gov/energysaver/lighting-choices-save-you-money"
                target="_blank"
                rel="noopener noreferrer"
              >
                Energy saving lighting tips
              </a>
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
}

export default EcoStudy;

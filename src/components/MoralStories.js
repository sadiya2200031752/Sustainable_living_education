// src/components/MoralStories.js
import React, { useState } from "react";

function MoralStories() {
  const [reveal, setReveal] = useState(false);

  // Medium-length retelling (The Empty Pot)
  const story = {
    title: "The Empty Pot",
    moral: "Honesty is the best policy.",
    paragraphs: [
      "In a bustling kingdom, an aging emperor wondered who should be the next leader. He loved plants and believed a person who cares for living things will also care for people. So he invited children from across the land to the palace, gave each one a single seed, and said, “Return in one season with your best plant. The most devoted gardener will become my successor.”",
      "Ping, a quiet boy who tended a small balcony garden with great care, took his seed home. He filled a pot with rich soil, watered it gently, and placed it in the perfect patch of sun. Days turned to weeks. He adjusted the watering, moved the pot for better light, and even tried new soil—yet nothing sprouted. Neighbors’ plants grew tall and lush; vines curled, flowers burst into color, and bushes stretched proudly to the sky. Ping’s pot stayed stubbornly bare.",
      "When the season ended, the children returned to the palace carrying vibrant plants—rare flowers, fragrant herbs, and tiny trees with glossy leaves. Ping felt heat in his cheeks and a lump in his throat. Still, he lifted his empty pot and joined the line. When the emperor walked through the hall, praise drifted like perfume. But he paused when he saw Ping’s pot. “Young man,” he asked kindly, “why is your pot empty?”",
      "Ping bowed. “I did everything I knew to help the seed grow. I watered it, gave it sunlight, and waited. It never sprouted. I am sorry.” The room murmured. The emperor raised his hand. “Do not apologize.” He turned to the crowd. “The seeds I gave you were boiled—they could not grow. Many of you replaced the seed to impress me. This boy alone returned with the truth.” He placed a steady hand on Ping’s shoulder. “A leader must be honest, even when honesty looks like failure.”",
    ],
  };

  return (
    <div className="moral-stories-page">
      <header className="moral-header">
        <h1>Moral Stories</h1>
        <p>Read a timeless tale and watch a little animation grow beside it.</p>
      </header>

      <div className="moral-grid">
        {/* Story column */}
        <article className="moral-story-card">
          <h2 className="moral-title">{story.title}</h2>

          <div className="story-text">
            {story.paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>

          <div className="moral-actions">
            {!reveal ? (
              <button className="card-btn reveal-moral-btn" onClick={() => setReveal(true)}>
                Reveal Moral
              </button>
            ) : (
              <p className="moral-reveal">Moral: {story.moral}</p>
            )}
          </div>
        </article>

        {/* Animation column */}
        <aside className="moral-anim">
          <div className={`story-anim ${reveal ? "animate" : ""}`}>
            {/* background sky + drifting cloud */}
            <div className="sky"></div>
            <div className="cloud cloud-1"></div>
            <div className="cloud cloud-2"></div>

            {/* sprout grows when moral is revealed */}
            <div className="stem"></div>
            <div className="leaf leaf-left"></div>
            <div className="leaf leaf-right"></div>

            {/* pot */}
            <div className="pot">
              <div className="pot-lip"></div>
            </div>
          </div>

          <p className="anim-hint">
            Tip: Click <strong>Reveal Moral</strong> to see the sprout grow 🌱
          </p>
        </aside>
      </div>
    </div>
  );
}

export default MoralStories;

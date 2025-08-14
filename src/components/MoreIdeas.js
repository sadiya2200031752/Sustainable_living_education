import React, { useState } from "react";
//import "./index.css";

function MoreIdeas() {
  const [ideas] = useState([
    {
      title: "Community Learning Hubs",
      description:
        "Set up local hubs where students can gather to learn together, share books, and access technology.",
    },
    {
      title: "Digital Resource Sharing",
      description:
        "Create an online repository of free educational resources, videos, and e-books for all students.",
    },
    {
      title: "Teacher Collaboration Programs",
      description:
        "Encourage teachers to share lesson plans, sustainable teaching methods, and eco-friendly classroom tips.",
    },
    {
      title: "Outdoor Learning Sessions",
      description:
        "Take classes outdoors to connect students with nature and promote environmental awareness.",
    },
    {
      title: "Recycled Learning Materials",
      description:
        "Encourage students to reuse notebooks, exchange old books, and use recycled stationery.",
    },
    {
      title: "Peer-to-Peer Mentoring",
      description:
        "Older students mentor younger ones, fostering leadership and collaborative learning.",
    },
  ]);

  return (
    <div className="moreideas-container">
      <h1 className="moreideas-title">💡 More Ideas for Sustainable Education</h1>
      <div className="ideas-grid">
        {ideas.map((idea, index) => (
          <div key={index} className="idea-card">
            <h2>{idea.title}</h2>
            <p>{idea.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MoreIdeas;

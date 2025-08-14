import React, { useState } from 'react';

function DigitalStudy() {
  const topics = [
    { 
      id: 1, 
      title: "Environmental Sustainability 🌱", 
      description: "Learn about solar, wind, and hydro energy sources.Environmental sustainability is about meeting our needs without harming the ability of future generations to meet theirs. It focuses on using resources wisely, reducing waste, and protecting ecosystems.",
      
    },
    { 
      id: 2, 
      title: "Digital Means", 
      description: "With the help of digital study, learning is no longer limited to a physical location. We can access study materials anytime and anywhere through computers, smartphones, and the internet. Digital platforms provide a vast range of resources, from videos and e-books to interactive simulations, making learning more engaging and effective. It also allows instant updates, global collaboration, and access to knowledge that goes far beyond the limits of traditional classrooms..",
      
    },
   {
  id: 3,
  title: "General Knowledge",
  description: `General knowledge is the awareness of facts, information, and ideas from different fields like history, science, geography, culture, and current events. It helps us understand the world better and makes conversations more meaningful.

Do You Know?

The Earth revolves around the Sun in about 365.25 days, which is why we have a leap year every 4 years.
The largest ocean on Earth is the Pacific Ocean.
Bananas are berries, but strawberries are not.
Honey never spoils; archaeologists have found edible honey in ancient Egyptian tombs.
The human brain contains around 86 billion nerve cells.
The Amazon rainforest produces more than 20% of the world’s oxygen supply.

General knowledge is not just about remembering facts—it encourages curiosity, critical thinking, and a broader perspective on life.`,
  // link: "https://www.fao.org/sustainability/en/"
},

    {
  id: 4,
  title: "Articles",
  description: `Hey, read this interesting article about how technology is shaping our future. Articles are written pieces that inform, explain, or share opinions about a topic. They can be educational, analytical, or entertaining. Informative articles explain facts and provide knowledge, such as “How AI is Changing Education.” Opinion articles share personal viewpoints on current issues, while feature articles explore topics in depth, such as climate change or cultural festivals.

Reading articles helps improve knowledge, critical thinking, and awareness about the world.

**Featured Article: "Embracing the AI Future"**  
This reflective essay from TechRadarPro traces a 57-year journey through the evolution of computing—from mainframes in 1967 to today’s AI revolution. It highlights how breakthroughs in cloud computing, broadband, and AI have shattered technological constraints, democratizing knowledge and making education more inclusive. The author invites readers to embrace the AI transformation with courage and curiosity—likening it to a tidal wave we must meet boldly, not fear.  
`,
  // link: "https://www.techradar.com/pro/embracing-the-ai-future"
}

  ];

  const [completed, setCompleted] = useState([]);

  const toggleComplete = (id) => {
    setCompleted(prev =>
      prev.includes(id) ? prev.filter(t => t !== id) : [...prev, id]
    );
  };

  return (
    <div className="digital-study-page">
      <h1 className="ds-title">📚 Digital Study Hub</h1>
      <p className="ds-intro">
        Explore interactive lessons on sustainability and track your learning progress.
      </p>

      <div className="topic-grid">
        {topics.map(topic => (
          <div key={topic.id} className={`topic-card ${completed.includes(topic.id) ? 'completed' : ''}`}>
            <h3>{topic.title}</h3>
            <p>{topic.description}</p>

            {topic.link && (
              <a 
                href={topic.link} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="open-link"
              >
                Open Resource
              </a>
            )}
            
            <button onClick={() => toggleComplete(topic.id)}>
              {completed.includes(topic.id) ? 'Mark as Incomplete' : 'Mark as Completed'}
            </button>
          </div>
        ))}
      </div>

      <div className="progress-section">
        <p>Progress: {completed.length} / {topics.length} topics completed ✅</p>
      </div>

      <div className="quiz-teaser">
        <h2>Ready to Test Your Knowledge?</h2>
        <p>Take our eco-friendly quiz to challenge yourself!</p>
        <button onClick={() => alert("Redirect to Quiz Page")}>Go to Quiz</button>
      </div>
    </div>
  );
}

export default DigitalStudy;

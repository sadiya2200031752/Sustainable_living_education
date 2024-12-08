import React, { useState } from "react";
import '../App.css';
const Lessons = () => {
    const [lessons] = useState([
        {
            id: 1,
            title: "Introduction to Renewable Energy",
            description: "Learn about solar, wind, and other renewable energy sources.",
            link: "/lessons/renewable-energy"
        },
        {
            id: 2,
            title: "Waste Reduction Techniques",
            description: "Discover effective ways to reduce, reuse, and recycle.",
            link: "/lessons/waste-reduction"
        },
        {
            id: 3,
            title: "Eco-Friendly Lifestyle Choices",
            description: "Explore how to make greener choices in everyday life.",
            link: "/lessons/eco-friendly-lifestyle"
        }
    ]);

    return (
        <div className="lesson">
        <div>
            <h2>Interactive Lessons</h2>
            <ul>
                {lessons.map(lesson => (
                    <li key={lesson.id}>
                        <h3>{lesson.title}</h3>
                        <p>{lesson.description}</p>
                        <a href={lesson.link}>Start Lesson</a>
                    </li>
                ))}
            </ul>
        </div>
         </div>
    );
};

export default Lessons;

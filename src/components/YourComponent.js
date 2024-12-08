




import React from 'react';

const YourComponent = () => {

    return (
        <div className=".your-component-container">
             <div className="component">
            <h1>Sustainable Living Education Dashboard</h1>

            {/* Badges Section */}
            <section className="badges">
                <h2>Your Badges</h2>
                <div className="badge">
                    <img src="C:\Users\DELL\sustainable-education-frontend\src\components\images\th.jpeg" alt="Badge" />
                    <p>Eco-Friendly Advocate</p>
                </div>
            </section>

            {/* Interactive Lessons Section */}
            <section className="interactive-lessons">
                <h2>Interactive Lessons</h2>
                <ul>
                    <li>
                        <h3>Introduction to Renewable Energy</h3>
                        <p>Learn about solar, wind, and other renewable energy sources.</p>
                        <a href="/lessons/renewable-energy">Start Lesson</a>
                    </li>
                    <li>
                        <h3>Waste Reduction Techniques</h3>
                        <p>Discover effective ways to reduce, reuse, and recycle.</p>
                        <a href="/lessons/waste-reduction">Start Lesson</a>
                    </li>
                    <li>
                        <h3>Eco-Friendly Lifestyle Choices</h3>
                        <p>Explore how to make greener choices in everyday life.</p>
                        <a href="/lessons/eco-friendly-lifestyle">Start Lesson</a>
                    </li>
                </ul>
            </section>

            {/* Project Ideas Section */}
            <section className="project-ideas">
                <h2>Project Ideas</h2>
                <ul>
                    <li>
                        <h3>Build a Solar-Powered Charger</h3>
                        <p>Create a solar-powered charger for your devices.</p>
                        <a href="/projects/solar-charger">Learn More</a>
                    </li>
                    <li>
                        <h3>Create a Home Compost Bin</h3>
                        <p>Turn organic waste into nutrient-rich compost.</p>
                        <a href="/projects/compost-bin">Learn More</a>
                    </li>
                    <li>
                        <h3>Design a Water Conservation System</h3>
                        <p>Build a system to collect and reuse rainwater.</p>
                        <a href="/projects/water-conservation">Learn More</a>
                    </li>
                </ul>
            </section>

            {/* Resources Section */}
            <section className="resources">
                <h2>Resources</h2>
                <ul>
                    <li>
                        <h3>Sustainable Living Guide</h3>
                        <p>A comprehensive guide to sustainable living practices.</p>
                        <a href="/resources/sustainable-living-guide">View Guide</a>
                    </li>
                    <li>
                        <h3>Government Grants for Eco-Friendly Projects</h3>
                        <p>Information on grants available for sustainability projects.</p>
                        <a href="/resources/grants">Learn More</a>
                    </li>
                    <li>
                        <h3>Local Recycling Centers</h3>
                        <p>Find recycling centers near you.</p>
                        <a href="/resources/recycling-centers">Find Centers</a>
                    </li>
                </ul>
            </section>
        </div>
        </div>
    );
};

export default YourComponent;

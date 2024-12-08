import React from 'react';
import '../App.css';
const Dashboard = () => {
    return (
        <div className="dashboard">
        <div>
            <h1>Sustainable Living Education Dashboard</h1>

            {/* Lessons Section */}
            <section>
                <h2>Interactive Lessons</h2>
                <ul>
                    <li>
                        <h3>Introduction to Sustainable education</h3>
                        <p>Learn about solar, wind, and other renewable energy sources.</p>
                        <a href="/lessons/renewable-energy">Start Lesson</a>
                    </li>
                    <li>
                        <h3>Ways to improve efficient way of study</h3>
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
            <section>
                <h2>Project Ideas</h2>
                <ul>
                    <li>
                        <h3>Build a Solar-Powered Charger</h3>
                        <p>Create a solar-powered charger for your devices.</p>
                        <a href="/projects/solar-charger">Learn More</a>
                    </li>
                    <li>
                        <h3>Create a Home project</h3>
                        <p>Turn organic waste into nutrient-rich compost.</p>
                        <a href="/projects/compost-bin">Learn More</a>
                    </li>
                    <li>
                        <h3>Design a Conservation System</h3>
                        <p>Build a system to collect and reuse rainwater.</p>
                        <a href="/projects/water-conservation">Learn More</a>
                    </li>
                </ul>
            </section>

            {/* Resources Section */}
            <section>
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

export default Dashboard;

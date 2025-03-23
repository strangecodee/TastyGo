import React from 'react';

const ExploreAbout = () => {
    return (
        <div className="container mt-5">
            <h1 className="text-center">Explore Our Project</h1>
            
            <section className="mt-4">
                <h2>🔹 What is Used in This Project?</h2>
                <ul>
                    <li>React.js for Frontend</li>
                    <li>Spring Boot for Backend</li>
                    <li>MongoDB for Database</li>
                    <li>Bootstrap for Styling</li>
                    <li>React Router for Navigation</li>
                </ul>
            </section>

            <section className="mt-4">
                <h2>🔹 About This Project</h2>
                <p>
                    This project is a **JAVA based Food Ordering System** that allows users to explore and order their favorite meals
                    seamlessly. It provides an interactive menu, cart functionality, and order placement.
                </p>
            </section>

            <section className="mt-4">
                <h2>🔹 Made By</h2>
                <p><strong>Anurag Maurya</strong></p>
                <p>Cloud & DevOps Enthusiast | AWS Cloud Solutions Architect</p>
                <p>GitHub: <a href="https://github.com/strangecodee" target="_blank" rel="noopener noreferrer">strangecodee</a></p>
            </section>
        </div>
    );
};

export default ExploreAbout;

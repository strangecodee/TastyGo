import React from 'react';

const ExploreAbout = () => {
    const containerStyle = {
        padding: '2rem',
        maxWidth: '800px',
        margin: '2rem auto',
        backgroundColor: '#fff',
        borderRadius: '12px',
        boxShadow: '0 8px 24px rgba(0, 0, 0, 0.1)',
        fontFamily: 'Segoe UI, Tahoma, Geneva, Verdana, sans-serif',
    };

    const titleStyle = {
        fontSize: '2.5rem',
        fontWeight: 700,
        color: '#2c3e50',
        textAlign: 'center',
        marginBottom: '1.5rem',
    };

    const sectionTitleStyle = {
        fontSize: '1.5rem',
        fontWeight: 600,
        color: '#007bff',
        marginTop: '1.5rem',
        marginBottom: '1rem',
    };

    const listStyle = {
        paddingLeft: '1.5rem',
        lineHeight: '1.8',
        color: '#333',
    };

    const paragraphStyle = {
        fontSize: '1rem',
        lineHeight: '1.7',
        color: '#444',
        marginBottom: '0.5rem',
    };

    const linkStyle = {
        color: '#007bff',
        textDecoration: 'none',
        fontWeight: 500,
    };

    return (
        <div style={containerStyle}>
            <h1 style={titleStyle}>Explore Our Project</h1>

            <section>
                <h2 style={sectionTitleStyle}>🔹 What is Used in This Project?</h2>
                <ul style={listStyle}>
                    <li>React.js for Frontend</li>
                    <li>Spring Boot for Backend</li>
                    <li>MongoDB for Database</li>
                    <li>Bootstrap for Styling</li>
                    <li>React Router for Navigation</li>
                </ul>
            </section>

            <section>
                <h2 style={sectionTitleStyle}>🔹 About This Project</h2>
                <p style={paragraphStyle}>
                    This project is a <strong>JAVA based Food Ordering System</strong> that allows users to explore and order their favorite meals seamlessly. It provides an interactive menu, cart functionality, and order placement.
                </p>
            </section>

            <section>
                <h2 style={sectionTitleStyle}>🔹 Made By</h2>
                <p style={paragraphStyle}><strong>Anurag Maurya</strong></p>
                <p style={paragraphStyle}>Cloud & DevOps Enthusiast | AWS Cloud Solutions Architect</p>
                <p style={paragraphStyle}>
                    GitHub: <a style={linkStyle} href="https://github.com/strangecodee" target="_blank" rel="noopener noreferrer">strangecodee</a>
                </p>
            </section>
        </div>
    );
};

export default ExploreAbout;

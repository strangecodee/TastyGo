import React from 'react';
import './Testimonials.css';

const testimonials = [
    {
        name: "Anurag Maurya",
        feedback: "Amazing food ordering experience with smooth UI and blazing fast performance!",
        rating: 5
    },
    {
        name: "Tina Sharma",
        feedback: "Loved the design and seamless navigation. Impressive work!",
        rating: 4
    },
    {
        name: "Sanjana Singh",
        feedback: "Spring Boot backend integration is top-notch. Orders process in seconds!",
        rating: 5
    },
    {
        name: "Rohan Mehta",
        feedback: "CI/CD integration with Jenkins and AWS makes deployment super smooth!",
        rating: 4
    },
    {
        name: "Divya Patel",
        feedback: "The UI/UX is intuitive and responsive. Great for both desktop and mobile users!",
        rating: 5
    },
    {
        name: "Aman Verma",
        feedback: "MongoDB integration is seamless. Love the search and filter features!",
        rating: 4
    }
];

const Testimonials = () => {
    return (
        <div className="container testimonial-section my-5">
            <h2 className="text-center mb-5">What Our Users Say</h2>
            <div className="testimonial-grid">
                {testimonials.map((user, index) => (
                    <div key={index} className="testimonial-card">
                        <h5>{user.name}</h5>
                        <p className="testimonial-feedback">{user.feedback}</p>
                        <div className="stars">
                            {'⭐'.repeat(user.rating)}{'☆'.repeat(5 - user.rating)}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Testimonials;

import React from 'react';
import './LocateUs.css';

const LocateUs = () => {
    return (
        <div className="container locate-section my-5">
            <h2 className="text-center mb-4">📍 Locate Us</h2>

            <div className="locate-content">
                {/* Bareilly Branch */}
                <div className="locate-details">
                    <h4>Bareilly Branch</h4>
                    <p>42 Civil Lines, Bareilly, Uttar Pradesh - 243001</p>
                    <p><strong>Phone:</strong> +91 99123 XXXX</p>
                    <p><strong>Email:</strong> bareilly@tastygo.com</p>
                    <p><strong>Opening Hours:</strong> Mon - Sun | 10:00 AM - 10:00 PM</p>
                </div>

                <div className="locate-map">
                    <iframe
                        title="Bareilly TastyGo Location"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3561.215263291608!2d79.41919227421492!3d28.367035675851236!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39a0076cfd64d1e1%3A0x3dd31f0c9a4c8d9a!2sCivil%20Lines%2C%20Bareilly%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1712398334241!5m2!1sen!2sin"
                        width="100%"
                        height="300"
                        style={{ border: 0, borderRadius: '10px' }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    />
                </div>
            </div>
        </div>
    );
};

export default LocateUs;

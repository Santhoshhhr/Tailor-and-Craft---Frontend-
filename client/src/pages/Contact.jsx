import React, { useState } from 'react';
import { Phone, Mail, MapPin, Send } from 'lucide-react';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // In a real app, this would send data to backend
        console.log('Form submitted:', formData);
        alert('Thank you! We will contact you shortly.');
        setFormData({ name: '', phone: '', message: '' });
    };

    return (
        <div className="contact-page">
            <div className="page-header">
                <div className="container">
                    <h1>Get in Touch</h1>
                    <p>We'd love to hear from you. Book an appointment or ask a question.</p>
                </div>
            </div>

            <div className="container section">
                <div className="grid grid-2">
                    <div className="contact-info">
                        <h2>Contact Information</h2>
                        <div className="info-item">
                            <Phone size={24} color="var(--color-primary)" />
                            <div>
                                <h3>Phone / WhatsApp</h3>
                                <p>+91 98765 43210</p>
                            </div>
                        </div>
                        <div className="info-item">
                            <Mail size={24} color="var(--color-primary)" />
                            <div>
                                <h3>Email</h3>
                                <p>hello@tailorcraft.com</p>
                            </div>
                        </div>
                        <div className="info-item">
                            <MapPin size={24} color="var(--color-primary)" />
                            <div>
                                <h3>Location</h3>
                                <p>123, Creative Lane, Art City, State - 560001</p>
                            </div>
                        </div>

                        <div className="map-placeholder">
                            <p>Map View Placeholder</p>
                        </div>
                    </div>

                    <div className="contact-form-wrapper">
                        <h2>Send a Message</h2>
                        <form onSubmit={handleSubmit} className="contact-form">
                            <div className="form-group">
                                <label htmlFor="name">Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="phone">Phone Number</label>
                                <input
                                    type="tel"
                                    id="phone"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="message">Message</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows="4"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                ></textarea>
                            </div>
                            <button type="submit" className="btn btn-primary">
                                Send Message <Send size={16} style={{ marginLeft: '5px' }} />
                            </button>
                        </form>
                    </div>
                </div>
            </div>

            <style>{`
        .page-header {
          background-color: var(--color-accent);
          padding: 3rem 0;
          text-align: center;
          margin-bottom: 2rem;
        }
        .info-item {
          display: flex;
          gap: 1rem;
          margin-bottom: 2rem;
          align-items: flex-start;
        }
        .info-item h3 {
          font-size: 1.1rem;
          margin-bottom: 0.2rem;
        }
        .map-placeholder {
          background: #eee;
          height: 200px;
          border-radius: var(--border-radius);
          display: flex;
          align-items: center;
          justify-content: center;
          color: #666;
        }
        .contact-form-wrapper {
          background: var(--color-white);
          padding: 2rem;
          border-radius: var(--border-radius);
          box-shadow: var(--shadow-sm);
        }
        .form-group {
          margin-bottom: 1.5rem;
        }
        .form-group label {
          display: block;
          margin-bottom: 0.5rem;
          font-weight: 500;
        }
        .form-group input,
        .form-group textarea {
          width: 100%;
          padding: 0.8rem;
          border: 1px solid #ddd;
          border-radius: var(--border-radius);
          font-family: inherit;
        }
        .form-group input:focus,
        .form-group textarea:focus {
          outline: none;
          border-color: var(--color-primary);
        }
      `}</style>
        </div>
    );
};

export default Contact;

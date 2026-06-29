import React, { useState, useEffect } from 'react';
import { Check, Clock, Phone } from 'lucide-react';

const Services = () => {
    const [services, setServices] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('http://localhost:5000/api/services')
            .then(res => res.json())
            .then(data => {
                setServices(data);
                setLoading(false);
            })
            .catch(err => {
                console.error('Error fetching services:', err);
                setLoading(false);
            });
    }, []);

    if (loading) {
        return <div className="container section text-center">Loading services...</div>;
    }

    return (
        <div className="services-page">
            <div className="page-header">
                <div className="container">
                    <h1>Our Tailoring Services</h1>
                    <p>Expert stitching with perfect fit guarantee</p>
                </div>
            </div>

            <div className="container section">
                <div className="grid grid-3">
                    {services.map(service => (
                        <div key={service.id} className="service-card">
                            <div className="service-image">
                                <img src={service.image} alt={service.title} />
                            </div>
                            <div className="service-content">
                                <h3>{service.title}</h3>
                                <p>{service.description}</p>
                                <div className="service-price">{service.price}</div>
                                <a
                                    href={`https://wa.me/919876543210?text=I'm interested in ${service.title}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn btn-primary btn-block"
                                >
                                    Book Now
                                </a>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="process-section section">
                    <h2 className="text-center">How It Works</h2>
                    <div className="grid grid-3 text-center">
                        <div className="process-step">
                            <div className="step-icon">1</div>
                            <h3>Contact Us</h3>
                            <p>WhatsApp or call us to discuss your requirements.</p>
                        </div>
                        <div className="process-step">
                            <div className="step-icon">2</div>
                            <h3>Measurements</h3>
                            <p>Visit us or share measurements via video call.</p>
                        </div>
                        <div className="process-step">
                            <div className="step-icon">3</div>
                            <h3>Delivery</h3>
                            <p>Get your perfectly stitched outfit on time.</p>
                        </div>
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
        .service-card {
          background: var(--color-white);
          border-radius: var(--border-radius);
          overflow: hidden;
          box-shadow: var(--shadow-sm);
          transition: transform 0.3s ease;
          display: flex;
          flex-direction: column;
        }
        .service-card:hover {
          transform: translateY(-5px);
          box-shadow: var(--shadow-md);
        }
        .service-image img {
          width: 100%;
          height: 200px;
          object-fit: cover;
        }
        .service-content {
          padding: 1.5rem;
          flex: 1;
          display: flex;
          flex-direction: column;
        }
        .service-content h3 {
          margin-bottom: 0.5rem;
          color: var(--color-primary);
        }
        .service-content p {
          color: var(--color-text-light);
          margin-bottom: 1rem;
          flex: 1;
        }
        .service-price {
          font-weight: 700;
          color: var(--color-text);
          font-size: 1.1rem;
          margin-bottom: 1rem;
        }
        .btn-block {
          display: block;
          text-align: center;
        }
        .process-step {
          padding: 1rem;
        }
        .step-icon {
          width: 50px;
          height: 50px;
          background: var(--color-secondary);
          color: var(--color-text);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 700;
          font-size: 1.2rem;
          margin: 0 auto 1rem;
        }
      `}</style>
        </div>
    );
};

export default Services;

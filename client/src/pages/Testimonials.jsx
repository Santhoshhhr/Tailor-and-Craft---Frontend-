import React, { useState, useEffect } from 'react';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
    const [testimonials, setTestimonials] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('http://localhost:5000/api/testimonials')
            .then(res => res.json())
            .then(data => {
                setTestimonials(data);
                setLoading(false);
            })
            .catch(err => {
                console.error('Error fetching testimonials:', err);
                setLoading(false);
            });
    }, []);

    if (loading) {
        return <div className="container section text-center">Loading reviews...</div>;
    }

    return (
        <div className="testimonials-page">
            <div className="page-header">
                <div className="container">
                    <h1>Customer Love</h1>
                    <p>See what our happy customers have to say</p>
                </div>
            </div>

            <div className="container section">
                <div className="grid grid-3">
                    {testimonials.map(review => (
                        <div key={review.id} className="review-card">
                            <div className="quote-icon">
                                <Quote size={32} color="var(--color-primary)" />
                            </div>
                            <p className="review-text">"{review.text}"</p>
                            <div className="review-footer">
                                <div className="stars">
                                    {[...Array(review.rating)].map((_, i) => (
                                        <Star key={i} size={16} fill="gold" color="gold" />
                                    ))}
                                </div>
                                <h4 className="review-author">- {review.name}</h4>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <style>{`
        .page-header {
          background-color: var(--color-secondary);
          padding: 3rem 0;
          text-align: center;
          margin-bottom: 2rem;
        }
        .review-card {
          background: var(--color-white);
          padding: 2rem;
          border-radius: var(--border-radius);
          box-shadow: var(--shadow-sm);
          position: relative;
          display: flex;
          flex-direction: column;
        }
        .quote-icon {
          margin-bottom: 1rem;
          opacity: 0.5;
        }
        .review-text {
          font-style: italic;
          color: var(--color-text);
          margin-bottom: 1.5rem;
          flex: 1;
        }
        .review-footer {
          border-top: 1px solid #eee;
          padding-top: 1rem;
        }
        .stars {
          display: flex;
          gap: 0.2rem;
          margin-bottom: 0.5rem;
        }
        .review-author {
          color: var(--color-primary);
          font-weight: 600;
        }
      `}</style>
        </div>
    );
};

export default Testimonials;

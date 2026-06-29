import React from 'react';
import { Heart, Star, Clock } from 'lucide-react';

const About = () => {
    return (
        <div className="about-page">
            <div className="container section">
                <div className="grid grid-2 align-center">
                    <div className="about-image">
                        <img src="https://placehold.co/600x600/e2c2b3/333?text=My+Workspace" alt="Tailoring Workspace" />
                    </div>
                    <div className="about-content">
                        <h1>About Me</h1>
                        <p className="lead">
                            Hi! I'm [Your Name], the creative hands behind Tailor & Craft.
                        </p>
                        <p>
                            I have always been passionate about stitching and creating beautiful things.
                            What started as a hobby has now grown into a small home-based business where
                            I get to help people look their best and find unique gifts for their loved ones.
                        </p>
                        <p>
                            Every stitch is made with care, and every craft item is designed with love.
                            I believe in quality, punctuality, and customer satisfaction.
                        </p>

                        <div className="features-list">
                            <div className="feature-item">
                                <Heart size={24} color="var(--color-primary)" />
                                <span>Made with Love</span>
                            </div>
                            <div className="feature-item">
                                <Star size={24} color="var(--color-primary)" />
                                <span>Quality Assurance</span>
                            </div>
                            <div className="feature-item">
                                <Clock size={24} color="var(--color-primary)" />
                                <span>On-Time Delivery</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <style>{`
        .align-center {
          align-items: center;
        }
        .about-image img {
          width: 100%;
          border-radius: var(--border-radius);
          box-shadow: var(--shadow-md);
        }
        .about-content h1 {
          font-size: 2.5rem;
          margin-bottom: 1.5rem;
        }
        .lead {
          font-size: 1.2rem;
          color: var(--color-primary);
          font-weight: 500;
          margin-bottom: 1rem;
        }
        .about-content p {
          margin-bottom: 1rem;
          color: var(--color-text-light);
        }
        .features-list {
          margin-top: 2rem;
          display: flex;
          gap: 2rem;
        }
        .feature-item {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.5rem;
          font-weight: 600;
          font-size: 0.9rem;
        }
        @media (max-width: 768px) {
          .features-list {
            flex-direction: column;
            gap: 1rem;
            align-items: flex-start;
          }
          .feature-item {
            flex-direction: row;
          }
        }
      `}</style>
        </div>
    );
};

export default About;

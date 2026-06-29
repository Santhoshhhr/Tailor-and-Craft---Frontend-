import React from 'react';
import { Link } from 'react-router-dom';
import { Scissors, Gift, ArrowRight } from 'lucide-react';

const Home = () => {
    return (
        <div className="home-page">
            {/* Hero Section */}
            <section className="hero">
                <div className="container hero-content">
                    <h1>Custom Tailoring & <br />Handmade Art</h1>
                    <p>
                        Experience the joy of perfectly fitted clothes and unique, handcrafted gifts.
                        Made with love, just for you.
                    </p>
                    <div className="hero-buttons">
                        <Link to="/services" className="btn btn-primary">Book Stitching</Link>
                        <Link to="/art-crafts" className="btn btn-secondary">Explore Crafts</Link>
                    </div>
                </div>
            </section>

            {/* Highlights Section */}
            <section className="section container">
                <div className="grid grid-2">
                    <div className="highlight-card">
                        <div className="icon-wrapper">
                            <Scissors size={40} color="var(--color-primary)" />
                        </div>
                        <h2>Made-to-Measure Stitching</h2>
                        <p>
                            From blouses to dresses, we stitch everything to your perfect measurements.
                            Expert craftsmanship with attention to detail.
                        </p>
                        <Link to="/services" className="link-arrow">
                            View Services <ArrowRight size={16} />
                        </Link>
                    </div>

                    <div className="highlight-card">
                        <div className="icon-wrapper">
                            <Gift size={40} color="var(--color-primary)" />
                        </div>
                        <h2>Unique Handmade Gifts</h2>
                        <p>
                            Discover our collection of handmade jewelry, fabric flowers, and personalized
                            gift hampers for your loved ones.
                        </p>
                        <Link to="/art-crafts" className="link-arrow">
                            Shop Crafts <ArrowRight size={16} />
                        </Link>
                    </div>
                </div>
            </section>

            {/* Featured Work / Gallery Preview could go here */}

            <style>{`
        .hero {
          background-color: var(--color-accent);
          padding: 4rem 0;
          text-align: center;
          border-radius: 0 0 50% 50% / 4rem;
        }
        .hero h1 {
          font-size: 3rem;
          margin-bottom: 1.5rem;
          line-height: 1.2;
        }
        .hero p {
          font-size: 1.2rem;
          max-width: 600px;
          margin: 0 auto 2rem;
          color: var(--color-text-light);
        }
        .hero-buttons {
          display: flex;
          gap: 1rem;
          justify-content: center;
        }
        .highlight-card {
          background: var(--color-white);
          padding: 2rem;
          border-radius: var(--border-radius);
          box-shadow: var(--shadow-sm);
          text-align: center;
          transition: transform 0.3s ease;
        }
        .highlight-card:hover {
          transform: translateY(-5px);
          box-shadow: var(--shadow-md);
        }
        .icon-wrapper {
          background: var(--color-accent);
          width: 80px;
          height: 80px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 1.5rem;
        }
        .link-arrow {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          color: var(--color-primary);
          font-weight: 600;
          margin-top: 1rem;
        }
        .link-arrow:hover {
          gap: 0.8rem;
        }
        @media (max-width: 768px) {
          .hero h1 {
            font-size: 2rem;
          }
          .hero {
            border-radius: 0 0 2rem 2rem;
          }
        }
      `}</style>
        </div>
    );
};

export default Home;

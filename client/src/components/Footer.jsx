import React from 'react';
import { Facebook, Instagram, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="grid grid-3">
                    <div className="footer-section">
                        <h3>Tailor & Craft</h3>
                        <p>Custom tailoring and unique handmade gifts made with love and care.</p>
                        <div className="social-icons">
                            <a href="#" className="social-icon"><Instagram size={20} /></a>
                            <a href="#" className="social-icon"><Facebook size={20} /></a>
                        </div>
                    </div>

                    <div className="footer-section">
                        <h3>Quick Links</h3>
                        <ul className="footer-links">
                            <li><a href="/">Home</a></li>
                            <li><a href="/services">Services</a></li>
                            <li><a href="/art-crafts">Art & Crafts</a></li>
                            <li><a href="/contact">Contact</a></li>
                        </ul>
                    </div>

                    <div className="footer-section">
                        <h3>Contact Us</h3>
                        <ul className="footer-contact">
                            <li><Phone size={16} /> +91 98765 43210</li>
                            <li><Mail size={16} /> hello@tailorcraft.com</li>
                            <li><MapPin size={16} /> 123, Creative Lane, Art City</li>
                        </ul>
                    </div>
                </div>
                <div className="footer-bottom">
                    <p>&copy; {new Date().getFullYear()} Tailor & Craft. All rights reserved.</p>
                </div>
            </div>

            <style>{`
        .footer {
          background-color: var(--color-primary);
          color: var(--color-white);
          padding: 3rem 0 1rem;
          margin-top: auto;
        }
        .footer h3 {
          color: var(--color-white);
          margin-bottom: 1rem;
        }
        .footer p {
          opacity: 0.9;
        }
        .social-icons {
          display: flex;
          gap: 1rem;
          margin-top: 1rem;
        }
        .social-icon {
          color: var(--color-white);
          opacity: 0.8;
          transition: opacity 0.3s;
        }
        .social-icon:hover {
          opacity: 1;
        }
        .footer-links, .footer-contact {
          list-style: none;
        }
        .footer-links li, .footer-contact li {
          margin-bottom: 0.5rem;
          opacity: 0.9;
        }
        .footer-contact li {
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }
        .footer-bottom {
          text-align: center;
          margin-top: 2rem;
          padding-top: 1rem;
          border-top: 1px solid rgba(255,255,255,0.1);
          font-size: 0.9rem;
          opacity: 0.8;
        }
      `}</style>
        </footer>
    );
};

export default Footer;

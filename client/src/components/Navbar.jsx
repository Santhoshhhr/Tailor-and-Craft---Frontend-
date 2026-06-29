import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ShoppingBag } from 'lucide-react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();

    const toggleMenu = () => setIsOpen(!isOpen);

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'Services', path: '/services' },
        { name: 'Art & Crafts', path: '/art-crafts' },
        { name: 'Gallery', path: '/gallery' },
        { name: 'About', path: '/about' },
        { name: 'Contact', path: '/contact' },
    ];

    const isActive = (path) => location.pathname === path;

    return (
        <nav className="navbar">
            <div className="container navbar-container">
                <Link to="/" className="navbar-logo">
                    Tailor & Craft
                </Link>

                <div className="navbar-desktop">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            to={link.path}
                            className={`nav-link ${isActive(link.path) ? 'active' : ''}`}
                        >
                            {link.name}
                        </Link>
                    ))}
                    <Link to="/shop" className="btn btn-primary btn-sm">
                        <ShoppingBag size={18} style={{ marginRight: '5px' }} /> Shop
                    </Link>
                </div>

                <div className="navbar-mobile-toggle" onClick={toggleMenu}>
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </div>

                {isOpen && (
                    <div className="navbar-mobile-menu">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                to={link.path}
                                className={`nav-link-mobile ${isActive(link.path) ? 'active' : ''}`}
                                onClick={toggleMenu}
                            >
                                {link.name}
                            </Link>
                        ))}
                        <Link to="/shop" className="nav-link-mobile" onClick={toggleMenu}>
                            Shop
                        </Link>
                    </div>
                )}
            </div>

            <style>{`
        .navbar {
          background-color: var(--color-white);
          box-shadow: var(--shadow-sm);
          position: sticky;
          top: 0;
          z-index: 1000;
          padding: 1rem 0;
        }
        .navbar-container {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .navbar-logo {
          font-family: var(--font-heading);
          font-size: 1.5rem;
          font-weight: 700;
          color: var(--color-primary);
        }
        .navbar-desktop {
          display: none;
          align-items: center;
          gap: 2rem;
        }
        .nav-link {
          font-weight: 500;
          transition: color 0.3s;
        }
        .nav-link:hover, .nav-link.active {
          color: var(--color-primary);
        }
        .navbar-mobile-toggle {
          display: block;
          cursor: pointer;
          color: var(--color-text);
        }
        .navbar-mobile-menu {
          position: absolute;
          top: 100%;
          left: 0;
          width: 100%;
          background-color: var(--color-white);
          padding: 1rem;
          box-shadow: var(--shadow-md);
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }
        .nav-link-mobile {
          font-size: 1.1rem;
          padding: 0.5rem 0;
          border-bottom: 1px solid #eee;
        }
        @media (min-width: 768px) {
          .navbar-desktop {
            display: flex;
          }
          .navbar-mobile-toggle {
            display: none;
          }
        }
      `}</style>
        </nav>
    );
};

export default Navbar;

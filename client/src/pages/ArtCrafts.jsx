import React, { useState, useEffect } from 'react';
import { ShoppingBag } from 'lucide-react';

const ArtCrafts = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('http://localhost:5000/api/products')
            .then(res => res.json())
            .then(data => {
                setProducts(data);
                setLoading(false);
            })
            .catch(err => {
                console.error('Error fetching products:', err);
                setLoading(false);
            });
    }, []);

    if (loading) {
        return <div className="container section text-center">Loading products...</div>;
    }

    return (
        <div className="art-crafts-page">
            <div className="page-header">
                <div className="container">
                    <h1>Handmade Art & Crafts</h1>
                    <p>Unique gifts and decor items made with love</p>
                </div>
            </div>

            <div className="container section">
                <div className="grid grid-3">
                    {products.map(product => (
                        <div key={product.id} className="product-card">
                            <div className="product-image">
                                <img src={product.image} alt={product.title} />
                                <div className="product-overlay">
                                    <a
                                        href={`https://wa.me/919876543210?text=I'm interested in buying ${product.title}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="btn btn-white"
                                    >
                                        Buy Now
                                    </a>
                                </div>
                            </div>
                            <div className="product-content">
                                <h3>{product.title}</h3>
                                <p>{product.description}</p>
                                <div className="product-footer">
                                    <span className="price">{product.price}</span>
                                    <button className="btn-icon">
                                        <ShoppingBag size={20} />
                                    </button>
                                </div>
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
        .product-card {
          background: var(--color-white);
          border-radius: var(--border-radius);
          overflow: hidden;
          box-shadow: var(--shadow-sm);
          transition: transform 0.3s ease;
        }
        .product-card:hover {
          transform: translateY(-5px);
          box-shadow: var(--shadow-md);
        }
        .product-image {
          position: relative;
          height: 250px;
          overflow: hidden;
        }
        .product-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.5s ease;
        }
        .product-card:hover .product-image img {
          transform: scale(1.1);
        }
        .product-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0,0,0,0.3);
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 0;
          transition: opacity 0.3s ease;
        }
        .product-card:hover .product-overlay {
          opacity: 1;
        }
        .btn-white {
          background: white;
          color: var(--color-text);
          padding: 0.5rem 1.5rem;
          border-radius: 20px;
          font-weight: 600;
        }
        .btn-white:hover {
          background: var(--color-primary);
          color: white;
        }
        .product-content {
          padding: 1.5rem;
        }
        .product-content h3 {
          font-size: 1.2rem;
          margin-bottom: 0.5rem;
        }
        .product-content p {
          font-size: 0.9rem;
          color: var(--color-text-light);
          margin-bottom: 1rem;
        }
        .product-footer {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-top: auto;
        }
        .price {
          font-weight: 700;
          color: var(--color-primary);
          font-size: 1.1rem;
        }
        .btn-icon {
          background: none;
          border: none;
          color: var(--color-text-light);
          transition: color 0.3s;
        }
        .btn-icon:hover {
          color: var(--color-primary);
        }
      `}</style>
        </div>
    );
};

export default ArtCrafts;

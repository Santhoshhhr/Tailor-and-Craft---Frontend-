import React from 'react';
import { ShoppingBag } from 'lucide-react';

const Shop = () => {
    const shopItems = [
        { id: 1, name: 'Simple Kurti Stitching', price: '₹350', image: 'https://placehold.co/300x300/e2c2b3/333?text=Kurti' },
        { id: 2, name: 'Blouse Stitching', price: '₹500', image: 'https://placehold.co/300x300/f3d5d5/333?text=Blouse' },
        { id: 3, name: 'Handmade Earrings', price: '₹150', image: 'https://placehold.co/300x300/e0f2f1/333?text=Earrings' },
        { id: 4, name: 'Fabric Flower Set', price: '₹200', image: 'https://placehold.co/300x300/e2c2b3/333?text=Flowers' },
    ];

    return (
        <div className="shop-page">
            <div className="page-header">
                <div className="container">
                    <h1>Shop Online</h1>
                    <p>Order stitching packages or buy ready-made crafts</p>
                </div>
            </div>

            <div className="container section">
                <div className="grid grid-4">
                    {shopItems.map(item => (
                        <div key={item.id} className="shop-item">
                            <div className="shop-image">
                                <img src={item.image} alt={item.name} />
                            </div>
                            <div className="shop-content">
                                <h3>{item.name}</h3>
                                <div className="shop-footer">
                                    <span className="price">{item.price}</span>
                                    <button className="btn btn-primary btn-sm">
                                        Add to Cart
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <style>{`
        .page-header {
          background-color: var(--color-accent);
          padding: 3rem 0;
          text-align: center;
          margin-bottom: 2rem;
        }
        .shop-item {
          background: var(--color-white);
          border-radius: var(--border-radius);
          overflow: hidden;
          box-shadow: var(--shadow-sm);
          transition: transform 0.3s ease;
        }
        .shop-item:hover {
          transform: translateY(-5px);
          box-shadow: var(--shadow-md);
        }
        .shop-image img {
          width: 100%;
          height: 200px;
          object-fit: cover;
        }
        .shop-content {
          padding: 1rem;
        }
        .shop-content h3 {
          font-size: 1rem;
          margin-bottom: 0.5rem;
        }
        .shop-footer {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-top: 1rem;
        }
        .btn-sm {
          padding: 0.5rem 1rem;
          font-size: 0.8rem;
        }
      `}</style>
        </div>
    );
};

export default Shop;

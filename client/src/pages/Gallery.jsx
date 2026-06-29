import React from 'react';

const Gallery = () => {
    const images = [
        'https://placehold.co/400x500/e2c2b3/333?text=Custom+Blouse',
        'https://placehold.co/400x500/f3d5d5/333?text=Embroidery',
        'https://placehold.co/400x500/e0f2f1/333?text=Kids+Dress',
        'https://placehold.co/400x500/e2c2b3/333?text=Alteration',
        'https://placehold.co/400x500/f3d5d5/333?text=Jewelry',
        'https://placehold.co/400x500/e0f2f1/333?text=Saree+Work',
    ];

    return (
        <div className="gallery-page">
            <div className="page-header">
                <div className="container">
                    <h1>Our Work Gallery</h1>
                    <p>A glimpse of our recent creations and happy customers</p>
                </div>
            </div>

            <div className="container section">
                <div className="gallery-grid">
                    {images.map((img, index) => (
                        <div key={index} className="gallery-item">
                            <img src={img} alt={`Gallery item ${index + 1}`} />
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
        .gallery-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
          gap: 1rem;
        }
        .gallery-item {
          border-radius: var(--border-radius);
          overflow: hidden;
          box-shadow: var(--shadow-sm);
          transition: transform 0.3s ease;
        }
        .gallery-item:hover {
          transform: scale(1.02);
          box-shadow: var(--shadow-md);
        }
        .gallery-item img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }
      `}</style>
        </div>
    );
};

export default Gallery;

import React from 'react';
import { MessageCircle } from 'lucide-react';

const WhatsAppButton = () => {
    const phoneNumber = '919876543210'; // Replace with actual number
    const message = 'Hello! I would like to know more about your services.';
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    return (
        <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="whatsapp-float"
            aria-label="Chat on WhatsApp"
        >
            <MessageCircle size={32} />
            <style>{`
        .whatsapp-float {
          position: fixed;
          bottom: 2rem;
          right: 2rem;
          background-color: #25D366;
          color: white;
          width: 60px;
          height: 60px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 4px 10px rgba(0,0,0,0.3);
          transition: all 0.3s ease;
          z-index: 1000;
        }
        .whatsapp-float:hover {
          transform: scale(1.1);
          background-color: #128C7E;
        }
      `}</style>
        </a>
    );
};

export default WhatsAppButton;

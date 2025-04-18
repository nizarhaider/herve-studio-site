import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';

interface WhatsAppButtonProps {
    phoneNumber: string; 
    message?: string;
    label?: string;
}

const WhatsAppButton: React.FC<WhatsAppButtonProps> = ({ phoneNumber, message = '', label = 'Chat on WhatsApp' }) => {
    const encodedMessage = encodeURIComponent(message);
    const url = `https://wa.me/${phoneNumber.replace(/\D/g, '')}?text=${encodedMessage}`;

    return (
        <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-4 py-2 bg-green-500 hover:bg-green-600 text-white rounded-xl text-sm font-medium shadow-md transition-colors"
        >
            <FaWhatsapp className="mr-2 text-lg" />
            {label}
        </a>
    );
};

export default WhatsAppButton;

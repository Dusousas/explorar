'use client';

import { FaWhatsapp } from 'react-icons/fa';

export default function Wpp() {
  const handleWhatsAppClick = () => {
    // Substitua pelo seu número no formato internacional (sem + e sem espaços)
    const phoneNumber = '5511999999999'; // Exemplo: 55 11 99999-9999
    const message = 'Olá! Gostaria de saber mais informações.';
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <button
      onClick={handleWhatsAppClick}
      className="fixed bottom-6 cursor-pointer right-6 bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-lg hover:shadow-xl transition-all duration-300 z-50"
      aria-label="Contato WhatsApp"
    >
      <FaWhatsapp className="text-4xl" />
    </button>
  );
}
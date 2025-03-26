'use client';

import React, { useState, useEffect } from 'react';

const HoliOfferPopup: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Show popup after 3 seconds
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const closePopup = () => {
    setIsOpen(false);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText('HOLI2025');
    alert('Coupon code copied to clipboard!');
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-md relative p-8 max-w-md w-full text-center">
        <button
          onClick={closePopup}
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div className="mb-4 flex justify-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-[#24cca6]" fill="currentColor" viewBox="0 0 24 24">
            <path d="M5 12H3V4a1 1 0 0 1 1-1h6v2H5v7zm7-9v2h9v7h2V4a1 1 0 0 0-1-1h-10zm-5 9a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm12 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-12 7v-2H3v7a1 1 0 0 0 1 1h6v-2H5v-4zm14 0v4h-9v2h10a1 1 0 0 0 1-1v-7h-2v2z" />
          </svg>
        </div>

        <h3 className="text-2xl font-bold text-black mb-1">Holi Dhamaka Offer</h3>
        <p className="text-gray-600 mb-4 text-sm">Celebrate this festival of colors with exciting discounts!</p>

        <div className="text-xs font-medium text-gray-500 mb-2">Get Flat 20% OFF on all courses!</div>

        <div onClick={copyToClipboard} className="cursor-pointer">
          <div className="text-gray-400 text-xs mb-1">Click to Copy</div>
          <div className="border border-gray-300 rounded-md px-4 py-3 mb-4 mx-auto max-w-[200px]">
            <div className="text-black font-bold tracking-wider">HOLI2025</div>
          </div>
        </div>

        <button
          onClick={closePopup}
          className="bg-[#24cca6] text-black px-6 py-2 rounded-md w-full"
        >
          Redeem Now
        </button>

        <div className="absolute -z-10 left-0 bottom-0">
          <div className="w-16 h-16 bg-blue-500 rounded-full opacity-50"></div>
        </div>
        <div className="absolute -z-10 right-0 bottom-0">
          <div className="w-16 h-16 bg-emerald-500 rounded-full opacity-50"></div>
        </div>
      </div>
    </div>
  );
};

export default HoliOfferPopup;

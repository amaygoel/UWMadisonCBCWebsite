import React, { useState, useEffect } from 'react';

const LoadingOverlay = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 2000); // Show for 2 seconds

    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 bg-white z-50 flex items-center justify-center transition-opacity duration-500">
      <div className="flex items-center space-x-4">
        <span className="text-4xl md:text-6xl font-bold" style={{ color: '#CD7F5C' }}>Claude</span>
        <img 
          src="/Claude_AI_symbol.svg.png" 
          alt="Claude Logo" 
          className="w-12 h-12 md:w-16 md:h-16 animate-slow-spin"
        />
        <span className="text-4xl md:text-6xl font-bold" style={{ color: '#CD7F5C' }}>UW-Madison</span>
      </div>
    </div>
  );
};

export default LoadingOverlay;
import React from 'react';

const Hero = () => {
  return (
    // <section className="py-24 px-8 sm:px-6 relative overflow-hidden" style={{ background: 'linear-gradient(to bottom right, #CD7F5C, #B8693F)' }}>
    <section className="py-24 px-8 sm:px-6 relative overflow-hidden" style={{ background: 'linear-gradient(to bottom right, #c5050c, #B8693F)' }}>
      {/* Geometric shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-32 h-32 border-2 border-white/20 rounded-full"></div>
        <div className="absolute top-40 right-32 w-16 h-16 border-2 border-white/20 rotate-45"></div>
        <div className="absolute bottom-32 left-1/4 w-24 h-24 border-2 border-white/20 rotate-12"></div>
        <div className="absolute top-1/3 right-20 w-40 h-40 border border-white/10 rounded-full"></div>
      </div>
      
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <h1 className="text-5xl md:text-6xl font-bold text-white mb-8 leading-tight">
          Join the UW-Madison Claude Builder Club
        </h1>
        
        <p className="text-xl md:text-2xl text-white/90 mb-12 leading-relaxed">
          Everyone can build with AI. Learn, connect, and grow together at<br />
          UW-Madison.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a 
            href="https://docs.google.com/forms/d/e/1FAIpQLScP9LuFwiHEx806tv9zczjCIEzqO1Zjb-FjB4XWoa6BS1NNKQ/viewform"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-[#CD7F5C] px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-50 transition-colors inline-block text-center"
          >
            Join the Club
          </a>
          <a 
            href="mailto:claudeatuw@gmail.com"
            className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white/10 transition-colors inline-block text-center"
          >
            Contact Us
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
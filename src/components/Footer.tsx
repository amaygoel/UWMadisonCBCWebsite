import React from 'react';
import { Brain, Mail, MessageCircle, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#CD7F5C] text-white py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Logo and Description */}
          <div className="md:col-span-3">
            <div className="flex items-center space-x-3 mb-4">
              <img 
                src="/Claude_AI_symbol.svg.png" 
                alt="Claude Logo" 
                className="w-10 h-10 filter brightness-0 invert"
              />
              <div>
                <h3 className="text-xl font-bold">Claude Builder Club</h3>
                <p className="text-sm text-gray-300">UW-Madison</p>
              </div>
            </div>
            <p className="text-gray-300 leading-relaxed">
              UW-Madison's AI development community, empowering students to build innovative solutions using Claude and cutting-edge AI technologies.
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-2 text-gray-300">
                <Mail className="w-4 h-4" />
                <span className="text-sm">claudeatuw@gmail.com</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-300">
                <MessageCircle className="w-4 h-4" />
                <span className="text-sm">TBD</span>
              </div>
            </div>
          </div>
        </div>

        {/* Social Links */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex space-x-6 mb-4 md:mb-0">
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLScP9LuFwiHEx806tv9zczjCIEzqO1Zjb-FjB4XWoa6BS1NNKQ/viewform"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-[#B8693F] rounded-lg hover:bg-blue-600 transition-colors"
              >
                <MessageCircle className="w-5 h-5" />
              </a>
              <a
                href="https://instagram.com/claudeatduke"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-[#B8693F] rounded-lg hover:bg-pink-600 transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="mailto:claudeatuw@gmail.com"
                className="p-3 bg-[#B8693F] rounded-lg hover:bg-purple-600 transition-colors"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
            
            <div className="text-center md:text-right">
              <p className="text-gray-300 text-sm">
                © 2025 Claude Builder Club at UW-Madison. All rights reserved.
              </p>
              <p className="text-gray-300 text-xs mt-1">
                Building the future, one AI project at a time.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

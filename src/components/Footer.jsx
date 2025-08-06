import React from 'react';
import { Github, Linkedin, Twitter, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-blue-950 border-t border-blue-800/50">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-bold text-white mb-4">OmmDev</h3>
            <p className="text-gray-300 text-sm">
              Full Stack Developer passionate about creating innovative solutions and building
              amazing digital experiences.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
            <div className="space-y-2">
              <a href="/" className="block text-gray-300 hover:text-blue-400 transition-colors text-sm">
                Home
              </a>
              <a href="/about" className="block text-gray-300 hover:text-blue-400 transition-colors text-sm">
                About
              </a>
              <a href="/projects" className="block text-gray-300 hover:text-blue-400 transition-colors text-sm">
                Projects
              </a>
              <a href="/contact" className="block text-gray-300 hover:text-blue-400 transition-colors text-sm">
                Contact
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Connect</h4>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-300 hover:text-blue-400 transition-colors"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-blue-400 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-blue-400 transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a>
              <a
                href="mailto:ommdev04@gmail.com"
                className="text-gray-300 hover:text-blue-400 transition-colors"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-blue-800/50">
          <p className="text-center text-gray-400 text-sm">
            © {new Date().getFullYear()} OmmDev. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import React from 'react';
import { Code, Heart, Coffee, Zap } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">About Me</h1>
          <p className="text-xl text-gray-300">
            Passionate developer who loves creating amazing digital experiences
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <img
              src="https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="Developer workspace"
              className="rounded-lg shadow-2xl"
            />
          </div>
          
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-white">Hello, I'm OmmDev!</h2>
            <p className="text-gray-300 leading-relaxed">
              I'm a passionate full-stack developer who fell in love with technology at an early age.
              My journey into software engineering began with curiosity and has evolved into a 
              deep passion for creating innovative solutions that make a difference.
            </p>
            <p className="text-gray-300 leading-relaxed">
              I believe that great software is not just about writing code – it's about understanding
              people's needs and crafting experiences that truly matter. Every project I work on
              is an opportunity to learn something new and push the boundaries of what's possible.
            </p>
            <p className="text-gray-300 leading-relaxed">
              When I'm not coding, you'll find me exploring new technologies, contributing to 
              open-source projects, or sharing knowledge with the developer community. I'm always
              excited to collaborate on projects that challenge me to grow and create impact.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          <div className="text-center p-6 bg-blue-900/50 rounded-lg">
            <Code size={48} className="mx-auto mb-4 text-blue-400" />
            <h3 className="text-xl font-semibold mb-2">Clean Code</h3>
            <p className="text-gray-300">Writing maintainable, efficient, and scalable code</p>
          </div>
          
          <div className="text-center p-6 bg-blue-900/50 rounded-lg">
            <Heart size={48} className="mx-auto mb-4 text-red-400" />
            <h3 className="text-xl font-semibold mb-2">Passionate</h3>
            <p className="text-gray-300">Love what I do and always eager to learn more</p>
          </div>
          
          <div className="text-center p-6 bg-blue-900/50 rounded-lg">
            <Coffee size={48} className="mx-auto mb-4 text-yellow-400" />
            <h3 className="text-xl font-semibold mb-2">Dedicated</h3>
            <p className="text-gray-300">Committed to delivering exceptional results</p>
          </div>
          
          <div className="text-center p-6 bg-blue-900/50 rounded-lg">
            <Zap size={48} className="mx-auto mb-4 text-green-400" />
            <h3 className="text-xl font-semibold mb-2">Innovative</h3>
            <p className="text-gray-300">Always looking for creative solutions</p>
          </div>
        </div>

        <div className="bg-blue-900/30 rounded-lg p-8">
          <h2 className="text-2xl font-bold text-white mb-6 text-center">My Journey</h2>
          <div className="space-y-6">
            <div className="border-l-4 border-blue-400 pl-6">
              <h3 className="text-lg font-semibold text-white">Started Programming</h3>
              <p className="text-blue-400">2018</p>
              <p className="text-gray-300">
                Began my journey with HTML, CSS, and JavaScript. Built my first website and 
                fell in love with the power of code.
              </p>
            </div>
            
            <div className="border-l-4 border-blue-400 pl-6">
              <h3 className="text-lg font-semibold text-white">Full-Stack Development</h3>
              <p className="text-blue-400">2020</p>
              <p className="text-gray-300">
                Expanded into backend development with Node.js and databases. Started building
                complete web applications from scratch.
              </p>
            </div>
            
            <div className="border-l-4 border-blue-400 pl-6">
              <h3 className="text-lg font-semibold text-white">Professional Developer</h3>
              <p className="text-blue-400">2022</p>
              <p className="text-gray-300">
                Began working with clients and companies, delivering high-quality solutions
                and gaining valuable real-world experience.
              </p>
            </div>
            
            <div className="border-l-4 border-blue-400 pl-6">
              <h3 className="text-lg font-semibold text-white">Continuous Learning</h3>
              <p className="text-blue-400">Present</p>
              <p className="text-gray-300">
                Always learning new technologies and improving my skills. Currently exploring
                AI, machine learning, and cloud architecture.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
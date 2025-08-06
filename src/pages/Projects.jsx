import React from 'react';
import { ExternalLink, Github } from 'lucide-react';
import caluclator from "../assets/calculator-screen.png"
import crud from "../assets/Crud-Screen.png"
import tasklist from "../assets/taskList-Screen.png"
import word_counter from "../assets/word-counter-Screen.png"
import note_take from "../assets/Note-Screen.png"
import guess_flag from "../assets/Guess-flag-Screen.png"

const Projects = () => {
  const projects = [
    {
      title: 'Calculator App',
      description: 'Afully Functional calculator of basic math operation of BODMAS ',
      image: caluclator,
      tech: ['Html','Css', 'JavaScript'],
      github: 'https://github.com/omm-coder/calculator_project.git',
      demo: '#'
    },
    {
      title: 'Task Management App',
      description: 'Collaborative task management application with real-time updates and team features.',
      image: tasklist,
      tech: ['Html','Css', 'JavaScript'],
      github: 'https://github.com/omm-coder/task_manager.git',
      demo: '#'
    },
    {
      title: 'Contact Management',
      description: 'Beautiful weather application with detailed forecasts, maps, and historical data.',
      image: crud,
      tech: ['React', 'Weather API', 'Chart.js', 'Tailwind'],
      github: 'https://github.com/omm-coder/crud_project.git',
      demo: '#'
    },
    {
      title: 'Note Takin App',
      description: 'Analytics dashboard for social media management with data visualization and reporting.',
      image: note_take,
      tech: ['Html','Css', 'JavaScript'],
        github: 'https://github.com/omm-coder/note-taker.git',
      demo: 'https://omm-coder.github.io/note-taker/'
    },
    {
      title: 'Guess Flag App',
      description: 'Discover and save recipes with advanced search filters and meal planning features.',
      image: guess_flag,
      tech: ['Html','Css', 'JavaScript'],
      github: 'https://github.com/omm-coder/guess-flag.git',
      demo: 'https://omm-coder.github.io/guess-flag/'
    },
    {
      title: 'Learning Management System',
      description: 'Complete LMS with course creation, student enrollment, and progress tracking.',
      image: 'https://images.pexels.com/photos/256490/pexels-photo-256490.jpeg?auto=compress&cs=tinysrgb&w=600',
      tech: ['Angular', 'Django', 'PostgreSQL', 'WebRTC'],
      github: '#',
      demo: '#'
    },
    {
      title: 'Real Estate Platform',
      description: 'Property listing and management platform with advanced search and virtual tours.',
      image: 'https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=600',
      tech: ['React', 'Node.js', 'MongoDB', 'Mapbox'],
      github: '#',
      demo: '#'
    },
    {
      title: 'Word Counter',
      description: 'Personal fitness tracking app with workout plans, progress monitoring, and social features.',
      image: word_counter,
      tech: ['Html','Css', 'JavaScript'],
      github: '#',
      demo: '#'
    }
  ];

  return (
    <div className="min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">My Projects</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            A showcase of my work spanning various technologies and domains. 
            Each project represents a unique challenge and learning opportunity.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-blue-900/50 rounded-lg overflow-hidden hover:transform hover:scale-105 transition-all duration-300 group">
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-blue-900/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                  <a
                    href={project.github}
                    className="p-3 bg-white rounded-full text-blue-900 hover:bg-gray-100 transition-colors"
                    aria-label="View on GitHub"
                  >
                    <Github size={20} />
                  </a>
                  <a
                    href={project.demo}
                    className="p-3 bg-blue-600 rounded-full text-white hover:bg-blue-700 transition-colors"
                    aria-label="View Demo"
                  >
                    <ExternalLink size={20} />
                  </a>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-2">{project.title}</h3>
                <p className="text-gray-300 mb-4 text-sm leading-relaxed">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-blue-700 text-blue-200 text-xs rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex space-x-4">
                  <a
                    href={project.github}
                    className="flex items-center text-gray-300 hover:text-white transition-colors text-sm"
                  >
                    <Github size={16} className="mr-2" />
                    Code
                  </a>
                  <a
                    href={project.demo}
                    className="flex items-center text-blue-400 hover:text-blue-300 transition-colors text-sm"
                  >
                    <ExternalLink size={16} className="mr-2" />
                    Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <p className="text-gray-300 mb-6">
            Interested in working together or want to see more of my work?
          </p>
          <a
            href="/contact"
            className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-all duration-200 transform hover:scale-105"
          >
            Get In Touch
          </a>
        </div>
      </div>
    </div>
  );
};

export default Projects;
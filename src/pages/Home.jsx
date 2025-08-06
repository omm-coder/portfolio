import React from "react";
import {
  ArrowRight,
  Code,
  Database,
  Globe,
  Star,
  Calendar,
  MessageSquare,
} from "lucide-react";
import { Link } from "react-router-dom";
import note_take from "../assets/Note-Screen.png"
import guess_flag from "../assets/Guess-flag-Screen.png"
import tasklist from "../assets/taskList-Screen.png"

const Home = () => {
  const projects = [
    {
      title: "Task Management App",
      description:
        "Collaborative task management application with real-time updates and team features.",
      image: tasklist,
      tech: ["Html", "Css", "JavaScript"],
      github: "https://github.com/omm-coder/task_manager.git",
      demo: "#",
    },
    {
      title: "Guess Flag App",
      description:
        "Discover and save recipes with advanced search filters and meal planning features.",
      image: guess_flag,
      tech: ["Html", "Css", "JavaScript"],
      github: "https://github.com/omm-coder/guess-flag.git",
      demo: "https://omm-coder.github.io/guess-flag/",
    },
    {
      title: "Note Takin App",
      description: "Analytics dashboard for social media management with data visualization and reporting.",
      image: note_take,
      tech: ["Html", "Css", "JavaScript"],
      github: "https://github.com/omm-coder/note-taker.git",
      demo: "https://omm-coder.github.io/note-taker/",
    },
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Product Manager",
      content:
        "Amazing developer! Delivered our project on time with exceptional quality.",
      rating: 5,
    },
    {
      name: "Mike Chen",
      role: "CTO, TechStart",
      content:
        "Highly skilled and professional. Great communication throughout the project.",
      rating: 5,
    },
  ];

  const events = [
    {
      title: "Tech Conference 2024",
      date: "March 15, 2024",
      description: "Speaking about modern web development practices",
    },
    {
      title: "React Workshop",
      date: "April 20, 2024",
      description: "Conducting hands-on React development workshop",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-4xl md:text-6xl font-bold text-white">
                  I am <span className="text-blue-400">OmmDev</span>
                </h1>
                <h2 className="text-2xl md:text-3xl text-gray-300">
                  Full Stack Developer
                </h2>
              </div>

              <p className="text-lg text-gray-300 leading-relaxed">
                Passionate about creating innovative digital solutions with
                modern technologies. I specialize in full-stack development,
                bringing ideas to life with clean code and exceptional user
                experiences. Always excited to tackle new challenges and help
                bring your vision to reality!
              </p>

              <div className="flex flex-wrap gap-4">
                <Link
                  to="/projects"
                  className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-all duration-200 transform hover:scale-105"
                >
                  View My Work
                  <ArrowRight size={20} className="ml-2" />
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center px-6 py-3 border border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white rounded-lg font-medium transition-all duration-200"
                >
                  Get In Touch
                </Link>
              </div>
            </div>

            <div className="flex justify-center">
              <div className="relative">
                <img
                  src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400"
                  alt="OmmDev Profile"
                  className="w-80 h-80 object-cover rounded-full border-4 border-blue-400 shadow-2xl"
                />
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-blue-500 rounded-full flex items-center justify-center">
                  <Code size={32} className="text-white" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-blue-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">About Me</h2>
            <p className="text-gray-300 max-w-3xl mx-auto">
              I'm a passionate full-stack developer with expertise in modern web
              technologies. I love creating efficient, scalable, and
              user-friendly applications.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-blue-900/50 rounded-lg">
              <Globe size={48} className="mx-auto mb-4 text-blue-400" />
              <h3 className="text-xl font-semibold mb-2">
                Frontend Development
              </h3>
              <p className="text-gray-300">
                React, Vue.js, TypeScript, Tailwind CSS
              </p>
            </div>
            <div className="text-center p-6 bg-blue-900/50 rounded-lg">
              <Database size={48} className="mx-auto mb-4 text-blue-400" />
              <h3 className="text-xl font-semibold mb-2">
                Backend Development
              </h3>
              <p className="text-gray-300">
                Node.js, Python, PostgreSQL, MongoDB
              </p>
            </div>
            <div className="text-center p-6 bg-blue-900/50 rounded-lg">
              <Code size={48} className="mx-auto mb-4 text-blue-400" />
              <h3 className="text-xl font-semibold mb-2">DevOps & Cloud</h3>
              <p className="text-gray-300">AWS, Docker, CI/CD, Kubernetes</p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Showcase */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              Featured Projects
            </h2>
            <p className="text-gray-300">Some of my recent work</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-blue-900/50 rounded-lg overflow-hidden hover:transform hover:scale-105 transition-all duration-300"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-300 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-blue-700 text-blue-200 text-sm rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link
              to="/projects"
              className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-all duration-200"
            >
              View All Projects
              <ArrowRight size={20} className="ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Events Section */}
      <section className="py-16 bg-blue-800/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              Upcoming Events
            </h2>
            <p className="text-gray-300">Speaking engagements and workshops</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {events.map((event, index) => (
              <div
                key={index}
                className="bg-blue-900/50 rounded-lg p-6 flex items-start space-x-4"
              >
                <Calendar size={24} className="text-blue-400 mt-1" />
                <div>
                  <h3 className="text-xl font-semibold mb-2">{event.title}</h3>
                  <p className="text-blue-400 mb-2">{event.date}</p>
                  <p className="text-gray-300">{event.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              What Clients Say
            </h2>
            <p className="text-gray-300">
              Feedback from amazing people I've worked with
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-blue-900/50 rounded-lg p-6">
                <div className="flex items-center mb-4">
                  <MessageSquare size={24} className="text-blue-400 mr-3" />
                  <div className="flex">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        size={16}
                        className="text-yellow-400 fill-current"
                      />
                    ))}
                  </div>
                </div>
                <p className="text-gray-300 mb-4">"{testimonial.content}"</p>
                <div>
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-blue-400 text-sm">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-blue-800/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Work Together?
          </h2>
          <p className="text-gray-300 mb-8 text-lg">
            Let's discuss your project and bring your ideas to life
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium text-lg transition-all duration-200 transform hover:scale-105"
          >
            Start a Project
            <ArrowRight size={24} className="ml-2" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;

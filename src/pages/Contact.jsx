import React, { useState } from 'react';
import { Mail, MessageSquare, Send, MapPin, Phone } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '', 
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Create mailto link with form data
    const mailtoLink = `mailto:ommdev04@gmail.com?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    )}`;
    window.location.href = mailtoLink;
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleWhatsAppClick = () => {
    const message = "Hi! I'd like to discuss a project with you.";
    const whatsappUrl = `https://wa.me/612287694?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="min-h-screen py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Get In Touch</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Ready to start your next project? Let's discuss how we can work together 
            to bring your ideas to life.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-blue-900/50 rounded-lg p-8">
            <h2 className="text-2xl font-bold text-white mb-6">Send Me a Message</h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-blue-800/50 border border-blue-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-colors"
                    placeholder="John Doe"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-blue-800/50 border border-blue-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-colors"
                    placeholder="john@example.com"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                  Subject *
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  required
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-blue-800/50 border border-blue-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-colors"
                  placeholder="Project Discussion"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-blue-800/50 border border-blue-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-colors resize-none"
                  placeholder="Tell me about your project..."
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="w-full flex items-center justify-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-all duration-200 transform hover:scale-105"
              >
                <Send size={20} className="mr-2" />
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold text-white mb-6">Let's Connect</h2>
              <p className="text-gray-300 leading-relaxed mb-8">
                I'm always excited to work on new projects and collaborate with amazing people. 
                Whether you have a specific project in mind or just want to say hello, 
                don't hesitate to reach out!
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <Mail size={24} className="text-blue-400 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold text-white mb-1">Email</h3>
                  <a
                    href="mailto:ommdev04@gmail.com"
                    className="text-blue-400 hover:text-blue-300 transition-colors"
                  >
                    ommdev04@gmail.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <MessageSquare size={24} className="text-green-400 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold text-white mb-1">WhatsApp</h3>
                  <button
                    onClick={handleWhatsAppClick}
                    className="text-green-400 hover:text-green-300 transition-colors"
                  >
                    +612287694
                  </button>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <MapPin size={24} className="text-purple-400 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold text-white mb-1">Location</h3>
                  <p className="text-gray-300">Available worldwide (Remote)</p>
                </div>
              </div>
            </div>

            <div className="bg-blue-900/50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-white mb-4">Quick Response</h3>
              <p className="text-gray-300 mb-4">
                I typically respond to all inquiries within 24 hours. For urgent matters, 
                WhatsApp is the fastest way to reach me.
              </p>
              
              <div className="grid grid-cols-2 gap-4">
                <a
                  href="mailto:ommdev04@gmail.com"
                  className="flex items-center justify-center px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors text-sm"
                >
                  <Mail size={16} className="mr-2" />
                  Email Me
                </a>
                
                <button
                  onClick={handleWhatsAppClick}
                  className="flex items-center justify-center px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg transition-colors text-sm"
                >
                  <Phone size={16} className="mr-2" />
                  WhatsApp
                </button>
              </div>
            </div>

            <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg p-6 text-center">
              <h3 className="text-lg font-semibold text-white mb-2">Ready to Start?</h3>
              <p className="text-blue-100 mb-4">
                Let's turn your ideas into reality. I'm here to help you succeed.
              </p>
              <div className="text-2xl">🚀</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
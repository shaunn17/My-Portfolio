import React from 'react';
import { Mail, Linkedin, Github, MapPin } from 'lucide-react';

const ContactInfo = () => {
  return (
    <section id="contact-info" className="bg-white py-16 md:py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <div className="inline-block mb-3 px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium">
            Contact
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
            Let's Connect
          </h2>
          <p className="text-gray-600 text-lg max-w-xl mx-auto">
            Always open to discussing new opportunities, collaborations, or just chatting about data, AI, and their impact.
          </p>
        </div>

        <div className="max-w-md mx-auto">
          <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-8">
            <div className="flex flex-col items-center text-center">
              <img 
                src="/shaun bg.jpeg"
                alt="Shaun Figueiro"
                className="w-24 h-24 rounded-full mb-4 object-cover"
                style={{ objectPosition: 'center 9%' }}
              />
              <h3 className="text-xl font-bold text-gray-900 mb-1">Shaun Figueiro</h3>
              <p className="text-gray-600 mb-1 whitespace-nowrap">Data Science | Software Engineering | Business Intelligence</p>
              <div className="flex items-center text-gray-500 text-sm mb-6">
                <MapPin className="w-4 h-4 mr-1" />
                Based in Bloomington, IN
              </div>
              
              <div className="flex flex-col space-y-3 w-full">
                <a 
                  href="mailto:figueiroshaun@gmail.com" 
                  className="flex items-center justify-center px-4 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors"
                >
                  <Mail className="w-5 h-5 mr-2" />
                  Email Me
                </a>
                
                <div className="flex gap-3">
                  <a 
                    href="https://www.linkedin.com/in/shaun-figueiro/" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center px-4 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    <Linkedin className="w-5 h-5 mr-2" />
                    LinkedIn
                  </a>
                  
                  <a 
                    href="https://github.com/figueiroshaun" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center px-4 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    <Github className="w-5 h-5 mr-2" />
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactInfo;
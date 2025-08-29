import { Github, Linkedin, Mail, Heart } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          
          {/* About/Bio section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Shaun Figueiro</h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              Data Science graduate student passionate about turning raw data into actionable insights. 
              Currently exploring the intersection of AI, analytics, and real-world problem solving.
            </p>
          </div>
          
          {/* Quick Navigation */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Explore</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-300 hover:text-white transition-colors text-sm">Home</Link></li>
              <li><Link to="/skills" className="text-gray-300 hover:text-white transition-colors text-sm">Skills & Stack</Link></li>
              <li><a href="/#projects" className="text-gray-300 hover:text-white transition-colors text-sm">Projects</a></li>
              <li><a href="/#blog" className="text-gray-300 hover:text-white transition-colors text-sm">Blog</a></li>
            </ul>
          </div>
          
          {/* Social & Connect */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Connect</h3>
            <div className="flex space-x-4 mb-4">
              <a 
                href="mailto:figueiroshaun@gmail.com" 
                className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-300 hover:bg-gray-700 hover:text-white transition-colors"
                aria-label="Email"
              >
                <Mail size={18} />
              </a>
              <a 
                href="https://www.linkedin.com/in/shaun-figueiro/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-300 hover:bg-gray-700 hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
              <a 
                href="https://github.com/shaunn17" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-300 hover:bg-gray-700 hover:text-white transition-colors"
                aria-label="GitHub"
              >
                <Github size={18} />
              </a>
            </div>
            <p className="text-gray-400 text-xs">
              Always open to interesting conversations
            </p>
          </div>
        </div>
        
        {/* Bottom bar */}
        <div className="pt-8 border-t border-gray-800 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 sm:mb-0 flex items-center">
            © {new Date().getFullYear()} Shaun Figueiro • Built with <Heart className="w-4 h-4 mx-1 text-red-400" /> and React
          </p>
          <div className="flex space-x-6">
            <Link to="/privacy-policy" className="text-sm text-gray-400 hover:text-white transition-colors">Privacy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
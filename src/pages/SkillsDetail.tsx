import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import PageLayout from '@/components/PageLayout';
import Skills from '@/components/Skills';
import SEO from '@/components/SEO';

const SkillsDetail = () => {
  const scrollToSkills = () => {
    // Navigate to homepage first, then scroll to skills section
    window.location.href = '/#main-skills';
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <SEO title="Skills & Stack" description="Detailed view of my skills, tools, and project capabilities." />
      
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center space-x-4">
            <button 
              onClick={scrollToSkills}
              className="flex items-center text-gray-600 hover:text-gray-900 transition-colors"
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              Back to Skills
            </button>
            <div className="h-6 w-px bg-gray-300" />
            <h1 className="text-2xl font-bold text-gray-900">Full Skills & Stack</h1>
          </div>
        </div>
      </div>

      {/* Skills Component */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Skills />
      </div>
    </div>
  );
};

export default SkillsDetail;



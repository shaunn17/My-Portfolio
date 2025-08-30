import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, GraduationCap, Target, Heart, Briefcase } from 'lucide-react';

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <section id="about" className="bg-gray-50 py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: true, margin: "-100px" }} 
          variants={containerVariants}
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-12 md:mb-16">
            <div className="inline-block mb-3 px-3 py-1 bg-white text-gray-700 rounded-full text-sm font-medium shadow-sm">
              About Me
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              From Student to Data Professional
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Turning complex data into actionable insights, one problem at a time.
            </p>
          </motion.div>

          {/* Main Content */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Photo Section */}
            <motion.div variants={itemVariants} className="order-2 lg:order-1 flex justify-center">
              <div className="relative">
                <div className="w-80 h-96 rounded-2xl overflow-hidden shadow-xl">
                  <img 
                    src="/shaun-headshot.png"
                    alt="Shaun Figueiro"
                    className="w-full h-full object-cover object-center"
                  />
                </div>
              </div>
            </motion.div>

            {/* Story Section */}
            <motion.div variants={itemVariants} className="order-1 lg:order-2 space-y-6">
              <div className="space-y-4">
                <p className="text-gray-700 text-lg leading-relaxed">
                  Hey! I'm Shaun, a Data and Operations Consultant at <strong>UITS, Indiana University</strong>, where I recently 
                  completed my Master's in Data Science. My journey started with Computer Engineering in Mumbai, 
                  where I first discovered the power of code to solve real-world problems.
                </p>
                
                <p className="text-gray-700 leading-relaxed">
                  Today, I analyze <strong>2,500+ daily ServiceNow tickets</strong> using Python and SQL to identify patterns and 
                  optimize processes. I build Power BI dashboards that have reduced issue resolution time by 25% and 
                  empower 30+ stakeholders to make faster, data-driven decisions.
                </p>
                
                <p className="text-gray-700 leading-relaxed">
                  What excites me most is the intersection of <strong>technical rigor and business impact</strong>. Whether it's 
                  building ETL pipelines, creating predictive models, or designing interactive dashboards, I love transforming 
                  raw data into insights that actually move the needle.
                </p>
              </div>

              {/* Experience Highlights */}
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                  <Briefcase className="w-4 h-4 text-blue-600" />
                  Recent Achievements
                </h4>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>• Reduced Power BI query runtime by 60% through SQL optimization</li>
                  <li>• Built distributed ETL workflows processing 120+ GB clinical data</li>
                  <li>• Improved model training speed by 40% using Spark and Databricks</li>
                  <li>• Mentored students as Graduate Teaching Assistant for SQL & RDBMS</li>
                </ul>
              </div>

              {/* Key Points */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex items-start gap-3 p-4 bg-white rounded-lg shadow-sm">
                  <GraduationCap className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Continuous Learning</h4>
                    <p className="text-gray-600 text-sm">Always exploring new tools and techniques</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3 p-4 bg-white rounded-lg shadow-sm">
                  <Target className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Results-Driven</h4>
                    <p className="text-gray-600 text-sm">Focus on measurable business impact</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3 p-4 bg-white rounded-lg shadow-sm">
                  <Heart className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Collaborative</h4>
                    <p className="text-gray-600 text-sm">Working with cross-functional teams</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3 p-4 bg-white rounded-lg shadow-sm">
                  <div className="w-5 h-5 bg-purple-600 rounded-full mt-0.5 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Problem Solver</h4>
                    <p className="text-gray-600 text-sm">Finding innovative data solutions</p>
                  </div>
                </div>
              </div>

              {/* Call to action */}
              <div className="mt-8">
                <p className="text-gray-600 italic">
                  "The best insights come from understanding both the data and the business challenge it's meant to solve."
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;

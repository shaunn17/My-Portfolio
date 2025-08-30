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

          {/* Story-First Content */}
          <div className="max-w-4xl mx-auto">
            {/* Opening Story */}
            <motion.div variants={itemVariants} className="mb-12">
              <div className="flex flex-col lg:flex-row items-start gap-8">
                <div className="lg:w-2/3">
                  <p className="text-gray-700 text-lg leading-relaxed mb-4">
                    Picture this: You're staring at 2,500 support tickets that flooded in yesterday. Most people see chaos. 
                    I see patterns waiting to be discovered.
                  </p>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    That's my world at <strong>UITS, Indiana University</strong> – where I turn operational headaches into 
                    data-driven solutions. But this story actually starts 8,000 miles away in Mumbai, where a curious 
                    Computer Engineering student first fell in love with the idea that code could solve real problems.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    The path from there to here wasn't linear. It was filled with late nights debugging ETL pipelines, 
                    "aha!" moments while building dashboards, and the satisfaction of watching a 25% improvement in 
                    issue resolution time because of something I built.
                  </p>
                </div>
                <div className="lg:w-1/3 flex justify-center">
                  <div className="w-64 h-80 rounded-xl overflow-hidden shadow-lg">
                    <img 
                      src="/shaun-headshot.png"
                      alt="Shaun Figueiro"
                      className="w-full h-full object-cover object-center"
                    />
                  </div>
                </div>
              </div>
            </motion.div>

            {/* What Drives Me & Current Work Combined */}
            <motion.div variants={itemVariants} className="mb-8">
              <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-6">What gets me excited about data</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  <div>
                    <p className="text-gray-700 leading-relaxed mb-3">
                      It's not the algorithms or the fancy tools (though I do love a good Spark job). It's those moments 
                      when data tells a story that changes how someone thinks about their business.
                    </p>
                    <p className="text-gray-700 leading-relaxed">
                      Like when my dashboard revealed that 60% of recurring issues stemmed from three specific system 
                      configurations. Suddenly, the IT team wasn't just fixing problems – they were preventing them.
                    </p>
                  </div>
                  <div>
                    <p className="text-gray-700 leading-relaxed mb-3">
                      I'm that person who gets genuinely excited about a well-optimized SQL query or a clean ETL pipeline. 
                      But what really drives me is knowing that somewhere, someone is making a better decision because 
                      of the insights I've uncovered.
                    </p>
                    <p className="text-gray-700 leading-relaxed">
                      Whether it's processing 120+ GB of clinical data or teaching SQL to graduate students, I'm always 
                      asking: "How can we make this better?"
                    </p>
                  </div>
                </div>

                {/* Current Work Cards - Integrated */}
                <div className="border-t border-gray-200 pt-6">
                  <h4 className="text-lg font-semibold text-gray-900 mb-4">What this looks like day-to-day</h4>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                      <div className="w-8 h-8 bg-gray-900 rounded-lg flex items-center justify-center mb-3">
                        <Briefcase className="w-4 h-4 text-white" />
                      </div>
                      <h5 className="font-semibold text-gray-900 mb-2 text-sm">Operations Impact</h5>
                      <p className="text-gray-700 text-xs leading-relaxed">
                        Building Power BI dashboards that 30+ stakeholders actually use, turning ServiceNow chaos into clear insights.
                      </p>
                    </div>
                    
                    <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                      <div className="w-8 h-8 bg-gray-900 rounded-lg flex items-center justify-center mb-3">
                        <GraduationCap className="w-4 h-4 text-white" />
                      </div>
                      <h5 className="font-semibold text-gray-900 mb-2 text-sm">Teaching & Mentoring</h5>
                      <p className="text-gray-700 text-xs leading-relaxed">
                        Helping graduate students master SQL. That moment when complex joins finally "click" for someone.
                      </p>
                    </div>
                    
                    <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                      <div className="w-8 h-8 bg-gray-900 rounded-lg flex items-center justify-center mb-3">
                        <Target className="w-4 h-4 text-white" />
                      </div>
                      <h5 className="font-semibold text-gray-900 mb-2 text-sm">Always Learning</h5>
                      <p className="text-gray-700 text-xs leading-relaxed">
                        Exploring how AI can make data pipelines smarter, wondering what BI will look like next.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Tools & Closing Thought Combined */}
            <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Tools */}
              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Tools that make the magic happen</h3>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-medium">Python</span>
                  <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-medium">SQL</span>
                  <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-medium">Power BI</span>
                  <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-medium">Spark</span>
                  <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-medium">Databricks</span>
                  <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-medium">Tableau</span>
                  <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-medium">Azure</span>
                  <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-medium">Snowflake</span>
                </div>
              </div>

              {/* Philosophy */}
              <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">My philosophy</h3>
                <blockquote className="text-gray-700 text-sm italic leading-relaxed mb-3">
                  "The best data scientists aren't just good at math and coding – they're curious about people, 
                  passionate about problems, and obsessed with making things better."
                </blockquote>
                <p className="text-gray-600 text-xs">That's the mindset I bring to every dataset, every dashboard, every decision.</p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;

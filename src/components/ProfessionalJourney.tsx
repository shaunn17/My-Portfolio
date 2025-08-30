import React from 'react';
import { motion } from 'framer-motion';
import { Building2, Calendar, TrendingUp, Code, Database, BarChart3 } from 'lucide-react';

interface JourneyItem {
  company: string;
  role: string;
  duration: string;
  type: string;
  location: string;
  achievements: string[];
  technologies: string[];
  impact: string;
  icon: JSX.Element;
  color: string;
}

const ProfessionalJourney = () => {
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

  const journeyData: JourneyItem[] = [
    {
      company: "UITS Enterprise Services",
      role: "Data and Operations Consultant",
      duration: "August 2024 – Present",
      type: "Full-time",
      location: "Indiana University, Remote",
      achievements: [
        "Analyzed 2,500+ daily ServiceNow tickets using Python and SQL for root-cause analysis",
        "Built Power BI dashboards reducing issue resolution time by 25%",
        "Enabled 30+ stakeholders to make faster, data-driven decisions",
        "Ensured data quality through validation rules and governance standards"
      ],
      technologies: ["Python", "SQL", "Power BI", "ServiceNow"],
      impact: "25% faster issue resolution",
      icon: <Building2 className="w-5 h-5" />,
      color: "blue"
    },
    {
      company: "Indiana University",
      role: "Graduate Teaching Assistant – SQL & RDBMS",
      duration: "June 2024 – May 2025",
      type: "Part-time",
      location: "Bloomington, IN",
      achievements: [
        "Led interactive hands-on lab sessions on SQL and RDBMS concepts",
        "Boosted average final-project grades by 30% through effective mentorship",
        "Taught schemas, joins, indexing, window functions, and CTEs",
        "Provided mentorship on data modeling and logical database design"
      ],
      technologies: ["SQL", "Database Design", "RDBMS"],
      impact: "30% grade improvement",
      icon: <Code className="w-5 h-5" />,
      color: "green"
    },
    {
      company: "Indiana University",
      role: "Data Analyst Research Intern",
      duration: "May 2024 – August 2024",
      type: "Internship",
      location: "Bloomington, IN",
      achievements: [
        "Devised distributed data preprocessing pipelines for 100k+ histology images",
        "Architected ETL workflow with Hadoop, Spark and Azure Databricks",
        "Processed 120+ GB of clinical imaging data from AWS S3",
        "Accelerated model training by 40% through optimized data pipelines"
      ],
      technologies: ["Hadoop", "Spark", "Azure Databricks", "AWS S3"],
      impact: "40% faster model training",
      icon: <Database className="w-5 h-5" />,
      color: "purple"
    },
    {
      company: "Cyberinfrastructure for Network Science Center",
      role: "BI Data Analyst",
      duration: "January 2024 – May 2024",
      type: "Part-time",
      location: "Bloomington, IN",
      achievements: [
        "Built real-time dashboard tracking 192K+ user events from GCP BigQuery",
        "Integrated REST API endpoints for live data visualization",
        "Optimized SQL queries reducing runtime by 60%",
        "Informed 40% expansion in customer engagement initiatives"
      ],
      technologies: ["Power BI", "GCP BigQuery", "SQL", "REST APIs"],
      impact: "60% query optimization",
      icon: <BarChart3 className="w-5 h-5" />,
      color: "orange"
    },
    {
      company: "Orange Health Labs",
      role: "Data Analyst Intern",
      duration: "January 2022 – May 2023",
      type: "Internship",
      location: "Mumbai, India",
      achievements: [
        "Orchestrated ETL pipelines ingesting data from three sources into Snowflake",
        "Cut data ingestion time by 40% through process optimization",
        "Developed Tableau dashboards tracking 2,500+ daily employee workloads",
        "Reduced ad-hoc reporting by 80% improving workforce efficiency"
      ],
      technologies: ["Python", "SQL", "Snowflake", "Tableau"],
      impact: "40% faster data ingestion",
      icon: <TrendingUp className="w-5 h-5" />,
      color: "teal"
    },
    {
      company: "Kubixsquare",
      role: "Software Engineer Intern",
      duration: "June 2021 – December 2021",
      type: "Internship",
      location: "Mumbai, India",
      achievements: [
        "Architected student onboarding and progress tracking dashboard",
        "Built with React (TypeScript) and Node.js for 1500+ learners",
        "Integrated REST and GraphQL APIs for live course data",
        "Improved assignment submission rates by 30%"
      ],
      technologies: ["React", "TypeScript", "Node.js", "GraphQL"],
      impact: "30% better engagement",
      icon: <Code className="w-5 h-5" />,
      color: "indigo"
    }
  ];

  const getColorClasses = (color: string) => {
    const colorMap = {
      blue: "bg-blue-600 border-blue-200 text-blue-800",
      green: "bg-green-600 border-green-200 text-green-800", 
      purple: "bg-purple-600 border-purple-200 text-purple-800",
      orange: "bg-orange-600 border-orange-200 text-orange-800",
      teal: "bg-teal-600 border-teal-200 text-teal-800",
      indigo: "bg-indigo-600 border-indigo-200 text-indigo-800"
    };
    return colorMap[color as keyof typeof colorMap] || colorMap.blue;
  };

  return (
    <section id="professional-journey" className="bg-white py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: true, margin: "-100px" }} 
          variants={containerVariants}
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-12 md:mb-16">
            <div className="inline-block mb-3 px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium">
              Professional Journey
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Career Progression
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              From software engineering to data science – each role building on the last, 
              growing expertise and delivering measurable impact.
            </p>
          </motion.div>

          {/* Timeline */}
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gray-200"></div>
            
            <div className="space-y-12">
              {journeyData.map((item, index) => (
                <motion.div 
                  key={index} 
                  variants={itemVariants}
                  className="relative flex items-start"
                >
                  {/* Timeline dot */}
                  <div className={`absolute left-6 w-4 h-4 rounded-full ${getColorClasses(item.color).split(' ')[0]} border-4 border-white shadow-md z-10`}></div>
                  
                  {/* Content card */}
                  <div className="ml-16 bg-white rounded-xl shadow-lg border border-gray-200 p-6 w-full hover:shadow-xl transition-shadow">
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                      {/* Left content */}
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <div className={`w-10 h-10 rounded-lg ${getColorClasses(item.color).split(' ')[0]} flex items-center justify-center text-white`}>
                            {item.icon}
                          </div>
                          <div>
                            <h3 className="text-xl font-bold text-gray-900">{item.role}</h3>
                            <p className="text-gray-600 font-medium">{item.company}</p>
                          </div>
                        </div>
                        
                        <div className="flex flex-wrap items-center gap-4 mb-4 text-sm text-gray-500">
                          <div className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            {item.duration}
                          </div>
                          <span className="px-2 py-1 bg-gray-100 rounded-full text-xs">{item.type}</span>
                          <span>{item.location}</span>
                        </div>

                        <ul className="space-y-2 mb-4">
                          {item.achievements.map((achievement, idx) => (
                            <li key={idx} className="text-gray-700 text-sm flex items-start">
                              <span className="text-gray-400 mr-2">•</span>
                              {achievement}
                            </li>
                          ))}
                        </ul>

                        <div className="flex flex-wrap gap-2">
                          {item.technologies.map((tech, idx) => (
                            <span 
                              key={idx} 
                              className={`px-3 py-1 rounded-full text-xs font-medium bg-${item.color}-50 ${getColorClasses(item.color).split(' ')[2]}`}
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Impact highlight */}
                      <div className="md:w-48 flex-shrink-0">
                        <div className={`bg-${item.color}-50 rounded-lg p-4 text-center border ${getColorClasses(item.color).split(' ')[1]}`}>
                          <div className="flex items-center justify-center mb-2">
                            <TrendingUp className={`w-5 h-5 ${getColorClasses(item.color).split(' ')[2]}`} />
                          </div>
                          <p className={`font-bold text-lg ${getColorClasses(item.color).split(' ')[2]}`}>
                            {item.impact}
                          </p>
                          <p className="text-gray-600 text-xs">Key Impact</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Journey Summary */}
          <motion.div variants={itemVariants} className="mt-16 text-center">
            <div className="bg-gray-50 rounded-xl p-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">The Journey So Far</h3>
              <p className="text-gray-700 max-w-3xl mx-auto leading-relaxed">
                From building student dashboards in Mumbai to optimizing enterprise operations at Indiana University, 
                each role has deepened my expertise in turning data into actionable insights. The common thread? 
                Always finding ways to make systems more efficient and decisions more informed.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProfessionalJourney;

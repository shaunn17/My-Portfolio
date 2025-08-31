import { motion } from "framer-motion";
import { ArrowLeft, Lightbulb, Code, GitBranch, Cloud, Zap, CheckCircle, AlertCircle, Clock, Users, Target, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";
import SEO from "@/components/SEO";

const BehindScenes = () => {
  const developmentStages = [
    {
      phase: "Planning & Research",
      icon: <Target className="w-6 h-6" />,
      description: "Understanding requirements and exploring modern web technologies",
      challenges: ["Choosing the right tech stack", "Planning the information architecture", "Researching best practices"],
      solutions: ["Selected React + TypeScript for type safety", "Designed component-based architecture", "Followed modern web standards"],
      lessons: "Starting with a solid foundation saves significant time during development"
    },
    {
      phase: "Design & Architecture",
      icon: <Lightbulb className="w-6 h-6" />,
      description: "Creating the visual design and technical architecture",
      challenges: ["Balancing aesthetics with functionality", "Designing responsive layouts", "Planning component structure"],
      solutions: ["Used TailwindCSS for consistent design system", "Mobile-first responsive approach", "Modular component architecture"],
      lessons: "Good design systems scale better and are easier to maintain"
    },
    {
      phase: "Development & Implementation",
      icon: <Code className="w-6 h-6" />,
      description: "Building the core functionality and components",
      challenges: ["Managing complex state", "Implementing smooth animations", "Ensuring cross-browser compatibility"],
      solutions: ["Used React hooks for state management", "Framer Motion for animations", "Progressive enhancement approach"],
      lessons: "Modern tools can significantly speed up development when used correctly"
    },
    {
      phase: "Content & Integration",
      icon: <Users className="w-6 h-6" />,
      description: "Integrating external content and optimizing user experience",
      challenges: ["Medium RSS feed integration", "Image optimization", "Performance optimization"],
      solutions: ["Multi-proxy approach for RSS", "Responsive images with fallbacks", "Code splitting and lazy loading"],
      lessons: "External integrations often require creative solutions and fallback strategies"
    },
    {
      phase: "Deployment & DevOps",
      icon: <Cloud className="w-6 h-6" />,
      description: "Setting up production deployment and CI/CD pipeline",
      challenges: ["AWS configuration complexity", "CloudFront access issues", "Setting up automated deployment"],
      solutions: ["Step-by-step AWS console setup", "Proper bucket policies and permissions", "GitHub Actions workflow"],
      lessons: "DevOps skills are crucial for modern web development and deployment"
    },
    {
      phase: "Testing & Optimization",
      icon: <TrendingUp className="w-6 h-6" />,
      description: "Performance testing and final optimizations",
      challenges: ["Identifying performance bottlenecks", "Mobile performance optimization", "SEO optimization"],
      solutions: ["Lighthouse performance audits", "Mobile-first testing", "Meta tags and structured data"],
      lessons: "Performance optimization is an ongoing process, not a one-time task"
    }
  ];

  const keyDecisions = [
    {
      decision: "React + TypeScript over plain JavaScript",
      reasoning: "Type safety, better developer experience, and industry standard for modern web apps",
      outcome: "Reduced bugs, better code quality, and easier maintenance"
    },
    {
      decision: "TailwindCSS over custom CSS",
      reasoning: "Rapid development, consistent design system, and excellent responsive utilities",
      outcome: "Faster development and consistent visual design across components"
    },
    {
      decision: "AWS S3 + CloudFront over traditional hosting",
      reasoning: "Scalability, global performance, and professional-grade infrastructure",
      outcome: "Fast loading times worldwide and enterprise-level reliability"
    },
    {
      decision: "GitHub Actions for CI/CD",
      reasoning: "Free for public repos, seamless GitHub integration, and industry standard",
      outcome: "Automated deployments and professional development workflow"
    },
    {
      decision: "Component-based architecture",
      reasoning: "Reusability, maintainability, and easier testing and debugging",
      outcome: "Cleaner code structure and easier feature additions"
    }
  ];

  const challengesOvercome = [
    {
      challenge: "Medium RSS Feed Integration",
      problem: "Medium's Cloudflare protection blocking direct API access",
      solution: "Implemented multi-proxy approach with fallback strategies",
      impact: "Reliable blog content display with graceful degradation"
    },
    {
      challenge: "AWS CloudFront Access Issues",
      problem: "Complex S3 bucket policies and CloudFront configuration",
      solution: "Proper IAM setup and bucket policy configuration",
      impact: "Secure, HTTPS-enabled global CDN distribution"
    },
    {
      challenge: "Responsive Design Complexity",
      problem: "Ensuring perfect experience across all device sizes",
      solution: "Mobile-first approach with TailwindCSS responsive utilities",
      impact: "Seamless experience on all devices from mobile to desktop"
    },
    {
      challenge: "Performance Optimization",
      problem: "Large bundle sizes and slow loading times",
      solution: "Code splitting, lazy loading, and CDN optimization",
      impact: "Fast loading times and excellent Core Web Vitals scores"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <SEO 
        title="Behind the Scenes - Shaun Figueiro"
        description="Behind the scenes of building this portfolio website - challenges, decisions, lessons learned, and the development journey."
        keywords={['portfolio development', 'web development process', 'challenges', 'lessons learned', 'development journey']}
      />
      
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center space-x-4">
            <Link 
              to="/" 
              className="flex items-center text-gray-600 hover:text-gray-900 transition-colors"
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              Back to Portfolio
            </Link>
            <div className="h-6 w-px bg-gray-300" />
            <h1 className="text-2xl font-bold text-gray-900">Behind the Scenes</h1>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Introduction */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            The Development Journey
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Building this portfolio wasn't just about the final result - it was about the process, the challenges, 
            the decisions, and the lessons learned along the way. Here's what happened behind the scenes.
          </p>
        </motion.div>

        {/* Development Stages */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Development Phases</h3>
          <div className="space-y-8">
            {developmentStages.map((stage, index) => (
              <motion.div
                key={stage.phase}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-sm border p-6"
              >
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-blue-100 rounded-lg text-blue-600 flex-shrink-0">
                    {stage.icon}
                  </div>
                  <div className="flex-1">
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">{stage.phase}</h4>
                    <p className="text-gray-600 mb-4">{stage.description}</p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div>
                        <h5 className="font-medium text-gray-900 mb-2 flex items-center">
                          <AlertCircle className="w-4 h-4 mr-2 text-orange-500" />
                          Challenges
                        </h5>
                        <ul className="space-y-1">
                          {stage.challenges.map((challenge, idx) => (
                            <li key={idx} className="text-sm text-gray-600 flex items-center">
                              <div className="w-1.5 h-1.5 bg-orange-400 rounded-full mr-2" />
                              {challenge}
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div>
                        <h5 className="font-medium text-gray-900 mb-2 flex items-center">
                          <CheckCircle className="w-4 h-4 mr-2 text-green-500" />
                          Solutions
                        </h5>
                        <ul className="space-y-1">
                          {stage.solutions.map((solution, idx) => (
                            <li key={idx} className="text-sm text-gray-600 flex items-center">
                              <div className="w-1.5 h-1.5 bg-green-400 rounded-full mr-2" />
                              {solution}
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div>
                        <h5 className="font-medium text-gray-900 mb-2 flex items-center">
                          <Lightbulb className="w-4 h-4 mr-2 text-blue-500" />
                          Key Lesson
                        </h5>
                        <p className="text-sm text-gray-600">{stage.lessons}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Key Decisions */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="bg-white rounded-xl shadow-sm border p-8 mb-16"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Key Decisions & Their Impact</h3>
          <div className="space-y-6">
            {keyDecisions.map((decision, index) => (
              <div key={index} className="border-l-4 border-blue-500 pl-6">
                <h4 className="font-semibold text-gray-900 mb-2">{decision.decision}</h4>
                <p className="text-gray-600 mb-2"><strong>Reasoning:</strong> {decision.reasoning}</p>
                <p className="text-gray-600"><strong>Outcome:</strong> {decision.outcome}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Challenges Overcome */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-gradient-to-r from-green-50 to-blue-50 rounded-xl p-8 mb-16"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Major Challenges & Solutions</h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {challengesOvercome.map((item, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-sm">
                <h4 className="font-semibold text-gray-900 mb-3">{item.challenge}</h4>
                <div className="space-y-2 text-sm">
                  <p><strong className="text-red-600">Problem:</strong> {item.problem}</p>
                  <p><strong className="text-green-600">Solution:</strong> {item.solution}</p>
                  <p><strong className="text-blue-600">Impact:</strong> {item.impact}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Lessons Learned */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="bg-white rounded-xl shadow-sm border p-8 mb-16"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Key Lessons Learned</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                <p className="text-gray-600">Start with a solid foundation - the right tech stack and architecture save significant time later</p>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                <p className="text-gray-600">External integrations often require creative solutions and multiple fallback strategies</p>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                <p className="text-gray-600">DevOps skills are crucial for modern web development and professional deployment</p>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                <p className="text-gray-600">Performance optimization is an ongoing process, not a one-time task</p>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                <p className="text-gray-600">Good design systems scale better and are easier to maintain long-term</p>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                <p className="text-gray-600">Modern tools can significantly speed up development when used correctly</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center"
        >
          <p className="text-gray-600 mb-6">
            This development journey demonstrates my problem-solving approach, technical decision-making, 
            and ability to overcome complex challenges in web development.
          </p>
          <Link 
            to="/about-website"
            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
          >
            View Technical Details
            <ArrowLeft className="w-4 h-4 ml-2 rotate-180" />
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default BehindScenes;
